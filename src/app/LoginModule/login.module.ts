import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({

    declarations: [  
        LoginComponent, 
        UserRegisterComponent
    ], 

    exports: [
        LoginComponent,
        UserRegisterComponent
    ]
})
export class LoginModule{ }