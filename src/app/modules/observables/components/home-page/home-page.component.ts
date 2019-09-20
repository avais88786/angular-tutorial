import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, fromEvent, of, ObservableInput, } from 'rxjs';
import { filter, map, catchError, retry, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  simpleObservable: number[] = [];

  mouseX: number;
  mouseY: number;

  oddNumberSquares: number[] = [];
  evenNumberSquares: number[] = [];

  observableString: string;

  observableRetryString: string;

  suggestedWords: string[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadSimpleObservable();
    this.evenOddNumberTransformsWithPipeFilterAndMap();
    this.errorsAfterOneSec();
    this.retryAfterErrors();
    this.subscribeTypeAhead();
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

  startListeningEventMovement(event: MouseEvent) {
    const fromEventObs = fromEvent(event.target, 'mousemove');

    const subs = fromEventObs.subscribe((evt: MouseEvent) => {

      this.mouseX = evt.clientX;
      this.mouseY = evt.clientY;

      if (evt.clientX < 40 && evt.clientY < 40) {
        subs.unsubscribe();
      }

    });

  }

  evenOddNumberTransformsWithPipeFilterAndMap() {
    const numbrs = new Observable((observer) => {
      let i = 1;
      const intr = setInterval(() => {
        if (i === 7) {
          observer.complete();
          clearInterval(intr);
        }
        observer.next(i++);
      }, 1000);
    });

    //of(1, 2, 3, 4, 5, 6);
    numbrs.pipe(
      filter((num: number) => num % 2 !== 0),
      map(n => n * n)
    ).subscribe(n => {
      const temp = Object.assign([], this.oddNumberSquares);
      temp.push(n);
      this.oddNumberSquares = Object.assign([], temp);
    });

    numbrs.pipe(
      filter((num: number) => num % 2 === 0),
      map(n => n * n)
    ).subscribe(n => {
      const temp = Object.assign([], this.evenNumberSquares);
      temp.push(n);
      this.evenNumberSquares = Object.assign([], temp);
    });
  }

  errorsAfterOneSec() {
    const observable = new Observable((observer) => {
      let i = 1;
      const intr = setInterval(() => {

        if (i === 5) {
          clearInterval(intr);
          observer.error(new Error('deliberate exception'));
          //observer.next(5 / 0);
        }
        observer.next(i++);
      }, 1000);
    })
      .pipe(
        map(n => { if (n === 6) { throw new Error('First Error'); } else { return n; } }),
        catchError(err => of(err))
      );

    observable.subscribe((p: any) => {
      this.observableString = p.toString();
    }, error => {
      console.log(error);
      this.observableString = error;
    });

  }

  retryAfterErrors() {
    const observable = new Observable((observer) => {
      let i = 1;
      const intr = setInterval(() => {

        if (i === 3) {
          clearInterval(intr);
          observer.error(new Error('deliberate exception'));
          //observer.next(5 / 0);
        }
        observer.next(i++);
      }, 1000);
    }).pipe(
      retry(2),
      map(n => n),
      catchError(err => of(err))
    );

    observable.subscribe((p: any) => {
      this.observableRetryString = p.toString();
    }, error => {
      console.log(error);
      this.observableRetryString = error;
    });

  }

  subscribeTypeAhead() {
    const el = document.getElementById('searchBox');

    fromEvent(el, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter((x: string) => x.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((term: string) => this.getValues(term))
    ).subscribe((data: string) => {
      this.suggestedWords.push(data);
    });

  }


  private getValues(term: string): any {
    const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
      'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
      'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    return states.filter(x => x.substring(0, 3) === term);

  }


}
