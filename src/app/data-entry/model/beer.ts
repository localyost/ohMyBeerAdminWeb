import {BaseEntity, BaseModifyDTO} from "../../core/classes/base-entity";
import {Translation} from "../../shared/interfaces/translation";
import {Ingredient} from "./ingredient";
import {Brewery} from "./brewery";
import {BeerType} from "./beerType";

export interface Beer extends BaseEntity {
  name: string;
  beerType: BeerType;
  description: Translation;
  foodPairing: Translation;
  ingredients: Ingredient[];
  fermentation: string;
  color: string;
  ibu: number;
  gravity: number;
  alcoholContent: number;
  brewery: Brewery
}

export interface BeerModify extends BaseModifyDTO{
  name?: string;
  beerType?: number;
  description?: Translation;
  foodPairing?: Translation;
  ingredients?: number[];
  fermentation?: string;
  color?: string;
  ibu?: number;
  gravity?: number;
  alcoholContent?: number;
  brewery?: number
}
