import { Component } from '@angular/core';
import { CardsService } from '../Services/cards.service';
import { Cards } from '../Models/cards';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent {
  cards:Cards[]=[];
  constructor(private service:CardsService) {}
  ngOnInit():void{
    this.service.insertion().subscribe(data => this.cards=data)
  }
}
