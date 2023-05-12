import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  myForm!: FormGroup;
  signupForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.myForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  data = [
    { name: 'John', email: 'john@gmail.com', pass: 'dfnknf' },
    { name: 'Jane', email: 'jane@gmail.com', pass: 'hfdsfdf' },
    { name: 'Bob', email: 'bob@gmail.com', pass: 'bdfbsddmnc' },
  ];
  name: string = '';
  email: string= '';
  password: string= '';

  submitForm(){
    // alert(this.myForm.value.name + " " + "registered Successfully")
    // console.log(this.data[0].name)

    // const newPerson = { name: this.data[0].name, age: this.age, email: this.email };
    console.log(this.myForm.value.name)
  }
}
