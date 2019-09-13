import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  simpleObservable: number[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadSimpleObservable();
  }

  loadSimpleObservable() {
    const observable = new Observable<number>((observer) => {

      let x = 0;

      const intr = setInterval((ab) => {
        x++;
        if (x === 4) {
          clearInterval(ab);
          observer.complete();
        }
        observer.next(x);
      }, 1000);



      // setTimeout(() => {
      //   observer.next(1);
      //   observer.next(2);
      //   observer.next(3);
      //   observer.complete();
      // }, 1000);



      //observer.error('sample error');
    });
    observable.subscribe((val) => {
      const temp = Object.assign([], this.simpleObservable);
      temp.push(val);
      this.simpleObservable = Object.assign([], temp);
    }, () => { console.log('simple observable completed!'); });

  }
}
