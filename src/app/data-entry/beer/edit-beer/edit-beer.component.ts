import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Beer} from "../../model/beer";

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditBeerComponent>,
    @Inject(MAT_DIALOG_DATA) public beer: Beer) {
  }

  ngOnInit(): void {
    console.log(this.beer)
  }

}
