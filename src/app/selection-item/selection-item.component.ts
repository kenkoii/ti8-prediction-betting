import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.css']
})
export class SelectionItemComponent implements OnInit {
  @Input()
  player: any;
  
  @Output() selectionUpdate = new EventEmitter<any>();

  editable = true;
  totalPoints = 0;
  selectedTeams = [];
  user = JSON.parse(localStorage.getItem('user')) || "";
  constructor(private teamsService: TeamsService) { 
  }
  
  ngOnInit() {
    
    console.log(this.player.key);
    console.log(this.user['displayName']);
    this.editable = this.user['displayName'] === this.player.key;
  }

  onSelected(selectedTeam, index) {
    console.log(index);
    console.log(selectedTeam.tag);
    this.selectedTeams[index] = this.teamsService.getTeamByTag(selectedTeam.tag);
    this.calculatePoints();
  }

  calculatePoints() {
    this.totalPoints = this.selectedTeams.map(team => {
      console.log(team);
      return team?team.weightedPoints:0;
    }).reduce(this.sum);
  }

  points(team) {
    return Number(team.weightedPoints);
  }

  sum(prev, next) {
    return prev + next;
  }

  OnSave() {
    this.selectionUpdate.emit(this.selectedTeams);
  }

}
