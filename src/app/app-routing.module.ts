import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaJavaComponent } from './components/materia-java/materia-java.component';
import { JogoPerguntasComponent } from './components/jogo-perguntas/jogo-perguntas.component';
import { MateriaEstruturaDadosComponent } from './components/materia-estrutura-dados/materia-estrutura-dados.component';
import { MateriaBancoDadosComponent } from './components/materia-banco-dados/materia-banco-dados.component';
import { MateriaTesteComponent } from './components/materia-teste/materia-teste.component';

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
  },
  {
    path: 'banco-dados',
    component: MateriaBancoDadosComponent
  },
  {
    path: 'teste',
    component: MateriaTesteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
