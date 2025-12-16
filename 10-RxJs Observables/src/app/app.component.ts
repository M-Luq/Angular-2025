import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  clickCount = signal(0);

  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$);
  //interval  =signal(0);
  //doubleInterval = computed(() => this.interval() * 2);
  customeInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    
    const interval = setInterval(() => {
      if(timesExecuted >= 3){
      clearInterval(interval);
      subscriber.complete();
      return;
    }
      console.log("emiting new value");
      subscriber.next({ message : 'New Value'});
      timesExecuted++;
    },2000);
  })

  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Button clicked ${this.clickCount()} times`);
    // })
  }

  ngOnInit() : void{

    // const subscription = interval(1000).pipe(
    //   map(value => value * 2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });
   
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    this.customeInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Custom interval observable completed')
    });

   const subscription =  this.clickCount$.subscribe({
      next: (val) => console.log(`Button clicked ${val} times`)
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick(){
    this.clickCount.update(prevCount => prevCount + 1);
  }

}
