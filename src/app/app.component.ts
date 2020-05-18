import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {

  title = 'QuizInAngular';
  telaInicial:boolean = false;

  ngOnInit(): void {
    this.telaInicial = true;
  }

  inicarQuiz():void
  {
    this.telaInicial = false;
  }
  
}
