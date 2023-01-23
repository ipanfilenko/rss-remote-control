import { getMousePosition } from './getMousePosition';
import { mouseMove } from './mouseMove';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';

const commands: Record<string, (args: string[]) => Promise<string | void>> = {
    'mouse_position': getMousePosition,
    'mouse_up': (args) => mouseMove('mouse_up', args),
    'mouse_down': (args) => mouseMove('mouse_down', args),
    'mouse_left': (args) => mouseMove('mouse_left', args),
    'mouse_right': (args) => mouseMove('mouse_right', args),
    'draw_circle': (args) => drawCircle('draw_circle', args),
    'draw_rectangle': (args) => drawRectangle('draw_rectangle', args),
    'draw_square': (args) => drawRectangle('draw_square', args),
}

export const runCommands = async (message: string) => {
    const [command = '', ...args] = message.split(' ');

    if (!commands[command]) {
        console.error(`Command doesn't exist`);
        return;
    }

    return await commands[command](args);
}