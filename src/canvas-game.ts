import { UserInput, CanvasAccess } from './canvas-access';
import { ProblemHistory } from './subjects/problems';

export interface CanvasGame {
    update(forceRedraw: boolean, input?: UserInput): Promise<void>;
}

export function hostCanvasGame(host: HTMLDivElement, gameFactory: (access: CanvasAccess) => CanvasGame) {

    let access = new CanvasAccess(host, input => {
        game && game.update(false, input).then();
    }, () => {
        game && game.update(true).then();
    });

    let game = gameFactory(access);
    game.update(true).then();
}