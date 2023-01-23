import { mouse, Point } from '@nut-tree/nut-js';

const getNewPositionForMouse = async (direction: string, distance: number) => {
    const currentPosition = await mouse.getPosition();

    return {
        'mouse_up': [new Point(currentPosition.x, currentPosition.y - distance)],
        'mouse_down': [new Point(currentPosition.x, currentPosition.y + distance)],
        'mouse_left': [new Point(currentPosition.x - distance, currentPosition.y)],
        'mouse_right': [new Point(currentPosition.x + distance, currentPosition.y)],
    }[direction]!
}

export const mouseMove = async (direction: string, distance: number) => {
    await mouse.move(getNewPositionForMouse(direction, distance));

    return direction;
}
