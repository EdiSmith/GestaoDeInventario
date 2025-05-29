import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { TelaInicialComponent } from './view/tela-inicial/tela-inicial.component';


@Component({
  selector: 'app-root',
  imports: [ FormsModule, RouterOutlet, RouterLink, LoginComponent,CadastroComponent,TelaInicialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
}

  


