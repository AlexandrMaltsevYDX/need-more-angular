import { Component, Input } from '@angular/core';
import { LinkComponent, LinkInterface } from '../link/link.component';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  links: LinkInterface[] = [
    {name: "first"},
    {name: "second"},
    {name: "third"},
    {name: "fourth"}
  ]
  // @Input() 
}
