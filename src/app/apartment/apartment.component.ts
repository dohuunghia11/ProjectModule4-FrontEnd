import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  apartmentList: Apartment[] = [];
  apartmentForm: FormGroup;
  constructor(
    private apartmentService: ApartmentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(){
    this.apartmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      houseKind: ['', [Validators.required, Validators.minLength(5)]],
      roomKind: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      roomNumber: ['', [Validators.required, Validators.minLength(5)]],
      bathNumber: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      prizePerNight: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.apartmentService
      .getApartments()
      .subscribe(next => (this.apartmentList = next), error => (this.apartmentList = []));
  }

  onSubmit(){
    if (this.apartmentForm.valid) {
      const {value} = this.apartmentForm;
      this.apartmentService.createApartment(value)
        .subscribe(next => {
          this.apartmentList.unshift(next);
          this.apartmentForm.reset({
            name: '',
            houseKind: '',
            roomKind: '',
            address: '',
            roomNumber: '',
            bathNumber: '',
            description: '',
            prizePerNight: ''
          });
        }, error => console.log(error));
    }
  }

  deleteApartment(i) {
    const apartment = this.apartmentList[i];
    this.apartmentService.deleteApartment(apartment.id).subscribe(() => {
      this.apartmentList = this.apartmentList.filter(t => t.id !== apartment.id);
    });
  }

}
