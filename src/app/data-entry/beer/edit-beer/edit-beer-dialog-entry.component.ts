import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {BeerService} from "../../services/beer.service";
import {Beer} from "../../model/beer";
import {EditBeerComponent} from "./edit-beer.component";

@Component({
  selector: 'app-edit-beer-dialog-entry',
  template: ''
})
export class EditBeerDialogEntryComponent implements OnInit {

  private id!: number;

  private get isEdit(){
    return this.id != undefined;
  }

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id']);
      }
      this.getBeer();
    })
  }

  private getBeer(){
    if (this.isEdit) {
      this.beerService.fetchOne(this.id).toPromise().then(beer => {
        this.openDialog(beer);
      });
    } else {
      this.openDialog({});
    }
  }

  private openDialog(beer: Beer | {}) {
    this.dialog.open(EditBeerComponent, {data: beer});
  }

}
