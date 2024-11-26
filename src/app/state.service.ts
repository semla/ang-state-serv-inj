import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _data$: BehaviorSubject<any> = new BehaviorSubject<any>('');

  public get data$(): Observable<any> {
    return this._data$.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) {
  }

  public getDataFromBE(product:string): Observable<any> {
    const url = `https://dummyjson.com/products/search?q=${product}`; //'https://dummy-json.mock.beeceptor.com/continents';
    return this.http.get<any>(url).pipe(
      map(v => v.products),
      tap((v) => {
        this._data$.next(v);
      })
    );
  }
}
