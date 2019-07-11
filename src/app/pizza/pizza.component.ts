import { Component, OnInit} from '@angular/core';

import { Pizza } from '../shared/interfaces/pizza';

import { ModifyOrderService } from '../shared/services/modify-order.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  toppings: Pizza[];
  testData = 'testDATA';
  constructor(private modifyOrderService: ModifyOrderService) { }

  ngOnInit() {
  }

  edit(id) {
    this.modifyOrderService.modifyItem(id);
  }

  remove(id) {
    this.modifyOrderService.removeItem(id);
  }

  test(data){
    console.log(data + "test");
  }

}