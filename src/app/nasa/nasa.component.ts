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

  getApod(date=''): void {
    this.nasaService.getApod(date)
      .subscribe(apod => this.apod = apod);
  }

  onSubmit(): void {
    this.getApod('2017-05-23');
  }


}
