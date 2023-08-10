import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/interfaces/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit{

  @Input() randomContact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina
  @Input() showRandomContact:boolean=false;


  constructor(){}

  ngOnInit(): void {

    
      
  }

}
