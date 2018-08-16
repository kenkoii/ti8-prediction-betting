import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route = 'overview';
  user = JSON.parse(localStorage.getItem('user')) || null;
  players = [];
  constructor(router: Router, location: Location, private authService: AngularService) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'overview';
      }
      console.log('current route: ' + this.route);
    });
    authService.getList('selections').snapshotChanges().subscribe(res => {
      console.log(res);
      this.players = res;
    });
  }

  onClickLoginButton() {
    if (this.user == null) {
      this.authService.loginWithFacebook()
      .then(res => {
        console.log('Res: ');
        console.log(res);
        this.user = res.user;
        localStorage.setItem('user', JSON.stringify(res.user));
        const count = this.players.filter(player => player.key === this.user["displayName"]).length;
        if(count === 0) {
          this.authService.updateList('selections', this.user["displayName"], {
            0: "none",
            1: "none",
            2: "none"
          }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
        }
      })
      .catch(err => {
        console.log('Error: ' + err);
        this.user = null;
        localStorage.removeItem('user');
      });
      return;
    }

    this.authService.logout()
      .then(res => {
        console.log('Res: ');
        console.log(res);
      })
      .catch(err => {
        console.log('Error: ' + err);
      });
      this.user = null;
      localStorage.removeItem('user');
  }

  ngOnInit() {
  }

}
