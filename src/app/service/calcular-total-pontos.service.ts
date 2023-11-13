import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularTotalPontosService {
  private finalScore = 0;
  constructor() { }

  addPoints(score: number){
    this.finalScore += score;
    console.log(score);
  }

  endScore(){
    console.log(this.finalScore);
    return this.finalScore;

  }
}
