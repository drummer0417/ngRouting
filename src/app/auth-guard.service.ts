import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd, ActivatedRoute, RouterState, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
            
            return this.authService.isAuthenticated()
            .then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return authenticated
                } else {
                    console.log('Navigeer naar root..... nUUUUUU!!');
                    
                    this.route.navigate(['/']);
                    return false;
                }
            }
        );
    }
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
        
        return this.canActivate(route, state);
    
    }
}