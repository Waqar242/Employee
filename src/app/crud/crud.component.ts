import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  newEmployeeClicked = false;
  userprofileForm: FormGroup;
  name: String = "";
  position: String = "";

  empName: String = "";

  employees = [
    {name: 'Waqar', position: 'Developer'},
    {name: 'Ehsan', position: 'Devops'},
    {name: 'Shaan', position: 'QA'}
  ];
  color: any;

  constructor() { 
    this.userprofileForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      userPosition: new FormControl("", Validators.required)
 });
   }

  ngOnInit(): void {
  }

  model1:any = {};
  isSaveButtonVisible = false;
  isUpdateButtonVisible = false;

  addEmployee(){
    this.employees.push(this.model1);
    this.model1 = {}
    this.newEmployeeClicked = !this.newEmployeeClicked;
    this.isSaveButtonVisible = false;
  }

  deleteEmployee(i: any){
    this.employees.splice(i);
    console.log(i)
  }

  myValue: any;

  editEmployee(editEmployeeInfo: any){
    this.newEmployeeClicked = !this.newEmployeeClicked;
    this.isSaveButtonVisible = false;
    this.isUpdateButtonVisible = true;
    this.model1.name = this.employees[editEmployeeInfo].name;
    this.model1.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee(){
    let editEmployeeInfo = this.myValue;
    for(let i=0 ; i < this.employees.length ; i++){
      if(i == editEmployeeInfo){
        this.employees[i] = this.model1;
        this.model1 = {}
        this.newEmployeeClicked = !this.newEmployeeClicked;
        this.isUpdateButtonVisible = false;
      }
    }
  }

  addNewEmployeeBtn(){
    this.newEmployeeClicked = !this.newEmployeeClicked;
    this.isSaveButtonVisible = true;
  }  

  checkDuplicate(){

    const input = document.getElementById('name') as HTMLInputElement | null;
    for(let i=0 ; i < this.employees.length ; i++){
      if(this.employees[i].name == this.model1.name)
      {
          alert("User already exists, please use a different username");
          return;
      }
    }
    this.addEmployee();
  }

  changeColorOne(){
    this.color = !this.color;
    if(this.color){
      return '#ffffff';
    }
    else{
      return '#f6f6f6';
    }
  }
  ////////////////////////

  
     
}
