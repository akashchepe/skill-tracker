import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SkillTrackerService {

  constructor(
    private http: HttpClient
  ) {

  }

  


  getUserDetails(formData: any) {

    let params = new HttpParams();
    params = params.append('associateName', formData.associateName);
    params = params.append('associateId', formData.associateId);
    params = params.append('skillName', formData.skillName);
  
    return this.http.get('../assets/local-api/userDetails.json', {params: params});
  }
  


}
