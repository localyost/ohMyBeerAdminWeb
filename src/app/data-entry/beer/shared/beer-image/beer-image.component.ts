import {Component, Input, OnInit} from '@angular/core';
import {BeerService} from "../../../services/beer.service";

@Component({
  selector: 'app-beer-image',
  template: '<img src="{{src}}" style="max-width: 100%; max-height: 100%" alt="">'
})
export class BeerImageComponent implements OnInit {

  @Input() public src!: string;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    if (this.src.length < 10000) {
      this.src = this.beerService.getImagePath(this.src);
    }
  }

}
