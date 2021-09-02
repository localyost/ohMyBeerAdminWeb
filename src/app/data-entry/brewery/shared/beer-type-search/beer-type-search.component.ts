import {Component, ContentChild, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatFormField, MatFormFieldControl} from "@angular/material/form-field";
import {BeerTypeService} from "../../../services/beer-type.service";
import {Observable} from "rxjs";
import {BeerType} from "../../../model/beerType";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-beer-type-search',
  templateUrl: './beer-type-search.component.html'
})
export class BeerTypeSearchComponent implements OnInit {

  @Input() public control!: FormControl;

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  @ViewChild('beerTypeSearchField', { static: true })
  public matFormField!: MatFormField;

  filteredOptions!: Observable<BeerType[]>;

  displayFn(beerType: BeerType): string {
    return beerType && beerType.name ? beerType.name : '';
  }

  constructor(private beerTypeService: BeerTypeService) { }

  ngOnInit(): void {
    this.matFormField._control = this.formFieldControl;
    this.filteredOptions = this.control.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this.beerTypeService.search(value);
      })
    )
  }

}
