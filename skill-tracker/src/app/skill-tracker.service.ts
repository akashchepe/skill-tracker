import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SkillTrackerService {

  constructor(
    private http: HttpClient
  ) {

  }


  getUserDetails(body: any) {
    return this.http.post('../assets/local-api/userDetails.json', body);
  }
  


}
