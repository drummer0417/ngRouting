import { NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGaurd } from "./auth-guard.service";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-gaurd.servise";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { resolve } from "dns";
import { ServerResolver } from "./servers/server-resolver.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
         {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', 
        // canActivate: [AuthGaurd], 
        canActivateChild: [AuthGaurd], 
        component: ServersComponent, 
        children: [
            {path: ':id', component: ServerComponent,  resolve: {server: ServerResolver} },
            {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGaurd]},
        ]},
    {path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found - (404)'}},
    {path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingMudule {

}