import {
  Component, OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { PizzaComponent } from '../pizza/pizza.component';

import { Burger } from '../shared/interfaces/burger';
import { Pizza } from '../shared/interfaces/pizza';

import { ModifyOrderService } from '../shared/services/modify-order.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  @ViewChild('pizzaContainer', { read: ViewContainerRef }) pizzaContainer: ViewContainerRef;

  orderPizza: Pizza[];

  initialPizzas: Pizza[] = [
    {
      id: 1,
      cheese: true,
      tomato: true,
      pepperoni: true,
      bacon: true,
      comment: 'not editted'
    },
    {
      id: 2,
      cheese: true,
      tomato: true,
      pepperoni: true,
      bacon: true,
      comment: 'not editted'
    },
    {
      id: 3,
      cheese: true,
      tomato: true,
      pepperoni: true,
      bacon: true,
      comment: 'not editted'
    }
  ];

  constructor(private resolver: ComponentFactoryResolver, private modifyOrderService: ModifyOrderService) {
    modifyOrderService.modifyItem$.subscribe(
      item => {
        // this.initialPizzas.push(`${item} confirmed the mission`);
        console.log('from modify parent' + item);
        this.modifyPizza(item);
      });
    modifyOrderService.removeItem$.subscribe(
      item => {
        // this.initialPizzas.push(`${item} confirmed the mission`);
        console.log('from remove parent' + item);
        this.removePizza(item);
      });
  }

  ngOnInit() {
    // for (let i = 1; i <= this.initialPizzas.length; i++){
    //   let filterPizza = this.initialPizzas.filter((data)=>{
    //     if(data.id == i){
    //       return data;
    //     }
    //   });
    //   const pizzaFactory = this.resolver.resolveComponentFactory(PizzaComponent);
    //   const pizza = this.pizzaContainer.createComponent(pizzaFactory);
    //   this.orderPizza = filterPizza;
    //   pizza.instance.toppings = this.orderPizza;
    // } 
  }

  createPizza(topping) {
    const pizzaFactory = this.resolver.resolveComponentFactory(PizzaComponent);
    const pizza = this.pizzaContainer.createComponent(pizzaFactory);
    this.orderPizza = this.initialPizzas;
    pizza.instance.toppings = this.orderPizza;
  }

  modifyPizza(id) {
    console.log('init modify', this.initialPizzas);
    console.log('index', id);
    this.initialPizzas.map((data) => {
      if (data.id == id) {
        data.comment = 'I AM EDITTED.';
      }
    });
  }

  removePizza(id) {
    console.log('init remove', this.initialPizzas);
    let index = this.initialPizzas.map(function(e) { return e.id; }).indexOf(id);
    console.log('index', index);
    this.initialPizzas.splice(index,1);
  }

}