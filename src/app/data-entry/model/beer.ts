import {BaseEntity} from "../../core/classes/base-entity";
import {Language} from "../../shared/interfaces/language";
import {Ingredient} from "./ingredient";
import {Brewery} from "./brewery";
import {BeerType} from "./beerType";

export interface Beer extends BaseEntity {
  name: string;
  beerType: BeerType;
  description: Language;
  foodPairing: Language;
  ingredients: Ingredient[];
  fermentation: string;
  color: string;
  ibu: number;
  gravity: number;
  alcoholContent: number;
  brewery: Brewery

}
