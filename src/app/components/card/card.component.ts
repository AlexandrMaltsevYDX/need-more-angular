import { Component, OnInit, Input } from '@angular/core';

export interface CardInterface {
  title: string;
  content: string;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardInterface = {title:"DEFOULT", content:"DEFOULT"};

  result: string = "";

  ngOnInit(): void {
    setTimeout(() => {
      this.result = "УРА ЕСТЬ КОНТАКТ"
    }, 5000);
  }
}
