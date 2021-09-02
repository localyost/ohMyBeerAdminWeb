import {BaseEntity} from "../../core/classes/base-entity";
import {Language} from "../../shared/interfaces/language";

export interface Ingredient extends BaseEntity {
  labels: Language;
  name: string;
}
