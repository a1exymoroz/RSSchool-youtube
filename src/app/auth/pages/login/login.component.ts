import { SetUser } from './../../../store/youtube.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppState>, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const user = this.loginForm.controls.name.value;
    localStorage.setItem('user', user);
    this.store.dispatch(SetUser({ user }));
    this.router.navigate(['/main']);
  }

  clearInput(key) {
    this.loginForm.controls[key].setValue('');
  }
}
