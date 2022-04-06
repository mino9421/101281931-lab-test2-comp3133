import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../mission.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input('item') mission: any
  switch = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDetails() {
    this.switch = !this.switch;
  }

}
