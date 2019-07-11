import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class ModifyOrderService {

  private modifySource = new Subject<number>();
  private removeSource = new Subject<number>();

  modifyItem$ = this.modifySource.asObservable();
  removeItem$ = this.removeSource.asObservable();
  
  modifyItem(orderId: number) {
    this.modifySource.next(orderId);
    console.log('from modify service' + orderId);
  }

  removeItem(orderId: number) {
    this.removeSource.next(orderId);
    console.log('from remove service' + orderId);
  }


  constructor() { }

}