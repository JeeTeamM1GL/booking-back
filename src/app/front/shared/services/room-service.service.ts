import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Room } from '../models/Hotel';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms/public'; 

  constructor(private http: HttpClient) { }

  getRoomsByHotel(hotelId: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/hotel/${hotelId}`);
  }
}
