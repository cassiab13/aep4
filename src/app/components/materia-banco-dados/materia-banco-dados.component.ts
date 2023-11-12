import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalcularTotalPontosService } from 'src/app/service/calcular-total-pontos.service';

@Component({
  selector: 'app-materia-banco-dados',
  templateUrl: './materia-banco-dados.component.html',
  styleUrls: ['./materia-banco-dados.component.css']
})
export class MateriaBancoDadosComponent {
  constructor(
    private router: Router,
    private totalPointsCalculator: CalcularTotalPontosService){}

    questions = [
      {
        question: 'O que é o MongoDB?',
        options: [
          { label: 'Um sistema de gerenciamento de banco de dados relacional.', isCorrect: false },
          { label: 'Um banco de dados NoSQL orientado a documentos.', isCorrect: true },
          { label: 'Um servidor web.', isCorrect: false },
        ],
      },
      {
        question: 'Qual é o formato de armazenamento de dados padrão no MongoDB?',
        options: [
          { label: 'JSON', isCorrect: true },
          { label: 'XML', isCorrect: false },
          { label: 'CSV', isCorrect: false },
        ],
      },
      {
        question: 'O que é um "documento" no MongoDB?',
        options: [
          { label: 'Uma tabela que contém dados.', isCorrect: false },
          { label: 'Uma coleção de objetos JavaScript.', isCorrect: false },
          { label: 'Um registro de dados no MongoDB, representado em formato BSON.', isCorrect: true },
        ],
      },
      {
        question: 'Qual é a linguagem de consulta usada no MongoDB?',
        options: [
          { label: 'SQL', isCorrect: false },
          { label: 'NoSQL', isCorrect: false },
          { label: 'MQL (MongoDB Query Language)', isCorrect: true },
        ],
      },
      {
        question: 'O que é o "Sharding" no MongoDB?',
        options: [
          { label: 'Um processo de replicação de dados.', isCorrect: false },
          { label: 'Uma técnica para dividir grandes conjuntos de dados em várias máquinas.', isCorrect: true },
          { label: 'Uma linguagem de programação usada no MongoDB.', isCorrect: false },
        ],
      },
      {
        question: 'O que é um "índice" no MongoDB?',
        options: [
          { label: 'Uma chave primária.', isCorrect: false },
          { label: 'Uma estrutura de dados usada para acelerar consultas.', isCorrect: true },
          { label: 'Uma coleção de documentos relacionados.', isCorrect: false },
        ],
      },
      {
        question: 'Quando você usaria o MongoDB em vez de um banco de dados relacional?',
        options: [
          { label: 'Sempre, o MongoDB é superior em todos os casos.', isCorrect: false },
          { label: 'Quando você tem dados altamente estruturados.', isCorrect: false },
          { label: 'Quando você precisa de flexibilidade para armazenar dados não estruturados ou semiestruturados.', isCorrect: true },
        ],
      },
      {
        question: 'O que é a replicação no MongoDB?',
        options: [
          { label: 'Uma técnica para dividir dados em várias máquinas.', isCorrect: false },
          { label: 'Um processo de cópia de dados de um servidor para outro para alta disponibilidade.', isCorrect: true },
          { label: 'Um método de criptografia de dados.', isCorrect: false },
        ],
      },
      {
        question: 'Como você consulta documentos no MongoDB?',
        options: [
          { label: 'Usando a linguagem SQL.', isCorrect: false },
          { label: 'Usando a linguagem de consulta própria do MongoDB (MQL).', isCorrect: true },
          { label: 'Usando apenas JavaScript.', isCorrect: false },
        ],
      },
      {
        question: 'O que é o "BSON"?',
        options: [
          { label: 'Uma linguagem de programação.', isCorrect: false },
          { label: 'O formato de representação binária dos documentos no MongoDB.', isCorrect: true },
          { label: 'Uma técnica de criptografia.', isCorrect: false },
        ],
      },
      {
        question: 'Como o MongoDB lida com transações?',
        options: [
          { label: 'O MongoDB não oferece suporte a transações.', isCorrect: false },
          { label: 'Ele suporta transações semelhantes ao SQL.', isCorrect: true },
          { label: 'As transações no MongoDB são tratadas por um servidor de terceiros.', isCorrect: false },
        ],
      },
      {
        question: 'O que é o "Aggregation Framework" no MongoDB?',
        options: [
          { label: 'Uma técnica para compactar documentos no banco de dados.', isCorrect: false },
          { label: 'Uma estrutura para realizar operações de agregação e transformação de dados.', isCorrect: true },
          { label: 'Um módulo para criptografar dados no MongoDB.', isCorrect: false },
        ],
      },
      {
        question: 'Qual é a linguagem de programação usada pelo MongoDB?',
        options: [
          { label: 'JavaScript', isCorrect: true },
          { label: 'Python', isCorrect: false },
          { label: 'Java', isCorrect: false },
        ],
      },
      {
        question: 'Como você pode criar um índice no MongoDB?',
        options: [
          { label: 'Não é possível criar índices no MongoDB.', isCorrect: false },
          { label: 'Usando a linguagem SQL.', isCorrect: false },
          { label: 'Usando o método createIndex().', isCorrect: true },
        ],
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
    this.endQuiz = true;
  }
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
