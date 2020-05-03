import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']   
})
export class EmpFormComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
   
  }
  firstName = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "password":["", Validators.required]
      }, { updateOn: "blur" });
  }
  onSubmit() {
      console.log("model-based form submitted");
      console.log(this.form);
      this.form.setValue({firstName:"nigella",password:"lawson"}); 
      /**there is also setValue(), to which we are passing all the values of the form. 
       * In the case of this method, values for all form fields need to be provided, otherwise, 
       * we will get an error message saying that certain field values are missing */
      this.form.patchValue({firstName:"emma"});
      console.log(this.form.value);
  }
  reset(){
    console.log("here");
    this.form.reset();
  }
   birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get formatss()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

}
