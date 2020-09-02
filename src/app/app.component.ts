import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  //userControl = new FormControl();
  userControl = new FormControl( '',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(6),


  ]);

}
