import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  subscriptionForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    numberOfYearsOfExperience: 0,
    activityId: [null, Validators.required],
    comments: ''
  });
  activities: any[] = [];
  minDate: NgbDateStruct;
  constructor(private fb: FormBuilder, private api: ApiService, public loading : LoadingService, private router: Router) { 
  }

  ngOnInit(): void {
    var now = new Date();
    this.minDate = {day: now.getDate(), month:now.getMonth()+1, year:now.getFullYear()}
    this.subscriptionForm.addControl("startDate", new FormControl(this.minDate))

    this.api
    .getActivities$()
    .subscribe({
      next: data => {
        this.activities = data
      },
      error: error => {
        alert('There was an error!');
      }
    })
  }

  onSubmit() {
    console.warn(this.subscriptionForm.value);

    var ngbDate = this.subscriptionForm.get("startDate").value;
    this.subscriptionForm.get("startDate").setValue(new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day));

    this.loading.add()
    this.api
      .subscript$(this.subscriptionForm.value)
      .subscribe({
        next: () => {
          debugger
  
          this.router.navigate(['subscriptions']);
          this.loading.remove()
        },
        error: error => {
          alert(error.message)
          this.loading.remove()
        }
      })
  }

}
