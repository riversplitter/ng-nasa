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
    let date = this.randomDate(new Date(1995, 5, 16), new Date());
    this.getApod(date);
  }

  //Create a random apodDate
  randomDate(start, end): string {

    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    //Format the date
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    if(m < 10){
      m = '0' + m;
    }

    if(d < 10){
      d = '0' + d;
    }

    return `${y}-${m}-${d}`;

  }


}
