import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnChanges {
  @Input() question: any;
  @Input() endQuiz!: boolean;
  @Input() score!: number;
  @Output() answerSelected = new EventEmitter<any>();
  @Output() endQuizClicked = new EventEmitter<void>();

questions: any;

  ngOnChanges(){
  }
  checkAnswer(option: any) {
    this.answerSelected.emit(option);
  }

  endQuestion() {
    this.endQuizClicked.emit();
  }

  generateAlphabetLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }

}
