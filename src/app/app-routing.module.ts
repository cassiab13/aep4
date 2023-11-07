import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaJavaComponent } from './components/materia-java/materia-java.component';
import { JogoPerguntasComponent } from './components/jogo-perguntas/jogo-perguntas.component';
import { MateriaEstruturaDadosComponent } from './components/materia-estrutura-dados/materia-estrutura-dados.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path:'start',
    component: JogoPerguntasComponent
  },
  {
    path: 'java',
    component: MateriaJavaComponent
  },
  {
    path: 'estrutura-dados',
    component: MateriaEstruturaDadosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
