import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Player, Throw, throwLocalization } from './game';
import { GameGateway, PlayGameRequest, PlayPracticeGameRequest } from './game.gateway';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  
  gameResult: string;
  throwTypes: Throw[] = Object.keys(Throw).map(value => Throw[value]);
  throwLocalization = throwLocalization;
  mostRecentOutcome = '';
  rankedGameRequest: PlayGameRequest;
  practiceGameRequest: PlayPracticeGameRequest;
  playerList: Player[] = [];

  _destroy: Subject<void> = new Subject<void>();

  isPracticeGame = false;

  gameForm: FormGroup;

  winningMessage: string;

  constructor(private gameGateway: GameGateway, private fb: FormBuilder) {

  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  ngOnInit() {
    this.playerList = [];
    this.createForm();
    this.getPlayers();

    // this.gameForm.get('player1Throw').pipe(takeUntill(this._destroy)).valueChanges.subscribe(x =>{
    //   console.log(x);
    // this.gameForm.get('pgagdsg').validator;
    // this.gameForm.updateValueAndValidity()
    // })
    this.updateValidator();

  }

  createForm() {
    this.gameForm = this.fb.group({
      selectedPlayer1:[null],
      selectedPlayer2: [null],
      player1Throw: [null, [Validators.required]],
      player2Throw: [null, [Validators.required]]
    })
  }

  getValue( name ){
    return this.gameForm.get( name ).value;
  }

  processRankedGame() {
    this.mostRecentOutcome = '';
    this.rankedGameRequest = new PlayGameRequest(this.getValue('selectedPlayer1'), this.getValue('selectedPlayer2'), this.getValue('player1Throw'), this.getValue('player2Throw'));

    this.gameGateway.playGame(this.rankedGameRequest).pipe(takeUntil(this._destroy)).subscribe(gameResult => {
      // this.mostRecentOutcome = gameResult.outcome;
      if (gameResult.outcome == 'P1_WINS') {
        //this.mostRecentOutcome = this.getValue('selectedPlayer1').name + ' Wins';
        this.winningMessage = this.getValue('selectedPlayer1').name + ' Wins';
      } else if (gameResult.outcome == 'P2_WINS') {
        //this.mostRecentOutcome = this.getValue('selectedPlayer2').name + ' Wins';
        this.winningMessage = this.getValue('selectedPlayer2').name + ' Wins';
      } else {
        this.winningMessage = this.getValue('selectedPlayer1').name + ' and ' + this.getValue('selectedPlayer2').name + ' Tie!'
      }
      
      this.mostRecentOutcome = gameResult.outcome;

      //this.mostRecentOutcome = gameResult.outcome;
      if (gameResult.outcome == 'P1_WINS'){
        this.mostRecentOutcome = this.getValue('player1Name')
      } else if (gameResult.outcome == 'P2_WINS'){
        this.mostRecentOutcome = this.playerList[2].name;
      }else{
        this.mostRecentOutcome = gameResult.outcome;
      }
    });
  }

  processPracticeGame() {
    this.mostRecentOutcome = '';

    this.practiceGameRequest = new PlayPracticeGameRequest(this.getValue('player1Throw'), this.getValue('player2Throw'));

    this.gameGateway.playPracticeGame(this.practiceGameRequest).subscribe(gameResult => {
      if(gameResult.outcome == 'P1_WINS') {
        this.winningMessage = 'Player 1 Wins!';
      } else if (gameResult.outcome == 'P2_WINS') {
        this.winningMessage = 'Player 2 Wins!';
      } else {
        this.winningMessage = 'Player 1 and Player 2 Tied!'
      }
    });
  }

  flipToggle() {
    this.isPracticeGame = !this.isPracticeGame;
    this.clear();
    this.updateValidator();
  }

  updateValidator() {
    if (this.isPracticeGame == false) {
      // console.log("Real");
      this.gameForm.get('selectedPlayer1').setValidators([Validators.required]);
      this.gameForm.get('selectedPlayer2').setValidators([Validators.required]);
    }
    else {
      // console.log("Practice");
      this.gameForm.get('selectedPlayer1').clearValidators();
      this.gameForm.get('selectedPlayer1').updateValueAndValidity();
      this.gameForm.get('selectedPlayer2').clearValidators();
      this.gameForm.get('selectedPlayer2').updateValueAndValidity();
    }
    // this.gameForm.updateValueAndValidity();
  }

  getPlayers() {
    this.gameGateway.getPlayers().subscribe(returnedPlayers => {
      for(let i = 0; i < returnedPlayers.length; i++) {
        this.playerList.push(returnedPlayers[i]);
      }
      this.playerList = this.playerList.sort((a,b) => a.name.localeCompare(b.name));
      console.log('got players', this.playerList);
    })
  }

  clear() {
    this.winningMessage = '';
    this.mostRecentOutcome = '';
  }

  validPlayerChoice(): boolean{
    var player1;
    var player2;

    if (this.gameForm.get('selectedPlayer1').value != null && this.gameForm.get('selectedPlayer2').value) {
      player1 = this.gameForm.get('selectedPlayer1').value.name;
      player2 = this.gameForm.get('selectedPlayer2').value.name;
    }

    if (player1 === player2) {
      return false;
    } else{
      return this.gameForm.valid;
    }
    
    
  }

}
