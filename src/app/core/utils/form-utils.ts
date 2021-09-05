import {FormControl, FormGroup} from "@angular/forms";
import {BaseModifyDTO} from "../classes/base-entity";

export class FormUtils {
  public static getDirtyControls(formGroup: FormGroup): FormControl[] {
    const controls = formGroup.controls;
    return Object.keys(controls).map(controlName => {
      const control = formGroup.get(controlName) as FormControl;
      return (control && control.dirty) ? control : null;
    }).filter(Boolean) as FormControl[];
  }

  public static assign(dto: BaseModifyDTO, control: FormControl, callback?: () => void): any {
    if (control.dirty) {
     return callback ? callback() : control.value;
    }
  }

}
