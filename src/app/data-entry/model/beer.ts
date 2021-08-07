import {BaseEntity} from "../../core/classes/BaseEntity";

export interface Beer extends BaseEntity{
  name: string;
  description: { de: string, en: string };
  foodPairing: { de: string, en: string };
  ingredients: { de: string, en: string };
  fermentation: string;
  color: string;
  ibu: number;
  gravity: number;
  alcoholContent: number;

}
