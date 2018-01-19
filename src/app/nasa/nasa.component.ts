import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';
import { Nasa } from '../nasa';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  apod: Nasa;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.getApod();
  }

  getApod(): void {
    this.nasaService.getApod()
      .subscribe(apod => this.apod = apod);
  }


}
