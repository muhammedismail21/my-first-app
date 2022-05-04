import { Component } from "@angular/core";

@Component({
    selector: "app-emp",
    templateUrl: "./employee.component.html"
})
export class EmployeeComponent{

    empID: number = 0;
    empName: string = '';
    salary: number = 0.00;
    designation: string = '';    

    getEmployeeDetails(){
        this.empID = (Number)((document.getElementById("empID") as HTMLInputElement).value);
        this.empName = (document.getElementById("empName") as HTMLInputElement).value;
        this.salary = (Number)((document.getElementById("salary") as HTMLInputElement).value);
        this.designation = (document.getElementById("designation") as HTMLInputElement).value;
    }
}

