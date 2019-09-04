import { Component, OnInit } from '@angular/core';
import {Apartment} from '../../model/apartment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {

  apartment: Apartment;
  apartmentForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getApartmentById(id).subscribe(
      next => {
        this.apartment = next;
        this.apartmentForm.patchValue(this.apartment);
      },
      error => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

  onSubmit() {
    if (this.apartmentForm.valid) {
      const { value } = this.apartmentForm;
      // spread syntax
      const data = {
        ...this.apartment,
        ...value
      };
      this.apartmentService.updateApartment(data).subscribe(
        next => {
          this.router.navigate(['/book']);
        },
        error => console.log(error)
      );
    }
  }

}
