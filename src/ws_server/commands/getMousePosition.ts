import { mouse } from '@nut-tree/nut-js';

export const getMousePosition = async () => {
    const { x, y } = await mouse.getPosition();
    return `mouse_position ${x},${y}`;
}
