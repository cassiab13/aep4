import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoPerguntasComponent } from './components/jogo-perguntas/jogo-perguntas.component';
import { MateriaJavaComponent } from './components/materia-java/materia-java.component';
import { MateriaEstruturaDadosComponent } from './components/materia-estrutura-dados/materia-estrutura-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoPerguntasComponent,
    MateriaJavaComponent,
    MateriaEstruturaDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }