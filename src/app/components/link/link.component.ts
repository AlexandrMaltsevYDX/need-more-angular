import { Component, Input } from '@angular/core';

export interface LinkInterface {
  name: string;
}

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() link : LinkInterface = {name: "defult name"}
}
