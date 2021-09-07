import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {BeerTypeService} from "../../../services/beer-type.service";
import {Observable} from "rxjs";
import {BeerType} from "../../../model/beerType";
import {debounceTime, map, switchMap} from "rxjs/operators";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-beer-type-search',
  templateUrl: './beer-type-search.component.html'
})
export class BeerTypeSearchComponent implements OnInit {

  public inputControl = new FormControl();
  @Input() public beerTypesControl!: FormControl;
  public beerTypes!: BeerType[];

  @ViewChild('input')
  public input!: ElementRef<HTMLInputElement>;

  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredOptions!: Observable<BeerType[]>;

  displayFn(beerType: BeerType): string {
    return beerType && beerType.name ? beerType.name : '';
  }

  constructor(private beerTypeService: BeerTypeService) { }

  ngOnInit(): void {
    this.beerTypes = this.beerTypesControl.value;
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      debounceTime(400),
      switchMap(name => {
        return this.beerTypeService.search(name).pipe(
          map(value => {
            return this.filterResponses(value);
          })
        );
      })
    );
  }

  private filterResponses(beerTypes: BeerType[]): BeerType[] {
    let savedIds = this.beerTypes.map(value => value.id);
    return beerTypes.filter(value => {
      return !savedIds.includes(value.id);
    })
  }

  public add(event: MatAutocompleteSelectedEvent){
    this.beerTypes.push(event.option.value);
    this.input.nativeElement.value = '';
    this.inputControl.setValue(null);
  }

  public remove(ingredient: BeerType) {
    this.beerTypes = this.beerTypes.filter(value => {
      return value.id != ingredient.id;
    });
    this.beerTypesControl.setValue(this.beerTypes);
  }

}
