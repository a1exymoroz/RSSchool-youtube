import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/reducers';
import { AddCustomItem, AddCustomItemLocal } from 'src/app/store/youtube.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  adminForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppState>, private router: Router) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  clearInput(key) {
    this.adminForm.controls[key].setValue('');
  }

  onSubmit(event) {
    event.preventDefault();

    const card = {
      id: 'custom_' + Math.random().toString(36).substr(2, 9),
      snippet: {
        publishedAt: new Date().toISOString(),
        title: this.adminForm.controls.title.value,
        description: this.adminForm.controls.description.value,
        thumbnails: {
          medium: {
            url: this.adminForm.controls.img.value,
          },
        },
      },
    };
    // https://prnt.sc/uiadbz
    // https://www.youtube.com/watch?v=xObCVNJRE3s&t=1336s
    // this.store.dispatch(AddCustomItem({ customItem: card }));
    this.store.dispatch(AddCustomItemLocal({ customItem: card }));
    this.adminForm.reset();
  }

  isDisabled() {
    return !this.adminForm.valid || !this.adminForm.dirty;
  }

  onClickMain() {
    this.router.navigate(['/main']);
  }
}
