import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public visitsCounter: number;

  constructor() {

    this.visitsCounter =  Math.floor(Math.random() * (999 - 100)) + 100;

  }

  ngOnInit(): void {

  }

   animateValue(  end, duration) {
    var range = end - this.visitsCounter;
    var current = this.visitsCounter;
    var increment = end > this.visitsCounter ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(()=> {
        current += increment;
        this.visitsCounter = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


  randomVisitis(){

    const random = Math.floor(Math.random() * (999 - 100)) + 100;
    this.animateValue(random, 100);

  }

}
