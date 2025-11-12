import { Component, DestroyRef, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?:NodeJS.Timeout; //It is a timeout ID type given by NodeJS.
  //ReturnType<typeof setInterval>; this is another way to define the type of interval.
  constructor(private destroyRef: DestroyRef) {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() { // there can be typo mistakes like ngoninit() which will not show any error anywhere to avoid that
    // we are implementing OnInit.(implements is a typescript feature).
    const interval = setInterval(() =>{
      const random = Math.random(); // 0 - .999999999999

    if(random <0.5){
      this.currentStatus.set('online');
    }
    else if(random < 0.9){
      this.currentStatus.set('offline') ;
    }
    else {
      this.currentStatus.set('unknown');
    }
  },5000);
  this.destroyRef.onDestroy(() => {
    clearInterval(interval);
  });
}
// ngOnDestroy() {
//   clearTimeout(this.interval);
//   console.log('ServerStatusComponent destroyed');
// }
}
