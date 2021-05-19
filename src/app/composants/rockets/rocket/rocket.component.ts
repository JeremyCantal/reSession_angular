import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket: Rocket = {};
  rockets: Array<Rocket> = new Array<Rocket>();
  orga = "";


  constructor(private router: Router, private rocketService: RocketService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rocketService.getRocketsByOrga(this.orga).subscribe(data => {
      console.log(data);
      this.rockets = data;
    });
  }

  saveRocket() {
    this.rocketService.addRocket(this.rocket).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  deleteRocket(id: any) {
    this.rocketService.deleteRocket(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  deleteAllRockets() {
    this.rocketService.deleteAllRockets().subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  rocketEdit(id: any){
    this.router.navigate(['edit-rocket', id]);
  }

  getRocketsByOrga(){
    this.rocketService.getRocketsByOrga(this.orga).subscribe(data => {
      console.log(data);
      this.reloadData();
      this.rockets = data;
    });
  }

}
