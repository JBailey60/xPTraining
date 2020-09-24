import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameGateway } from '../game/game.gateway';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [ RouterTestingModule ],
      providers: [ {provide: GameGateway} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should show players name on detailed page", () => {  
  //     let title = fixture.nativeElement.querySelector('h2#title');
  //     expect(title.innerHTML).toBe('Player 1')
  //     console.log(title);
  // });

  // it("should show color coded game results", () => {

  //   let gameRecords = component.gameRecords$;

  //   expect(fixture.nativeElement.querySelector('#gameResultTag').color).toBe('');

  // });

});
