package com.rps.core;

import static com.rps.core.Outcome.*;
import static com.rps.core.Throw.*;

public class RPS {

    public static Outcome play(Throw p1, Throw p2) {

        if(p1 == p2) {
            return TIE;
        }

<<<<<<< HEAD
        if(     (p1 == LIZARD && (p2 == ROCK || p2 == SCISSORS)) ||
                (p1 == PAPER && (p2 == SCISSORS || p2 == LIZARD)) ||
=======
        if ((p1 == PAPER && (p2 == SCISSORS || p2 == LIZARD)) ||
>>>>>>> bc4f2560e52a4f9aa8c0ad2bd00477017e185fca
                (p1 == ROCK && (p2 == PAPER || p2 == SPOCK)) ||
                (p1 == SCISSORS && (p2 == ROCK || p2 == SPOCK)) ||
                (p1 == SPOCK && (p2 == PAPER || p2 == LIZARD)))
        {
            return P2_WINS;
        }

        return P1_WINS;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> bc4f2560e52a4f9aa8c0ad2bd00477017e185fca
