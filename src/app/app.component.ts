import { Quiz, Resposta } from './quiz';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {

  title = 'QuizInAngular';
  telaInicial:boolean = false;

  quiz:Quiz;

  

  ngOnInit(): void {
    
    
    this.telaInicial = true;
    this.quiz = new Quiz();

    let respostas:Resposta[] = [{titulo:"Pc 001", correta:true}, {titulo:"Pc 002", correta:false}];


    this.quiz.respostas = respostas;
    this.quiz.pergunta = "uma pergunta";

  }

  inicarQuiz():void
  {
    this.telaInicial = false;
    console.log(this.quiz);

    console.log(JSON.stringify({ data: this.quiz}, null, 4));

  }
  
}
