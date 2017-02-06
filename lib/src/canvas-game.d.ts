import { UserInput, CanvasAccess } from './canvas-access';
export interface CanvasGame {
    update(forceRedraw: boolean, input?: UserInput): Promise<void>;
}
export declare function hostCanvasGame(host: HTMLDivElement, gameFactory: (access: CanvasAccess) => CanvasGame): void;
