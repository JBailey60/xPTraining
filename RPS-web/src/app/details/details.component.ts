import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameRecord, PlayerStat } from '../game/game';
import { GameGateway } from '../game/game.gateway';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  gameRecords$: Observable<GameRecord[]>;
  
  constructor(private router: ActivatedRoute, private gameGateway: GameGateway) { }

  ngOnInit() {
    this.router.snapshot.paramMap.get('id');
    this.getGameRecords(this.router.snapshot.paramMap.get('id'));
  }

  getGameRecords(id: string){
    this.gameRecords$ = this.gameGateway.getPlayerGameRecords(parseInt(id, 10));
  }

}
