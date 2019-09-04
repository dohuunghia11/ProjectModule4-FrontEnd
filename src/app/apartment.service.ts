import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apartment} from '../model/apartment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private readonly API_URL = 'http://localhost:3000/apartments';
  constructor(private http: HttpClient) { }
  getApartments(count = 10): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => i < count))
    );
  }
  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.API_URL}/${id}`);
  }
  createApartment(apartment: Partial<Apartment>): Observable<Apartment> {
    return this.http.post<Apartment>(this.API_URL, apartment);
  }
  deleteApartment(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.API_URL}/${apartment.id}`, apartment);
  }
}
