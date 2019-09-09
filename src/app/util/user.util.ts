import { User } from '../models/user.model';

export class UserUtil {
    static save(token: string) {
        localStorage.setItem('user.token', token)
    }
    static get(): User {
        const data = localStorage.getItem('user.token');
        if (data)
            return JSON.parse(data);
        return null;
    }
    static clearAccess() {
        localStorage.removeItem('user.token');
    }
    public static hasRole(role: string): boolean {
        const user = this.get();
        if (!user || !user.roles || user.roles.length == 0)
            return false

        return user.roles.includes(role);
    }
}