import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, NgbModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.subscriptionForm.controls.firstName.setValue('');
    component.subscriptionForm.controls.lastName.setValue('');
    component.subscriptionForm.controls.email.setValue('');
    component.subscriptionForm.controls.numberOfYearsOfExperience.setValue('');
    component.subscriptionForm.controls.startDate.setValue('');
    component.subscriptionForm.controls.activityId.setValue(null);
    expect(component.subscriptionForm.valid).toBeFalsy();
  });

  it('form invalid when email is invalid', () => {
    component.subscriptionForm.controls.firstName.setValue('nam nhi');
    component.subscriptionForm.controls.lastName.setValue('nguyen');
    component.subscriptionForm.controls.email.setValue('nam');
    component.subscriptionForm.controls.numberOfYearsOfExperience.setValue(2);
    component.subscriptionForm.controls.startDate.setValue('2022-01-06');
    component.subscriptionForm.controls.activityId.setValue(1);
    expect(component.subscriptionForm.valid).toBeFalsy();
  });
});
