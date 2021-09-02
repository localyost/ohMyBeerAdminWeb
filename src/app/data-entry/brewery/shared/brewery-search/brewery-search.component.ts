import {Component, ContentChild, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {MatFormField, MatFormFieldControl} from "@angular/material/form-field";
import {Brewery} from "../../../model/brewery";
import {BreweryService} from "../../../services/brewery.service";

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html'
})
export class BrewerySearchComponent implements OnInit {

  @Input() public control!: FormControl;

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  @ViewChild('brewerySearchField', { static: true })
  public matFormField!: MatFormField;

  filteredOptions!: Observable<Brewery[]>;

  displayFn(brewery: Brewery): string {
    return brewery && brewery.name ? brewery.name : '';
  }

  constructor(private breweryService: BreweryService) {  }

  ngOnInit(): void {
    this.matFormField._control = this.formFieldControl;
    this.filteredOptions = this.control.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        return this.breweryService.search(value);
      })
    )
  }
}
