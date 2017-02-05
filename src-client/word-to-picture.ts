import { hostGame } from '../src/canvas-game';
import { Game } from '../src/games/word-to-picture/game';

function setup() {
    let host = document.getElementById('host') as HTMLDivElement;
    hostGame(host, access => new Game(access));
}

setup();
