import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CalcularTotalPontosService } from './calcular-total-pontos.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor() {}

  currentQuestionIndex = 0;
  score = 0;
  totalPoints!: number;
  endQuiz = false;
  questions: any[] = [];

  setQuestions(questions: any[]) {
    this.questions = questions;
  }

  generateAlphabetLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

}

