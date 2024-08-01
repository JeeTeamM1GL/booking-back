import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Reservation} from "../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  headersOptions : HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    'Access-Control-Allow-Origin': '*'
  })
  constructor(
    private httpClient : HttpClient
  ) { }

  _getReservationsList()  {
    //return this.httpClient.get(`${environment.api.base_url}/RESERVATIONS-SERVICE/api/v1/reservations`,{
    return this.httpClient.get(`${environment.api.base_url3}/api/v1/reservations`,{
      headers : this.headersOptions
    })
  }

  _getReservationById(id : string) {
    //return this.httpClient.get(`${environment.api.base_url}/RESERVATIONS-SERVICE/api/v1/reservations/${id}`)
    return this.httpClient.get(`${environment.api.base_url1}/api/v1/reservations/${id}`)
  }


  _addReservation(payload : Reservation)  {
    return this.httpClient.post(`${environment.api.base_url}/api/v1/reservations`, payload);
  }


  _updateReservation(id : string , payload : Reservation)  {
    return this.httpClient.put(`${environment.api.base_url}/api/v1/reservations/${id}` , payload)
  }

  _deleteReservation(id : string)  {
    return this.httpClient.delete(`${environment.api.base_url}/api/v1/reservations/${id}`)
  }
}
