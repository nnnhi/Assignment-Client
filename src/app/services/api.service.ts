import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}


  getActivities$() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/Activities`);
  }

  getSubcriptions$() : Observable<any> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/Subscriptions`);
  }

  subscript$(subscription: any) : Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/Subscriptions`, subscription);
  }
}
