package com.rps.core;

import org.junit.Test;
import org.junit.Assert;

import static com.rps.core.Outcome.*;
import static com.rps.core.Throw.*;

public class RPSTest {

    @Test
    public void player1Wins(){
        Assert.assertEquals(P1_WINS, RPS.play(ROCK, SCISSORS));
        Assert.assertEquals(P1_WINS, RPS.play(PAPER, ROCK));
        Assert.assertEquals(P1_WINS, RPS.play(SCISSORS, PAPER));
        Assert.assertEquals(P1_WINS, RPS.play(ROCK, LIZARD));
        Assert.assertEquals(P1_WINS, RPS.play(PAPER, SPOCK));
        Assert.assertEquals(P1_WINS, RPS.play(SCISSORS, LIZARD));
        Assert.assertEquals(P1_WINS, RPS.play(SPOCK, ROCK));
        Assert.assertEquals(P1_WINS, RPS.play(SPOCK, SCISSORS));
    }

    @Test
    public void player2Wins(){
        Assert.assertEquals(P2_WINS, RPS.play(ROCK, PAPER));
        Assert.assertEquals(P2_WINS, RPS.play(PAPER, SCISSORS));
        Assert.assertEquals(P2_WINS, RPS.play(SCISSORS, ROCK));
        Assert.assertEquals(P2_WINS, RPS.play(ROCK, SPOCK));
        Assert.assertEquals(P2_WINS, RPS.play(PAPER, LIZARD));
        Assert.assertEquals(P2_WINS, RPS.play(SCISSORS, SPOCK));
        Assert.assertEquals(P2_WINS, RPS.play(SPOCK, PAPER));
        Assert.assertEquals(P2_WINS, RPS.play(SPOCK, LIZARD));
    }

    @Test
    public void Tie(){
        Assert.assertEquals(TIE, RPS.play(SCISSORS, SCISSORS));
        Assert.assertEquals(TIE, RPS.play(PAPER, PAPER));
        Assert.assertEquals(TIE, RPS.play(ROCK, ROCK));
        Assert.assertEquals(TIE, RPS.play(LIZARD,LIZARD));
        Assert.assertEquals(TIE, RPS.play(SPOCK,SPOCK));
    }

    /*@Test
    public void player1Rock_player2Paper_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(ROCK, PAPER));
    }

    @Test
    public void player1Rock_player2Scissors_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(ROCK, SCISSORS));
    }

    @Test
    public void player1Paper_player2Rock_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(PAPER, ROCK));
    }

    @Test
    public void player1Paper_player2Scissors_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(PAPER, SCISSORS));
    }

    @Test
    public void player1Scissors_player2Paper_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(SCISSORS, PAPER));
    }

    @Test
    public void player1Scissors_player2Rock_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(SCISSORS, ROCK));
    }

    @Test
    public void player1Rock_player2Rock_tie() {
        Assert.assertEquals(TIE, RPS.play(ROCK, ROCK));
    }

    @Test
    public void player1Paper_player2Paper_tie() {
        Assert.assertEquals(TIE, RPS.play(PAPER, PAPER));
    }

    @Test
    public void player1Scissors_player2Scissors_tie() {
        Assert.assertEquals(TIE, RPS.play(SCISSORS, SCISSORS));
    }

    @Test
    public void player1Rock_player2Spock_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(ROCK, SPOCK));
    }

    @Test
    public void player1Rock_player2Lizard_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(ROCK, LIZARD));
    }

    @Test
    public void player1Paper_player2Spock_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(PAPER, SPOCK));
    }

    @Test
    public void player1Paper_player2Lizard_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(PAPER, LIZARD));
    }

    @Test
    public void player1Scissors_player2Spock_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(SCISSORS, SPOCK));
    }

    @Test
    public void player1Scissors_player2Lizard_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(SCISSORS, LIZARD));
    }

    @Test
    public void player1Spock_player2Rock_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(SPOCK, ROCK));
    }

    @Test
    public void player1Spock_player2Paper_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(SPOCK, PAPER));
    }

    @Test
    public void player1Spock_player2Scissors_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(SPOCK, SCISSORS));
    }

    @Test
    public void player1Spock_player2Lizard_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(SPOCK, LIZARD));
    }*/
}
