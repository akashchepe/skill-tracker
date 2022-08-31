import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SkillTrackerService } from './skill-tracker.service';

interface Skills {
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
  userDetails: any;

  ngOnInit() {
  }

  constructor(private skillTracker: SkillTrackerService) {

  }

  skillForm = new FormGroup({
     associateId: new FormControl(''),
     associateName: new FormControl(''),
     skillName: new FormControl(''),
  });

  onSearch() {
    console.log(this.skillForm);
    this.skillTracker.getUserDetails(this.skillForm.getRawValue()).subscribe( response => {
      this.userDetails = response;
      console.log(response);
    })
  }

  skills: Skills[] = [
    {value: '0', viewValue: 'HTML'},
    {value: '1', viewValue: 'CSS'},
    {value: '2', viewValue: 'ANGUALR'},
    {value: '3', viewValue: 'SPRING'},
    {value: '4', viewValue: 'GIT'},
    {value: '5', viewValue: 'DOCKER'},
    {value: '6', viewValue: 'AWS'},
  ];
  
}
