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
  public beerTypeControl = new FormControl({}, Validators.required);
  public descriptionGroup: FormGroup;
  public foodParingTextGroup: FormGroup;

  public ingredientsControl = new FormControl();
  public selectedFermentationType;

  private isCreate() {
    return this.beer.id === undefined;
  }

  constructor(
    private beerService: BeerService,
    @Inject(MAT_DIALOG_DATA) public beer: Beer,
    private fb: FormBuilder) {
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
    this.beerTypeControl.setValue(beer.beerType)
    this.ingredientsControl.setValue(beer.ingredients || []);

    this.formGroup = fb.group({
      description: this.fb.group(this.descriptionGroup),
      foodPairing: fb.group(this.foodParingTextGroup),
      ingredients: this.ingredientsControl,
      beerType: this.beerTypeControl,
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
    if (this.isCreate()) {
      this.beerService.createOne(this.formGroup.value);
    } else  {
      saveBeer.id = this.beer.id;
      this.beerService.updateOne(saveBeer);
    }

  }
}
