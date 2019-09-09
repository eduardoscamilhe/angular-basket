import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserUtil } from '../util/user.util';

@Injectable()
export class ManagerGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        return UserUtil.hasRole('manager');
    }
}