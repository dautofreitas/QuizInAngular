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
  telaInicial: boolean = false;
  listaQuiz: Quiz[] = [];
  quizAtual: Quiz;
  dataInicio: Date;
  checkButton: boolean = false;
  contadorProximaPergunta: number = 0;
  resultadoQuiz: ResultadoQuiz = new ResultadoQuiz();


  ngOnInit(): void {


    this.telaInicial = true;
    let quiz = new Quiz();



    let respostas: Resposta[] = [{ titulo: "Ré", correta: false, selecionada: false }, { titulo: "Mi", correta: false, selecionada: false },
    { titulo: "Fá", correta: false, selecionada: false }, { titulo: "Dó", correta: false, selecionada: false }];

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
    this.telaInicial = false;
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
    this.resultadoQuiz.duracaoEmMs = new Date().getTime() - this.dataInicio.getTime();
    this.resultadoQuiz.quatidadeAcertos = this.listaQuiz.filter(quiz =>
      quiz.respostas.filter(resposta => resposta.correta && resposta.selecionada).length>0).length;


    this.resultadoQuiz.quatidadeErros = this.listaQuiz.filter(quiz =>
      quiz.respostas.filter(
        resposta => !resposta.correta && resposta.selecionada).length>0).length;
    
        console.log(JSON.stringify({ data: this.resultadoQuiz }, null, 4)); 
  }

}
