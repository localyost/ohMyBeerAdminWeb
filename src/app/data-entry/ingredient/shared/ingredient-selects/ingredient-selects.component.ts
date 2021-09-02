import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/ingredient";
import {FormControl} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";
import {debounceTime, map, switchMap} from "rxjs/operators";
import {IngredientService} from "../../../services/ingredient.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-ingredient-selects',
  templateUrl: './ingredient-selects.component.html',
  styleUrls: ['./ingredient-selects.component.css']
})
export class IngredientSelectsComponent implements OnInit {

  public inputControl = new FormControl();
  @Input() public ingredientsControl!: FormControl;
  public ingredients!: Ingredient[];

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredOptions!: Observable<Ingredient[]>;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientsControl.value;
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      debounceTime(400),
      switchMap(name => {
        return this.ingredientService.searchIngredientByName(name).pipe(
          map(value => {
            return this.filterResponses(value);
          })
        );
      })
    )
  }

  private filterResponses(ingredients: Ingredient[]): Ingredient[] {
    let savedIds = this.ingredients.map(value => value.id);
    return ingredients.filter(value => {
      return !savedIds.includes(value.id);
    })
  }

  displayFn(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

  public addIngredient(event: MatAutocompleteSelectedEvent) {
    this.ingredients.push(event.option.value);
    this.input.nativeElement.value = '';
    this.inputControl.setValue(null);
  }

  public removeIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(value => {
      return value.id != ingredient.id;
    });
    this.ingredientsControl.setValue(this.ingredients);
  }
}
