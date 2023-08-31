import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './job';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsDataService {

  apiUrl= 'http://localhost:1337/api/jobs';

  constructor(private http:HttpClient) {}

  getJobs(){
    return this.http.get<Job[]>(`${this.apiUrl}`).pipe(
      map((res:any) => {
      // console.log(res.data);
      return res.data
    }));
  }
}
