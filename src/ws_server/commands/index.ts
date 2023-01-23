import { getMousePosition } from './getMousePosition';
import { mouseMove } from './mouseMove';

const commands: Record<string, (args: number) => Promise<string | void>> = {
    'mouse_position': getMousePosition,
    'mouse_up': (args) => mouseMove('mouse_up', args),
    'mouse_down': (args) => mouseMove('mouse_down', args),
    'mouse_left': (args) => mouseMove('mouse_left', args),
    'mouse_right': (args) => mouseMove('mouse_right', args),
}

export const runCommands = async (message: string) => {
    const [command = '', args = 0] = message.split(' ');

    if (!commands[command]) {
        console.error(`Command doesn't exist`);
        return;
    }
    console.log('commands....', command);
    return await commands[command](+args);
}