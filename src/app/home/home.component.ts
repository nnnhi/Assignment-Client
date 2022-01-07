import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscriptions: any[] = [];

  constructor(private api: ApiService, public loading: LoadingService) { }

  ngOnInit(): void {
    this.loading.add();
    this.api
      .getSubcriptions$()
      .subscribe({
        next: data => {
          this.subscriptions = data;
          this.loading.remove();
        },
        error: error => {
          this.loading.remove();
          alert('There was an error!');
        }
      })
  }
}
