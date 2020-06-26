import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService
{
    constructor(private http: HttpClient){}
    protected UrlServiceV1: string = "http://localhost:3000/";

    obterQuiz():Observable<Quiz[]>
    {
       return  this.http.get<Quiz[]>(this.UrlServiceV1 + "quiz");
    }
}