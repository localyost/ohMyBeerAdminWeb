import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Beer} from "../../model/beer";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {

  public options: FormGroup;
  public nameControl = new FormControl();
  public breweryControl = new FormControl();

  public descriptions = {
    deControl: new FormControl(),
    enControl: new FormControl(),
    czControl: new FormControl()
  }

  public foodPairingTexts = {
    deControl: new FormControl(),
    enControl: new FormControl(),
    czControl: new FormControl()
  }
  public colorControl = new FormControl();
  public ingredientsControl = new FormControl();
  public fermentationControl = new FormControl();
  public ibuControl = new FormControl();
  public gravityControl = new FormControl();
  public alcoholContentControl = new FormControl();

  public selectedFermentationType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public beer: Beer,
    private fb: FormBuilder) {
    this.setFormControls(beer);
    this.selectedFermentationType = beer.fermentation;
    this.options = fb.group({
      name: this.nameControl,
      brewery: this.breweryControl,
      descriptionDE: this.descriptions.deControl,
      descriptionEN: this.descriptions.enControl,
      descriptionCZ: this.descriptions.czControl,
      color: this.colorControl,
      foodPairingDE: this.foodPairingTexts.deControl,
      foodPairingEN: this.foodPairingTexts.enControl,
      foodPairingCZ: this.foodPairingTexts.czControl,
      ingredients: this.ingredientsControl,
      fermentation: this.fermentationControl,
      ibu: this.ibuControl,
      gravity: this.gravityControl,
      alcoholContent: this.alcoholContentControl,
    });
  }

  private setFormControls(beer: Beer) {
    this.nameControl.setValue(beer.name);
    this.breweryControl.setValue(beer.brewery);
    this.colorControl.setValue(beer.color);
    this.fermentationControl.setValue(beer.fermentation);
    this.ibuControl.setValue(beer.ibu);
    this.gravityControl.setValue(beer.gravity);
    this.alcoholContentControl.setValue(beer.alcoholContent);
    this.descriptions.deControl.setValue(beer.description?.de);
    this.descriptions.enControl.setValue(beer.description?.en);
    this.descriptions.czControl.setValue(beer.description?.cz);

    this.foodPairingTexts.deControl.setValue(beer.foodPairing?.de)
    this.foodPairingTexts.enControl.setValue(beer.foodPairing?.en)
    this.foodPairingTexts.czControl.setValue(beer.foodPairing?.cz)

    this.ingredientsControl.setValue(beer.ingredients);

  }

  public onSave() {
    console.log(this.options.controls.ingredients.value)
  }

}
