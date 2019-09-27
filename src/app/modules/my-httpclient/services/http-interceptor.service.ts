import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as casual from 'casual';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', this.getAuthToken())
    });
    return next.handle(clonedReq);
  }

  constructor() { }

  private getAuthToken(): string {
    return casual.word;
  }
}
