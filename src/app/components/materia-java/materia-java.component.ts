import { CalcularTotalPontosService } from './../../service/calcular-total-pontos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-materia-java',
  templateUrl: './materia-java.component.html',
  styleUrls: ['../../app.component.css']
})
export class MateriaJavaComponent {

    constructor(
      private router: Router,
      private totalPointsCalculator: CalcularTotalPontosService){}

    questions = [
{
  question: 'O que é uma JVM em Java?',
  options: [{label: 'Uma linguagem de programação.', isCorrect: false},
            {label: 'Uma máquina virtual para executar programas JavaScript.', isCorrect: false},
            {label: 'Uma máquina virtual que executa o bytecode Java.', isCorrect: true}]
 },
{
  question: 'O que são construtores em Java?',
  options: [{label: 'Métodos para destruir objetos.', isCorrect: false},
            {label: 'Métodos especiais para inicializar objetos.', isCorrect: true},
            {label: 'Métodos para criar objetos.', isCorrect: false}]
 },
{
  question: 'O que é herança em Java?',
  options: [{label: 'Um mecanismo que permite que objetos de classes diferentes sejam tratados como objetos de uma classe comum.', isCorrect: true},
            {label: 'Um mecanismo para criar objetos a partir de classes.', isCorrect: false},
            {label: 'Um mecanismo para criar classes a partir de objetos.', isCorrect: false}]
 },
{
  question: 'O que é polimorfismo em Java?',
  options: [{label: 'A capacidade de uma classe herdar de várias classes diferentes.', isCorrect: false},
            {label: 'A capacidade de uma classe ter vários construtores.', isCorrect: false},
            {label: 'A capacidade de tratar objetos de diferentes classes de forma uniforme.', isCorrect: true}]
 },
{
  question: 'O que é uma exceção em Java??',
  options: [{label: 'Um erro de compilação.', isCorrect: false},
            {label: 'Um erro de lógica em um programa.', isCorrect: false},
            {label: 'Um evento anormal que interrompe o fluxo normal de execução.', isCorrect: true}]
 },
{
  question: 'O que é um pacote em Java?',
  options: [{label: 'Um pacote de software que você pode comprar.', isCorrect: false},
            {label: 'Um grupo de classes que compartilham funcionalidades semelhantes.', isCorrect: false},
            {label: 'Um mecanismo para organizar classes e interfaces em Java.', isCorrect: true}]
 },
{
  question: 'O que é polimorfismo de sobrecarga em Java?',
  options: [{label: 'Uma técnica para criar métodos com o mesmo nome em uma classe.', isCorrect: false},
            {label: 'A capacidade de uma classe ter vários construtores com diferentes assinaturas.', isCorrect: true},
            {label: 'A capacidade de uma classe herdar de várias classes diferentes.', isCorrect: false}]
 },
{
  question: 'O que é um método abstrato em Java?',
  options: [{label: 'Um método que não pode ser chamado.', isCorrect: false},
            {label: 'Um método que não tem implementação e deve ser sobrescrito nas classes filhas.', isCorrect: true},
            {label: 'Um método que só pode ser chamado uma vez.', isCorrect: false}]
 },
{
  question: 'Qual é a diferença entre "ArrayList" e "LinkedList" em Java?',
  options: [{label: '"ArrayList" é uma lista encadeada, enquanto "LinkedList" é uma lista de array.', isCorrect: false},
            {label: '"ArrayList" é mais eficiente para inserções e exclusões, enquanto "LinkedList" é mais eficiente para acessar elementos.', isCorrect: true},
            {label: 'Não há diferença entre eles.', isCorrect: false}]
 },
{
  question: 'O que é o operador "instanceof" em Java?',
  options: [{label: 'Um operador para verificar se um número é par ou ímpar.', isCorrect: false},
            {label: 'Um operador para verificar se um objeto é uma instância de uma classe específica.', isCorrect: true},
            {label: 'Um operador para verificar se uma variável está vazia.', isCorrect: false}]
 },
{
  question: 'Qual é a diferença entre uma classe abstrata e uma interface em Java?',
  options: [{label: 'a) Uma classe abstrata pode ter métodos implementados, enquanto uma interface não pode.', isCorrect: true},
            {label: 'b) Uma interface pode ter campos de classe, enquanto uma classe abstrata não pode.', isCorrect: false},
            {label: 'c) Não há diferença entre eles.', isCorrect: false}]
 },

    ];

  currentQuestionIndex = 0;
  score = 0;
  totalPoints!: number;
  endQuiz = false;


  checkAnswer(option: { label: string, isCorrect: boolean }) {
    if(this.endQuiz){
      return;
    } else {
    if (option.isCorrect) {
      this.score++;
    }
    this.nextQuestion();
  }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length-1) {
      this.currentQuestionIndex++;
    } else {
      this.endQuiz = true

    };
    }


  endQuestion(){
    this.router.navigate(['/start']);
  }

  generateAlphabetLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

  pointsCalculate() {
    this.totalPointsCalculator.addPoints(this.score);
  }

}
