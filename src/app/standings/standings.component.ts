import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';
import { OrderbyPipe } from '../orderby.pipe';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  playerSelections;
  playerScores = [];
  teamScores;
  constructor(private angularService: AngularService, private teamsService: TeamsService) { }

  ngOnInit() {
    Promise.all([this.getSelections(), this.getPointsScore()])
          .then(values => {
            this.playerSelections = values[0];
            this.teamScores = this.sortDescending(values[1].map(team => {
              console.log("Team: " + team)
              console.log("Value: " + team.payload.val());
              return {"key": team.key, "value": team.payload.val()}
            }));

            console.log(values);

            this.playerSelections.forEach(player => {
              console.log(player.payload.val());
              let score = this.countPoints(player.payload.val());
              this.playerScores.push({"key": player.key, "value": score});
            });

            this.playerScores = this.sortDescending(this.playerScores);

          })
          .catch(this.catchError);
  }

  sortDescending(arr) {
    return arr.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  getPointsScore() {
    return new Promise<any>((resolve, reject) => this.angularService.getList('scores')
        .snapshotChanges()
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, err => {
          reject(err);
        }));
  }

  getSelections() {
    return new Promise<any>((resolve, reject) => this.angularService.getList('selections')
        .snapshotChanges()
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, err => {
          reject(err);
        }));
  }

  getTeamObject(tag) {
    const team = this.teamsService.getTeamByTag(tag);
    return team;
  }

  catchError(err) {
    console.log("Error: " + err);
  }

  countPoints(player) {
    const points = player.map(p => {
      return this.getTeamPoints(p);
    })

    return points.reduce((total, amount) => {
      return total + amount;
    });
  }

  getTeamPoints(team) {
    
    const score = this.teamScores.filter(t => {
      return t.key == team;
    })[0]["value"];
    return score;
  }


}
