package com.rps.core;

import org.junit.Assert;
import org.junit.Test;

import static com.rps.core.Outcome.*;
import static com.rps.core.Throw.*;

public class RPSTest {

    @Test
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
    public void player1Spock_player2Spock_tie() {
        Assert.assertEquals(TIE, RPS.play(SPOCK, SPOCK));
    }

    @Test
    public void player1Lizard_player2Lizard_tie() {
        Assert.assertEquals(TIE, RPS.play(LIZARD, LIZARD));
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
    }

    @Test
    public void player1Lizard_player2Rock_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(LIZARD, ROCK));
    }

    @Test
    public void player1Lizard_player2Paper_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(LIZARD, PAPER));
    }

    @Test
    public void player1Lizard_player2Scissors_player2Wins() {
        Assert.assertEquals(P2_WINS, RPS.play(LIZARD, SCISSORS));
    }

    @Test
    public void player1Lizard_player2Spock_player1Wins() {
        Assert.assertEquals(P1_WINS, RPS.play(LIZARD, SPOCK));
    }

}