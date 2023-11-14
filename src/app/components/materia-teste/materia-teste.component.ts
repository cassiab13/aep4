import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalcularTotalPontosService } from 'src/app/service/calcular-total-pontos.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-materia-teste',
  templateUrl: './materia-teste.component.html',
  styleUrls: ['../quiz-question/quiz-question.component.css']
})
export class MateriaTesteComponent {
  constructor(
    private router: Router,
    private totalPointsCalculator: CalcularTotalPontosService){}

   questions = [
      {
        question: 'O que são testes de software e por que eles são importantes?',
        options: [
          { label: 'Processo de criar código sem erros.', isCorrect: false },
          { label: 'Atividade opcional que pode ser ignorada.', isCorrect: false },
          { label: 'Atividade crítica para identificar defeitos e garantir a qualidade do software.', isCorrect: true },
        ],
      },
      {
        question: 'O que é um teste de caixa branca?',
        options: [
          { label: 'Teste que avalia apenas a saída do software.', isCorrect: false },
          { label: 'Teste que verifica o funcionamento interno do software, incluindo a lógica do código.', isCorrect: true },
          { label: 'Teste que verifica apenas a interface do software.', isCorrect: false },
        ],
      },
      {
        question: 'Quando você deve realizar testes de caixa branca?',
        options: [
          { label: 'Sempre, pois é o único tipo de teste eficaz.', isCorrect: false },
          { label: 'Somente quando não é possível realizar testes de caixa preta.', isCorrect: false },
          { label: 'Para verificar a lógica interna do software e garantir a cobertura de código.', isCorrect: true },
        ],
      },
      {
        question: 'O que é um teste de caixa preta?',
        options: [
          { label: 'Teste que verifica a implementação interna do software.', isCorrect: false },
          { label: 'Teste que avalia apenas a funcionalidade externa do software, sem conhecimento da lógica interna.', isCorrect: true },
          { label: 'Teste que verifica apenas a interface gráfica do software.', isCorrect: false },
        ],
      },
      {
        question: 'Qual é a principal vantagem dos testes de caixa preta?',
        options: [
          { label: 'Revela problemas na lógica interna do código.', isCorrect: false },
          { label: 'Garante a cobertura de código completa.', isCorrect: false },
          { label: 'Permite testar o software sem conhecimento da implementação interna.', isCorrect: true },
        ],
      },
      {
        question: 'O que são testes unitários?',
        options: [
          { label: 'Testes que verificam a interação entre diferentes componentes do software.', isCorrect: false },
          { label: 'Testes que avaliam um módulo ou função individual do software.', isCorrect: true },
          { label: 'Testes que verificam a interface do usuário do software.', isCorrect: false },
        ],
      },
      {
        question: 'Qual é a finalidade dos testes unitários?',
        options: [
          { label: 'Encontrar defeitos na integração entre módulos.', isCorrect: false },
          { label: 'Garantir que o software funcione como um todo.', isCorrect: false },
          { label: 'Identificar defeitos em módulos específicos do software.', isCorrect: true },
        ],
      },
      {
        question: 'O que são testes de integração?',
        options: [
          { label: 'Testes que verificam a interface do usuário do software.', isCorrect: false },
          { label: 'Testes que avaliam a interação entre diferentes partes ou módulos do software.', isCorrect: true },
          { label: 'Testes que garantem que o software seja executado em diferentes sistemas operacionais.', isCorrect: false },
        ],
      },
      {
        question: 'Por que os testes de integração são importantes?',
        options: [
          { label: 'Para identificar defeitos em módulos individuais.', isCorrect: false },
          { label: 'Para garantir que o software funcione corretamente como um todo e que os módulos interajam corretamente.', isCorrect: true },
          { label: 'Para verificar a interface do usuário do software.', isCorrect: false },
        ],
      },
      {
        question: 'O que é a cobertura de código em testes?',
        options: [
          { label: 'A quantidade de código-fonte que foi escrito.', isCorrect: false },
          { label: 'A porcentagem do código-fonte que foi executada durante os testes.', isCorrect: true },
          { label: 'O número de testes executados.', isCorrect: false },
        ],
      },
      {
        question: 'O que é a asserção em testes de software?',
        options: [
          { label: 'Uma declaração de que o software está livre de defeitos.', isCorrect: false },
          { label: 'Uma declaração que verifica uma condição ou comportamento esperado do software.', isCorrect: true },
          { label: 'Uma mensagem de erro em caso de falha no teste.', isCorrect: false },
        ],
      },
      {
        question: 'Quais são os benefícios de realizar testes de software desde o início do desenvolvimento?',
        options: [
          { label: 'Os testes iniciais economizam tempo e dinheiro a longo prazo, identificando defeitos mais cedo.', isCorrect: true },
          { label: 'Os testes iniciais não têm impacto no processo de desenvolvimento.', isCorrect: false },
          { label: 'Os testes iniciais são desnecessários.', isCorrect: false },
        ],
      },
      {
        question: 'Quais são as melhores práticas ao escrever casos de teste?',
        options: [
          { label: 'Escrever casos de teste complexos para cobrir todas as situações possíveis.', isCorrect: false },
          { label: 'Escrever casos de teste simples e claros que abordem cenários de uso comuns e excepcionais.', isCorrect: true },
          { label: 'Não escrever casos de teste, pois eles não são eficazes.', isCorrect: false },
        ],
      },
      {
        question: 'O que é regressão de teste?',
        options: [
          { label: 'Uma técnica para encontrar defeitos no código original.', isCorrect: false },
          { label: 'A execução de testes após as alterações no software para garantir que novos defeitos não tenham sido introduzidos.', isCorrect: true },
          { label: 'Um teste que verifica se o software atende aos requisitos iniciais.', isCorrect: false },
        ],
      },
      {
        question: 'O que é a automação de testes?',
        options: [
          { label: 'A realização de testes manualmente.', isCorrect: false },
          { label: 'O uso de ferramentas e scripts para executar testes de forma automatizada.', isCorrect: true },
          { label: 'A exclusão de testes do processo de desenvolvimento.', isCorrect: false },
        ],
      },
    ];


    currentQuestionIndex = 0;
    score = 0;
    totalPoints!: number;
    endQuiz = false;
    showAnswers: boolean = false;


    checkAnswer(option: { label: string, isCorrect: boolean }) {
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
      this.totalPointsCalculator.addPoints(this.score);
    }

    showAnswersAndScore() {
      this.showAnswers = true;
    }

    generateAlphabetLetter(index: number): string {
      return String.fromCharCode(97 + index);
    }

}
