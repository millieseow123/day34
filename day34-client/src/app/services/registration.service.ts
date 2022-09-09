import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Response, Register} from "../models"

const URL = 'http://localhost:8080/api/registration'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  newRegistration(register: Register): Promise<Response> {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

    return lastValueFrom(
    this.http.post<Response>( URL , register, { headers })
        //Rxjs
        .pipe()
        )
  }
}
