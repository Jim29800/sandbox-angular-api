import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  titre = "Isabelle !";
  
  constructor() { }

  getTitre(){
    return this.titre;
  }
}
