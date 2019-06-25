import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { AppService } from './app.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurantForm: FormGroup;
  dishList: any
  list: any
  restaurantArray = [];
  title = 'angular-data';
  restaurantList: any
  constructor(private _formBuilder: FormBuilder,
    private appService: AppService) { }

  get f() {
    return this.restaurantForm.controls;
  }

  ngOnInit() {
    this.buildRestaurantForm();
  }

  buildRestaurantForm() {
    this.restaurantForm = this._formBuilder.group({
      meal: ['', [Validators.required]],
      people: ['1', [Validators.required, Validators.pattern(/^([1-9][0]*)$/)]],
      restaurantName: ['', Validators.required],
      dishes: this._formBuilder.array([this._formBuilder.group({ dish: '', number: '1' })])
    });
  }

  getRestaurant() {
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
    this.restaurantForm.controls['dishes'].value.map((data) => {
      for (var i = 0; i < this.dishList.length; i++) {
        if (this.dishList[i].name === data.dish) {
          this.dishList.splice(i, 1);
        }
      }
    })
    this.dishes.push(this._formBuilder.group({ dish: '', number: '1' }));
  }

  deleteDishes(index) {
    this.dishes.removeAt(index);
  }

  getdish() {
    this.appService.getDish(this.restaurantForm.controls['restaurantName'].value).subscribe((response: any) => {
      this.dishList = response.result
    })
  }

  finishFunction() {
    console.log("lllll", this.restaurantForm.controls['dishes'].value)
    this.list = this.restaurantForm.controls['dishes'].value
  }
}
