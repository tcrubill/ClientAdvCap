import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { World, Product, Pallier } from '../world';
import { RestserviceService } from '../restservice.service';

declare var require; const ProgressBar = require("progressbar.js");


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  server: string;
  progressbar: any;

  product: Product;
  @Input() 
  set prod(value: Product) {
    this.product = value;
  }

  @ViewChild('bar') progressBarItem;
  


  constructor(private service: RestserviceService) {
    this.server = service.getServer();
  }

  ngOnInit() {
    this.progressbar = new ProgressBar.Line(
      this.progressBarItem.nativeElement,{ strokeWidth: 50, color: '#00ff00' }
    );
    this.progressbar.animate(1, { duration: this.product.vitesse });

    //setInterval(() => { this.calcScore(); }, 100);
  }
}
