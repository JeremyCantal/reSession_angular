import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  // @Input() : permet à un composant fils de récupérer des données
  // de son composant parent (=> home-features)
  // Elles devront être injectées par le composant parent

  @Input() description !: string;
  @Input() icon !: string;
  @Input() title !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
