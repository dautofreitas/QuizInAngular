import { ResultadoQuiz } from './resultadoQuiz';
import { Quiz, Resposta } from './quiz';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  title = 'QuizInAngular';
  tela: string;
  listaQuiz: Quiz[] = [];
  quizAtual: Quiz;
  dataInicio: Date;
  checkButton: boolean = false;
  contadorProximaPergunta: number;
  resultadoQuiz: ResultadoQuiz = new ResultadoQuiz();


  ngOnInit(): void {


    let quiz = new Quiz();
    this.tela="";
    this.contadorProximaPergunta=0;

    let respostas: Resposta[] = [{ titulo: "Ré", correta: false, selecionada: false }, { titulo: "Mi", correta: false, selecionada: false },
    { titulo: "Fá", correta: false, selecionada: false }, { titulo: "Dó", correta: true, selecionada: false }];

    quiz.respostas = respostas;
    quiz.pergunta = "Nos acordes de guitarra, o acorde C significa?";
    quiz.quantidadeSelecaoResposta = 2;

    this.listaQuiz[0] = quiz;
    this.listaQuiz[1] = JSON.parse(JSON.stringify(quiz));
    this.listaQuiz[1].pergunta = "Nos acordes de guitarra, o acorde C significa? 01";
    this.listaQuiz[2] = JSON.parse(JSON.stringify(quiz));
    this.listaQuiz[2].pergunta = "Nos acordes de guitarra, o acorde C significa? 02";
    this.listaQuiz[3] = JSON.parse(JSON.stringify(quiz));
    this.listaQuiz[3].pergunta = "Nos acordes de guitarra, o acorde C significa? 03";

  }

  inicarQuiz(): void {

    this.tela = "pergunta";
    this.quizAtual = this.listaQuiz[this.contadorProximaPergunta];
    console.log(this.quizAtual);


    this.dataInicio = new Date();

    console.log(JSON.stringify({ data: this.listaQuiz }, null, 4));

  }
  desabilitaSelecao(): boolean {
    return this.quizAtual.respostas.filter(resposta => resposta.selecionada == true).length >= this.quizAtual.quantidadeSelecaoResposta;
  }

  proximaPergunta(): void {
    console.log(JSON.stringify({ data: this.quizAtual }, null, 4));
    if(this.listaQuiz.length != (this.contadorProximaPergunta +1) )
    {
      this.quizAtual = this.listaQuiz[++this.contadorProximaPergunta];
    }
    else
    {
      this.finalizaQuiz();
    }
    


  }

 finalizaQuiz(): void {
    this.resultadoQuiz.duracaoEmMs = (new Date().getTime() - this.dataInicio.getTime())/1000;
    this.resultadoQuiz.quatidadeAcertos = this.listaQuiz.filter(quiz =>
      quiz.respostas.filter(resposta => resposta.correta && resposta.selecionada).length>0).length;


    this.resultadoQuiz.quatidadeErros = this.listaQuiz.filter(quiz =>
      quiz.respostas.filter(
        resposta => !resposta.correta && resposta.selecionada).length>0).length;
    
        console.log(JSON.stringify({ data: this.resultadoQuiz }, null, 4)); 
    
    this.tela = "resultado";
  }

  reiniciarQuiz()
  {
    this.ngOnInit();
  }
}
