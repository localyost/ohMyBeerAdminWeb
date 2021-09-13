import {BaseEntity} from "../../core/classes/base-entity";
import {Address} from "./address";
import {Socials} from "./socials";

export interface Brewery extends BaseEntity {
  name: string;
  logo: string;
  address: Address;
  socials: Socials;
}
