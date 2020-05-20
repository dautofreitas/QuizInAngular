import { Quiz, Resposta } from './quiz';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  title = 'QuizInAngular';
  telaInicial: boolean = false;

  quiz: Quiz;

  checkButton:boolean = false;


  ngOnInit(): void {


    this.telaInicial = true;
    this.quiz = new Quiz();

    let respostas: Resposta[] = [{ titulo: "Ré", correta: false, selecionada:false }, { titulo: "Mi", correta: false , selecionada:false},
                                { titulo: "Fá", correta: false, selecionada:false },{titulo:"Dó", correta:false, selecionada:false},
                                {titulo:"Dó", correta:false, selecionada:false}];

    this.quiz.respostas = respostas;
    this.quiz.pergunta = "Nos acordes de guitarra, o acorde C significa?";
    this.quiz.quantidadeSelecaoResposta = 3;

  }

  inicarQuiz(): void {
    this.telaInicial = false;
    console.log(this.quiz);

    console.log(JSON.stringify({ data: this.quiz }, null, 4));

  }
  desabilitaSelecao():boolean
  {
    return this.quiz.respostas.filter( resposta => resposta.selecionada == true).length >= this.quiz.quantidadeSelecaoResposta;
  }

  proximaPergunta():void
  {
    console.log(JSON.stringify({ data: this.quiz }, null, 4));
  }

}
