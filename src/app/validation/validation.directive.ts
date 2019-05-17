import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail][formControlName], [validateEmail][formControl],[validateEmail][ngModel]',
  providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
  ]
})
export class EmailValidator implements Validator {

  constructor() {
  }

  validate(c: AbstractControl) {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return EMAIL_REGEXP.test(c.value) ? null : {
          validateEmail: {
              valid: false
          }
      };
    }

  }
// export class ValidationComponent {


//     emailValidator(control) {
//         var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      
//         if (!EMAIL_REGEXP.test(control.value)) {
//           return {invalidEmail: true};
//         }
//     }
// }