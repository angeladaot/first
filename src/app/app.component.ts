import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentCollection: Array<object>=[];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages= '';
  printing= false;

  private checkPatterns(value:any, pattern: RegExp): boolean{
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  addStudents(): boolean{
    this.printing=false;
    const stringPattern= /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if(this.checkPatterns(this.studNo,studNumberPattern)&&
      this.checkPatterns(this.studFname,stringPattern)&&
      this.checkPatterns(this.studLname,stringPattern)&&
      this.checkPatterns(this.studProg,stringPattern)&&
      this.checkPatterns(this.studYr,studYearPattern)) {
        
    this.studentRecord = {
      studNumber: this.studNo,
      studFirstName: this.studFname,
      studLastName: this.studLname,
      studProgram: this.studProg,
      studYr: this.studYr,
  };  
    
  this.studentCollection.push(this.studentRecord);
  this.messages = null;
  this.clearValue();

  } else {
    this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation';
    return false;
     }
  }

  listStudents(): void{
    this.printing=true;
    console.log('showing stored students');

  }
  clearValue(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;

  }

 

}
