import { Platform, setupBrowser } from '@told/platform/lib';

import { randomize } from '../src/randomize';
import { hostCanvasGame } from '../src/canvas-game';
import { ProblemHistory } from '../src/subjects/problems';
import { loadUnixode } from '../src/subjects/unixode-loader';
import { WordToPictureGame, WordProvider } from '../src/games/word-to-picture/word-to-picture-game';

setupBrowser();
let http = Platform.http();

function setup() {
    (async () => {
        let host = document.getElementById('host') as HTMLDivElement;

        let doc = (await http.request('./subjects/Words_UniXode_Kids.txt')).dataRaw;
        let list = loadUnixode(doc);

        // // TODO: Get Problem History for User
        // let problemHistory = new ProblemHistory();

        // Get Word List

        let wordProvider = new SimpleWordProvider();
        wordProvider.words = list.words.map(x => x.english.toLowerCase());

        // TODO: Order Word List (Use Knowldge Tree?)
        wordProvider.words = randomize(wordProvider.words);

        // TEMP Order by length
        wordProvider.words.sort((a, b) => a.length - b.length);
        wordProvider.words = wordProvider.words.filter(x => x.length >= 3);


        hostCanvasGame(host, (access) => new WordToPictureGame(access, wordProvider));

    })().then();
}

export class SimpleWordProvider implements WordProvider {

    words: string[] = 'cat,dog,log,hot,hat,mat,nat'.split(',');
    iWord = -1;

    constructor() {

    }

    getNextWord() {
        this.iWord++;
        if (this.iWord > this.words.length) {
            this.iWord = 0;
        }

        return this.words[this.iWord];
    }

    getChoices(word: string, count: number) {
        return randomize(this.words.filter(x => x !== word)).slice(0, 2);
    }

    answer(word: string, answer: string) {
        return word === answer;
    }
}

setup();
