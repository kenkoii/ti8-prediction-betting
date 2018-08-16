import { Component, OnInit, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-dropdown',
  templateUrl: './team-dropdown.component.html',
  styleUrls: ['./team-dropdown.component.css']
})
export class TeamDropdownComponent implements OnInit {
  @Input()
  selectedTag: string;
  @Input()
  editable: boolean;

  @Output() selection = new EventEmitter<any>();

  teams = this.teamsService.getAllTeams();
  selectedTeam = {};
  selected;
  constructor(private teamsService: TeamsService, private cdRef: ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.selectedTeam = this.teamsService.getTeamByTag(this.selectedTag);
    this.selected = this.selectedTag || "none";
    this.selection.emit(this.selectedTeam);
    this.cdRef.detectChanges();
  }

  modelChange(event) {
    this.selectedTeam = this.teamsService.getTeamByTag(this.selected);
    this.selection.emit(this.selectedTeam);
    this.cdRef.detectChanges();
  }

}
