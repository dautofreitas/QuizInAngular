export class Quiz
{
    id:number;
    pergunta:string;
    respostas:Resposta[];
    quantidadeAcertosAprovacao:number;
    quantidadeSelecaoResposta:number;

}

export class Resposta{
    titulo:string;
    correta:boolean;
    selecionada:boolean;
}