import {BaseEntity} from "../../core/classes/base-entity";
import {Translation} from "../../shared/interfaces/translation";

export interface Ingredient extends BaseEntity {
  labels: Translation;
  name: string;
}
