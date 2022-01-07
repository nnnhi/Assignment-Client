import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isLoading: boolean = true;

  add() {
    this.isLoading = true;
  }

  remove() {
    this.isLoading = false;
  }
}