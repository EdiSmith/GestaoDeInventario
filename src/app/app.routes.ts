import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './view/tela-inicial/tela-inicial.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

export const routes: Routes = [

    {
        path: "tela", component:TelaInicialComponent     
    },

    {
        path: "login", component:LoginComponent
    },
    {
        path: "cadastro", component:CadastroComponent
    }

];
