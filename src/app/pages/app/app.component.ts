import { Component } from '@angular/core';
import { CardComponent, CardInterface } from 'src/app/components/card/card.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics';
  cards: CardInterface[] = [
    {title: "first card", content: "first content"},
    {title: "second card", content: "second content"},
    {title: "third card", content: "third content"},
    {title: "fourth card", content: "fourth content"}
  ]
  
}
