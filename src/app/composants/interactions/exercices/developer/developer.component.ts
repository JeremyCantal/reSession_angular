import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/classes/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

developpeur!: Developer;
  

  constructor() { }

  ngOnInit(): void {
    this.developpeur = new Developer();
    this.developpeur.lastName = 'Aragorn';
    this.developpeur.firstName = 'Isildur';
    this.developpeur.age = 1455;
    this.developpeur.sexe = 'Masculin';
    this.developpeur.bio = 'Pour Frodon !';
    this.developpeur.skills = [
      {
        name: "Cheveux",
        logo: 'assets/img/Aragorn_the_few_best.jpg',
        site: 'https://fr.wikipedia.org/wiki/Aragorn'
      }
    ];
  }
}
