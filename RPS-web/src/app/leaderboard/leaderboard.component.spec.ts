import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { GameGateway } from '../game/game.gateway';
import { StubGameGateway } from '../game/stub.game.gateway';
import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  let stubRpsGateway: StubGameGateway;

  beforeEach(async(() => {
    stubRpsGateway = new StubGameGateway();

    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: GameGateway, useValue: stubRpsGateway }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create leaderboard with data', () => {
    expect(component).toBeTruthy();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log('tableRows: ', tableRows);
    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[1].innerHTML).toBe('100');
    expect(row1.cells[2].innerHTML).toBe('10');
    expect(row1.cells[3].innerHTML).toBe('10');
    expect(row1.cells[4].innerHTML).toBe('0');

    let row2 = tableRows[2];
    expect(row2.cells[1].innerHTML).toBe('70');
    expect(row2.cells[2].innerHTML).toBe('10');
    expect(row2.cells[3].innerHTML).toBe('6');
    expect(row2.cells[4].innerHTML).toBe('2');

    let row3 = tableRows[3];
    expect(row3.cells[1].innerHTML).toBe('40');
    expect(row3.cells[2].innerHTML).toBe('10');
    expect(row3.cells[3].innerHTML).toBe('2');
    expect(row3.cells[4].innerHTML).toBe('4');
    stubRpsGateway.playerStats[0].gamesWon = 11;
    // const player = fixture.nativeElement.querySelector('button');
    // console.log('Button', player);
    // player.click();
    // fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   let tableRows = fixture.nativeElement.querySelectorAll('tr');
    //   let row1 = tableRows[1];
    //   expect(row1.cells[0].innerHTML).toBe('Player 2');
    //   expect(row1.cells[1].innerHTML).toBe('WON');
    //   expect(row1.cells[2].innerHTML).toBe('ROCK');
    //   expect(row1.cells[3].innerHTML).toBe('SCISSORS');

    // });
  });

  it('should refresh leaderboard with data', () => {
    expect(component).toBeTruthy();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    console.log('tableRows: ', tableRows);
    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[1].innerHTML).toBe('100');
    expect(row1.cells[2].innerHTML).toBe('10');
    expect(row1.cells[3].innerHTML).toBe('10');
    expect(row1.cells[4].innerHTML).toBe('0');

    stubRpsGateway.playerStats[0].gamesWon = 11;
    stubRpsGateway.playerStats[0].winPercentage = 95;
    stubRpsGateway.playerStats[0].rockPercent = 80;
    const refresh = fixture.nativeElement.querySelector('button.refresh');
    console.log('Button', refresh);
    refresh.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      let row1 = tableRows[1];
      expect(row1.cells[1].innerHTML).toBe('95');
      expect(row1.cells[3].innerHTML).toBe('11');
      expect(row1.cells[6].innerHTML).toBe('80');

    });
  });

  it('should display throw percentage to a tenth of a percent', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    stubRpsGateway.playerStats[0].winPercentage = 66.66666666666666666666666;
    stubRpsGateway.playerStats[0].rockPercent = 80.33333333333333333333333;
    stubRpsGateway.playerStats[0].paperPercent = 33.33333333333333333333333;
    stubRpsGateway.playerStats[0].scissorsPercent = 50.11111111111111111111111;
    console.log(stubRpsGateway.playerStats[0].rockPercent);

    fixture.nativeElement.querySelector('button.refresh').click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      let row1 = tableRows[1];

      expect(row1.cells[1].innerHTML).toBe('66.67');
      expect(row1.cells[6].innerHTML).toBe('80.33');
      expect(row1.cells[7].innerHTML).toBe('33.33');
      expect(row1.cells[8].innerHTML).toBe('50.11');

    });
  });

  // it("should show players name on detailed page", () => {
  //   let button = fixture.nativeElement.querySelector('#button_2');
  //   console.log(button);
  //   button.click();
        
  //   fixture.whenStable().then(() => {  
  //     fixture.detectChanges();
  //     let title = fixture.nativeElement.querySelector('h2#title');
  //     expect(title.innerHTML).toBe('Player 1')
  //     console.log(title);
      
  //   });
  // });
})
