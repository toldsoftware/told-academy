import { UserInput, CanvasAccess } from './canvas-access';

export interface CanvasGame {
    update(forceRedraw: boolean, input?: UserInput): Promise<void>;
}

export function hostGame(host: HTMLDivElement, gameFactory: (access: CanvasAccess) => CanvasGame) {

    let access = new CanvasAccess(host, input => {
        game && game.update(false, input).then();
    }, () => {
        game && game.update(true).then();
    });

    let game = gameFactory(access);
    game.update(true).then();
}