import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isReadMore = true
  

  constructor() { }

  ngOnInit(): void {}
  showText() {
    this.isReadMore = !this.isReadMore
 }
}




