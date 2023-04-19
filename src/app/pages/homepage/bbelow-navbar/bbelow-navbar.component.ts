import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map,of } from "rxjs";

interface header {
  titulo: string;
 
}

interface Entry<T> {
  id: number;
  attributes: T;
}

interface Response {
  data: Entry<header>[];
}

@Component({
  selector: 'app-bbelow-navbar',
  templateUrl: './bbelow-navbar.component.html',
  styleUrls: ['./bbelow-navbar.component.css']
})

export class BbelowNavbarComponent implements OnInit {
  title:string="You want to travel with us";
  text:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel vehicula odio. Etiam venenatis ac enim ac fermentum. Pellentesque lectus est, finibus id accumsan sed, vulputate sit amet nunc. Quisque porttitor leo enim. Sed lorem massa, hendrerit eget mi in, faucibus hendrerit mi.";
  imagePlane:string="./assets/images/imagePlane.png";
  
  error: any | undefined;
  header$: Observable<header[]> | undefined;
 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = "http://localhost:1337/api/header";
    const opts = { params: { populate: "*" } };

    this.header$ = this.http.get<Response>(url, opts).pipe(
      catchError((error) => this.handleError(error)),
      map((response) => response.data.map((x) => x.attributes))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;
    return of();
  }


}

