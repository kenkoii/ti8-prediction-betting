import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor() { }
  teams = [
    {'name': 'Select a Team', 'tag': 'none', 'weightedPoints': 0, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/tbd.png',},
    {'name': 'Virtus Pro', 'tag': 'VP', 'weightedPoints': 10, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/1883502.png'},
    {'name': 'Team Liquid', 'tag': 'Liquid', 'weightedPoints': 10, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/2163.png'},
    {'name': 'PSG.LGD', 'tag': 'LGD', 'weightedPoints': 9, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/15.png'},
    {'name': 'Team Secret', 'tag': 'Secret', 'weightedPoints': 9, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/1838315.png'},
    {'name': 'Mineski', 'tag': 'Mski', 'weightedPoints': 8, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/543897.png'},
    {'name': 'Vici Gaming', 'tag': 'VG', 'weightedPoints': 8, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/726228.png'},
    {'name': 'Newbee', 'tag': 'Newbee', 'weightedPoints': 7, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/1375614.png'},
    {'name': 'VGJ.Thunder', 'tag': 'Thunder', 'weightedPoints': 7, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5027210.png'},
    {'name': 'Optic Gaming', 'tag': 'Optic', 'weightedPoints': 6, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5026801.png'},
    {'name': 'VGJ.Storm', 'tag': 'Storm', 'weightedPoints': 6, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5228654.png'},
    {'name': 'Evil Geniuses', 'tag': 'EG', 'weightedPoints': 5, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/39.png'},
    {'name': 'Fnatic', 'tag': 'Fnatic', 'weightedPoints': 5, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/350190.png'},
    {'name': 'OG', 'tag': 'OG', 'weightedPoints': 4, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/2586976.png'},
    {'name': 'Winstrike', 'tag': 'Winstrike', 'weightedPoints': 4, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5229127.png'},
    {'name':  'Invictus Gaming', 'tag':  'IG', 'weightedPoints': 3, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5.png'},
    {'name': 'TNC.Predator', 'tag': 'TNC', 'weightedPoints': 3, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/2108395.png'},
    {'name': 'Pain Gaming', 'tag': 'Pain', 'weightedPoints': 2, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/67.png'},
    {'name': 'Team Serenity', 'tag': 'Serenity', 'weightedPoints': 2, 'imageUrl': 'http://cdn.dota2.com/apps/dota2/images/international2018/overview/teamlogos/small/5066616.png'},
  ];

  getAllTeams() {
    return this.teams;
  }

  getTeamByTag(tag: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return this.teams.filter(team => team.tag === tag)[0] || null;
  }
}
