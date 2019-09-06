import { AbstractControl, Validators, FormControl } from '@angular/forms';
export class CustomValidator {

    static CodeValidator(code: FormControl) {
        const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)$/

        if (!re.test(code.value))
            return { "ERROR!": true }
        return null;
    }
}