import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChoicesComponent } from './choices/choices.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ModifyOrderService } from './shared/services/modify-order.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChoicesComponent, PizzaComponent ],
  entryComponents: [ PizzaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ModifyOrderService]
})
export class AppModule { }
