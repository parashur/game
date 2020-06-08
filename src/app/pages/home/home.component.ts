import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
  }

  start() {
    const col: any = (document.getElementById('column') as HTMLInputElement).value;
    const row: any = (document.getElementById('row') as HTMLInputElement).value;
    if (col > 0 && row > 0) {
      localStorage.setItem('col', col)
      localStorage.setItem('row', row)
    } else {
      localStorage.setItem('col', '5');
      localStorage.setItem('row', '4');
    }
    this.router.navigate(['/game'])
  }
}
