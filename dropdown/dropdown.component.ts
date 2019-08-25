import {Component, OnInit} from '@angular/core';
import {MqmService} from '../mqm.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  form: FormGroup;
  users: any;
  submitted: Boolean = false;
  resultArray: any = [];

  constructor(
    private mqmservice: MqmService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      filter1: [''],
      filter2: [''],
      filter3: [''],
      filter4: [''],
      filter5: [''],
      filter6: [''],
      filter7: [''],
      filter8: [''],
      filter9: [''],
      filter10: [''],
      cpSearch: ['', [Validators.required, Validators.minLength(5)]],
    });

    return this.mqmservice.getdata()
      .subscribe(data => this.users = data);
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    // Way get read the value
    console.log(this.form.controls.cpSearch.value);
    // change the parameter name releated to page
    this.resultArray = [];
    this.mqmservice.getdata().subscribe(
      (success:any[])=> {
        console.log(success);
        for (let i = 0; i < success.length; i++) {
          this.resultArray.push({
            id: (i + 1),
            cp: success[i].username,
            staus: 'Active',
            lastModifiedDate: '2018-07-16',
            lastModifiedBy: success[i].name,
            createdBy: success[i].name,
            createdDate: '2018-07-16'
          });
        }
      },
      error => {
        alert('Unable to fetch data');
      }
    );
  }

  clear() {
    this.submitted = false;
    this.resultArray = [];
    this.form.reset();
  }
}
