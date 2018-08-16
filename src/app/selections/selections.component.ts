import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../teams.service';
import { AngularService } from '../angular.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {
  constructor(private teamsService: TeamsService, private angularService: AngularService) { }

  teams = this.teamsService.getAllTeams();

  players = null;
  selections = [];

  ngOnInit() {
    
    this.angularService.getList('selections').snapshotChanges().subscribe(res => {
      console.log(res);
      this.players = res;
    });

  }

  OnSave(selectedTeams, playerKey) {
    console.log("Hellow World " + playerKey);
    console.log("Hellow World " + selectedTeams[0].tag);
    const obj = {};
    for (let i = 0; i < selectedTeams.length; i++) {
      obj[i] = selectedTeams[i].tag;
    }
    this.angularService.updateList('selections', playerKey, obj)
        .then(res => {
          console.log("Hello!" + res);
          alert("Saved successfully!");
        }, err => {
          console.log(err);
        })
  }

}
