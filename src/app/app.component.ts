import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'where-my-car';

  ngOnInit(): void {
    const marker = document.getElementById('x');
    marker.style.position = 'absolute';
    marker.style.left = '0';
    marker.style.top = '0';
  }

  save(loc): void {
    console.log(loc.layerX);
    console.log(loc.layerY);
    const marker = document.getElementById('x');
    const left = loc.layerX;
    const top = loc.layerY;
    marker.style.left = `${left - 5}px`;
    marker.style.top = `${top - 7}px`;
  }
}
