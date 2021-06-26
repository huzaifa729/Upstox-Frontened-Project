import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
   id:any = "";
   hiden(ids:any){
     if(this.id ==ids){
       this.id = '';
     }
     else{
       this.id = ids;
     }
   }
}


