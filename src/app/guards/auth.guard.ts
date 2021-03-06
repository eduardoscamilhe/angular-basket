import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserUtil } from '../util/user.util';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {


    }
    canActivate() {
        const user = UserUtil.get();
        if (!user || !user.token)
            this.router.navigate(['login']);

        return true;
    }
}