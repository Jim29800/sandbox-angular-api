import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities/cities.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public CitiesService: CitiesService) { }

  affiche(){
    console.log("diduodui");

    this.CitiesService.getCity(1);
    return this;
  }

  ngOnInit() {
  }

}
