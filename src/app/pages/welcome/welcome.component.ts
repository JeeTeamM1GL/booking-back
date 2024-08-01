import { Component, OnInit } from '@angular/core';
import {NzCardModule} from "ng-zorro-antd/card";
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports : [NzCardModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.setItem("user","user")
  }

}
