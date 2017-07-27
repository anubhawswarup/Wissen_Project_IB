
import { AbstractControl } from '@angular/forms';

export function rangeValidator(c: AbstractControl): { [key: string]: boolean } | null {

    if (c.value >= 1000 && c.value <= 2000) {
        return null;
    } else {
        return { "range": true }
    }

}

export function passwordMatchValidator(c: AbstractControl): { [key: string]: boolean } | null {

    let pwd=c.get('password').value;
    let cpwd=c.get('cpassword').value;

    if(pwd!==cpwd){
      c.get('cpassword').setErrors( {match: true} )
      console.log("false")
        return {'match':true}
    }
  
    return null;

}

