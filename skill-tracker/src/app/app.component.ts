import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skill-tracker';
  // selectedValue: string;
  // selectedCar: string;



  foods: Food[] = [
    {value: '0', viewValue: 'HTML'},
    {value: '1', viewValue: 'CSS'},
    {value: '2', viewValue: 'ANGUALR'},
    {value: '3', viewValue: 'SPRING'},
    {value: '4', viewValue: 'GIT'},
    {value: '5', viewValue: 'DOCKER'},
    {value: '6', viewValue: 'AWS'},
  ];
  
}
