import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../service/quiz.service';
import { CalcularTotalPontosService } from 'src/app/service/calcular-total-pontos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materia-estrutura-dados',
  templateUrl: './materia-estrutura-dados.component.html',
  styleUrls: ['../quiz-question/quiz-question.component.css'],
})
export class MateriaEstruturaDadosComponent implements OnInit {
  audio: any;
  currentQuestionIndex: number = 0;
  endQuiz: boolean = false;
  score: number = 0;
  showAnswers: boolean = false;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.audio = new Audio('../../../assets/som/medieval-1.mp3');
    this.audio.autoplay = true;
    this.audio.volume = 0.05;
    this.audio.play();
    this.quizService.setQuestions(this.questions);
  }

  questions = [
    {
      question: 'O que são estruturas de dados em programação?',
      options: [
        {
          label: 'Variáveis que armazenam informações simples.',
          isCorrect: false,
        },
        {
          label: 'Formas de representar dados de maneira organizada.',
          isCorrect: true,
        },
        { label: 'Um tipo de linguagem de programação.', isCorrect: false },
      ],
    },
    {
      question: 'O que é uma pilha em estruturas de dados?',
      options: [
        {
          label:
            'Uma estrutura de dados que segue o princípio "último a entrar, primeiro a sair" (LIFO).',
          isCorrect: true,
        },
        {
          label:
            'Uma estrutura de dados para armazenar elementos em ordem alfabética.',
          isCorrect: false,
        },
        { label: 'Um tipo de operação de seleção.', isCorrect: false },
      ],
    },
    {
      question: 'O que é uma fila em estruturas de dados?',
      options: [
        {
          label:
            'Uma estrutura de dados que segue o princípio "primeiro a entrar, primeiro a sair" (FIFO).',
          isCorrect: true,
        },
        {
          label:
            'Uma estrutura de dados que permite a inserção e remoção de elementos em qualquer ordem.',
          isCorrect: false,
        },
        {
          label:
            'Uma estrutura de dados para armazenar elementos em ordem alfabética.',
          isCorrect: false,
        },
      ],
    },
    {
      question: 'O que é uma lista simplesmente encadeada?',
      options: [
        {
          label:
            'Uma estrutura de dados que permite a inserção de elementos em qualquer posição.',
          isCorrect: false,
        },
        {
          label:
            'Uma estrutura de dados que contém uma referência para o próximo elemento na lista.',
          isCorrect: true,
        },
        {
          label: 'Uma lista que só pode conter números inteiros.',
          isCorrect: false,
        },
      ],
    },
    {
      question:
        'Qual das seguintes afirmações é verdadeira sobre listas duplamente encadeadas?',
      options: [
        {
          label:
            'Cada nó tem uma referência apenas para o próximo elemento na lista.',
          isCorrect: false,
        },
        {
          label:
            'Listas duplamente encadeadas são estruturas de dados imutáveis.',
          isCorrect: false,
        },
        {
          label:
            'Cada nó tem uma referência para o próximo e o anterior elemento na lista.',
          isCorrect: true,
        },
      ],
    },
    {
      question: 'Como os elementos são inseridos e removidos de uma fila?',
      options: [
        {
          label: 'Os elementos são inseridos e removidos no meio da fila.',
          isCorrect: false,
        },
        {
          label: 'Os elementos são inseridos e removidos em qualquer posição.',
          isCorrect: false,
        },
        {
          label: 'Os elementos são inseridos no final e removidos no início.',
          isCorrect: true,
        },
      ],
    },
    {
      question:
        'Qual é a principal vantagem de uma lista duplamente encadeada em comparação com uma lista simplesmente encadeada?',
      options: [
        { label: 'Uso mais eficiente da memória.', isCorrect: false },
        { label: 'Facilidade de implementação.', isCorrect: false },
        { label: 'Acesso bidirecional aos elementos.', isCorrect: true },
      ],
    },
    {
      question: 'O que é o início de uma lista encadeada?',
      options: [
        { label: 'O último nó da lista.', isCorrect: false },
        { label: 'O primeiro nó da lista.', isCorrect: true },
        { label: 'Um nó no meio da lista.', isCorrect: false },
      ],
    },
    {
      question:
        'Qual é a complexidade de tempo média para pesquisar um elemento em uma lista simplesmente encadeada não ordenada?',
      options: [
        { label: 'O(1)', isCorrect: false },
        { label: 'O(log n)', isCorrect: false },
        { label: 'O(n)', isCorrect: true },
      ],
    },
    {
      question:
        'Em uma fila, qual operação insere um elemento no final da fila?',
      options: [
        { label: 'dequeue', isCorrect: false },
        { label: 'push', isCorrect: false },
        { label: 'enqueue', isCorrect: true },
      ],
    },
  ];

  checkAnswer(option: { label: string; isCorrect: boolean }) {
    if (this.endQuiz) {
      return;
    }

    if (option.isCorrect) {
      this.score++;
    }
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.endQuiz = true;
      this.pointsCalculate();
    }
  }

  endQuestion() {
    this.router.navigate(['/start']);
  }

  pointsCalculate() {
    if (this.score >= 6) {
      this.audio.src = '../../../assets/som/palmas.mp3';
    } else {
      this.audio.src = '../../../assets/som/vaias.mp3';
    }

    this.audio.loop = true;
    this.audio.play();
  }

  showAnswersAndScore() {
    this.audio.pause();
    this.endQuiz = false;
    this.showAnswers = true;
  }

  generateAlphabetLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

  verifyCorrect(correct: boolean): string {
    if (correct) {
      return 'item-question-correct';
    }

    return 'item-question';
  }
}
