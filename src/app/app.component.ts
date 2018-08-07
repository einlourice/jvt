import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor() {
    // console.log(new Greeter("test"))
    // console.log(new C());
  }
}

