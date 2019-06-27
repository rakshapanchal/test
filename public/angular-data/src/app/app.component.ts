import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppService } from './app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurantForm: FormGroup;//for formGroup name
  dishList: any //for store dish data
  list: any //for list of
  sum = 0;
  restaurantArray = [];//for store restaurant name
  title = 'angular-data';
  restaurantList: any
  constructor(private _formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router) { }

  get f() {
    return this.restaurantForm.controls;
  }

  ngOnInit() {
    this.buildRestaurantForm();
  }

  /**for build form */
  buildRestaurantForm() {
    this.restaurantForm = this._formBuilder.group({
      meal: ['', [Validators.required]],
      people: ['1', [Validators.required, Validators.pattern(/^([1-9][0]*)$/)]],
      restaurantName: ['', Validators.required],
      dishes: this._formBuilder.array([this._formBuilder.group({ dish: [''], number: ['1', [Validators.required, Validators.pattern(/^([1-9][0]*)$/)]] })])
    });
  }

  /**for get all restaurant name */
  getRestaurant() {
    localStorage.setItem('people', this.restaurantForm.controls['people'].value)
    this.appService.getRestaurants(this.restaurantForm.controls['meal'].value).subscribe((response: any) => {
      response.result.map((data) => {
        if (this.restaurantArray.indexOf(data.restaurant) == -1) {
          this.restaurantArray.push(data.restaurant)
        }
      })
    })
  }

  get dishes() {
    return this.restaurantForm.get('dishes') as FormArray;
  }

  addDishes() {
    this.dishes.push(this._formBuilder.group({ dish: '', number: '1' }));
  }

  array1 = [];

  value(event) {
    this.restaurantForm.controls['dishes'].value.map((data) => {
      for (var i = 0; i < this.dishList.length; i++) {
        if (this.dishList[i].name === data.dish) {
          this.dishList.splice(i, 1);
        }
      }
    })
  }

  deleteDishes(index) {
    this.dishes.removeAt(index);
  }

  getdish() {
    this.appService.getDish(this.restaurantForm.controls['restaurantName'].value).subscribe((response: any) => {
      this.dishList = response.result
    })
  }

  getAllDish() {
    this.restaurantForm.controls['dishes'].value.map((data) => {
      this.sum += parseInt(data.number)
    })
    if (this.sum < parseInt(localStorage.getItem('people'))) {
      alert("enter valid dish Number")
      return;
    }
    this.list = this.restaurantForm.controls['dishes'].value
  }

  finish() {
    location.reload(true);
  }

}
