import {BaseEntity} from "../../core/classes/base-entity";
import {Translation} from "../../shared/interfaces/translation";
import {Ingredient} from "./ingredient";
import {Brewery} from "./brewery";
import {BeerType} from "./beerType";

export interface Beer extends BaseEntity {
  name: string;
  beerTypes: BeerType[];
  description: Translation;
  foodPairing: Translation;
  ingredients: Ingredient[];
  fermentation: string;
  color: string;
  ibu: number;
  gravity: number;
  alcoholContent: number;
  brewery: Brewery;
  photos: string[];
}
