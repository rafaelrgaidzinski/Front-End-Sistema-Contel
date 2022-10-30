import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { UserRegisterComponent } from './user-register/user-register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

@NgModule({

    declarations: [  
        LoginComponent, 
        UserRegisterComponent, 
        RecoverPasswordComponent
    ], 

    exports: [
        LoginComponent,
        UserRegisterComponent,
        RecoverPasswordComponent
    ]
})
export class LoginModule{ }