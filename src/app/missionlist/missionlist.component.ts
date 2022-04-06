import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../network/spacex.service';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../mission.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  data: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {
    this.spacexService.getMissionData().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

  checkData() {
    console.log(this.data);
  }

  goToDetails() {
    this.router.navigate(['missionlist']);
  }

}
