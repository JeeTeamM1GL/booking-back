import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Room} from "../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  headersOptions : HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    'Access-Control-Allow-Origin': '*'
  })

  constructor(
    private httpClient : HttpClient
  ) { }



  _getRoomsListByHotelId(hotelId : string)  {
    //return this.httpClient.get(`${environment.api.base_url}/HOTEL-SERVICE/api/v1/hotels`,{
    return this.httpClient.get(`${environment.api.base_url2}/api/v1/rooms/by-hotel/${hotelId}`,{
      headers : this.headersOptions
    })
  }

  _getRoomById(id : string) {
    //return this.httpClient.get(`${environment.api.base_url}/HOTEL-SERVICE/api/v1/hotels/${id}`)
    return this.httpClient.get(`${environment.api.base_url2}/api/v1/rooms/${id}`,{
      headers : this.headersOptions
    })
  }


  _addRoom(payload : Room)  {
    return this.httpClient.post(`${environment.api.base_url}/api/v1/rooms`, payload,{
      headers : this.headersOptions
    });
  }


  _updateRoom(id : string , payload : Room)  {
    return this.httpClient.put(`${environment.api.base_url}/api/v1/rooms/${id}` , payload,{
      headers : this.headersOptions
    })
  }

  _deleteRoom(id : string)  {
    return this.httpClient.delete(`${environment.api.base_url}/api/v1/rooms/${id}`,{
      headers : this.headersOptions
    })
  }
}


