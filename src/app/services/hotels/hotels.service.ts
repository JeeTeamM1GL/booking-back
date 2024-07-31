import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hotel } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  headersOptions = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    'Access-Control-Allow-Origin':'*'
  })

  constructor(
    private httpClient : HttpClient
  ) { }



  _getHotelsList() : Observable<Hotel> {
      return this.httpClient.get(`${environment.api.base_url}/HOTEL-SERVICE/api/v1/hotels`,{
        headers : this.headersOptions
      })
  }

  _getHotelById(id : string) : Observable<Hotel> {
    return this.httpClient.get(`${environment.api.base_url}/api/v1/hotels/${id}`)
  }


  _addHotel(payload : Hotel) : Observable<Hotel> {
    return this.httpClient.post(`${environment.api.base_url}/api/v1/hotels`, payload);
  }


  _updateHotel(id : string , payload : Hotel) : Observable<Hotel> {
    return this.httpClient.put(`${environment.api.base_url}/api/v1/hotels/${id}` , payload)
  }

  _deleteHotel(id : string) : Observable<Hotel> {
    return this.httpClient.delete(`${environment.api.base_url}/api/v1/hotels/${id}`)
  }
}
