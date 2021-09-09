import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Beer} from "../../model/beer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {

  public formGroup: FormGroup;
  public breweryControl = new FormControl({}, Validators.required);
  public beerTypesControl = new FormControl({}, Validators.required);
  public descriptionGroup: FormGroup;
  public foodParingTextGroup: FormGroup;
  public images!: FileList;
  public imagePaths: string[] = [];

  public ingredientsControl = new FormControl();
  public selectedFermentationType;

  private isCreate() {
    return this.beer.id === undefined;
  }

  public onImagesChanged(fileList: FileList) {
    this.images = fileList;
    for (let index = 0; index < this.images.length; index++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image(10, 10);
        image.src = e.target.result;
        image.onload = () => {
          this.imagePaths.push(e.target.result)
        };
      };
      const file = this.images.item(Number(index));
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  public deleteImage(imagePath: string) {
    this.beerService.deleteImage(imagePath).then(() => {
      this.imagePaths = this.imagePaths.filter(image => image !== imagePath);
    });
  }

  constructor(
    private beerService: BeerService,
    @Inject(MAT_DIALOG_DATA) public beer: Beer,
    private fb: FormBuilder) {
    if (Array.isArray(beer.photos)) {
      this.imagePaths = beer.photos;
    }
    this.selectedFermentationType = beer.fermentation;
    this.descriptionGroup = fb.group({
      de: new FormControl(beer.description?.de),
      en: new FormControl(beer.description?.en),
      cz: new FormControl(beer.description?.cz),
      id: new FormControl(beer.description?.id),
    });

    this.foodParingTextGroup = fb.group({
      de: new FormControl(beer.foodPairing?.de),
      en: new FormControl(beer.foodPairing?.en),
      cz: new FormControl(beer.foodPairing?.cz),
      id: new FormControl(beer.foodPairing?.id),
    })

    this.breweryControl.setValue(beer.brewery);
    this.beerTypesControl.setValue(beer.beerTypes || [])
    this.ingredientsControl.setValue(beer.ingredients || []);

    this.formGroup = fb.group({
      description: this.fb.group(this.descriptionGroup),
      foodPairing: fb.group(this.foodParingTextGroup),
      ingredients: this.ingredientsControl,
      beerTypes: this.beerTypesControl,
      brewery: this.breweryControl,
      name: new FormControl(beer.name, Validators.required),
      color: new FormControl(beer.color),
      fermentation: new FormControl(beer.fermentation),
      ibu: new FormControl(beer.ibu),
      gravity: new FormControl(beer.gravity),
      alcoholContent: new FormControl(beer.alcoholContent)
    });
  }

  public onSave() {
    const saveBeer: Beer = this.formGroup.value;
    saveBeer.description = this.descriptionGroup.value;
    saveBeer.foodPairing = this.foodParingTextGroup.value;
    let promise: Promise<Beer>;
    if (this.isCreate()) {
      promise = this.beerService.createOne(this.formGroup.value);
    } else  {
      saveBeer.id = this.beer.id;
      promise = this.beerService.updateOne(saveBeer);
    }

    promise.then((beer: Beer) => {
      if (this.images) {
        this.beerService.uploadImages(beer.id, this.images);
      }
    })
  }
}
