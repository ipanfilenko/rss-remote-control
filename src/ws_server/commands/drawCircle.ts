import { mouse, straightTo, Button, Point } from '@nut-tree/nut-js';

export const drawCircle = async (commandType: string, args: string[]) => {
    let [ radius = 0 ] = args; 
    const { x, y } = await mouse.getPosition();
    
    radius = Number(radius);
    const step = 0.01;

	for (let i = 0; i <= 2 * Math.PI; i = i + step) {
		const moveX = x - radius * Math.cos(i);
		const moveY = y - radius * Math.sin(i);

		await mouse.move(straightTo(new Point(moveX, moveY)));

        if (i === 0) {
            await mouse.pressButton(Button.LEFT);
        }
	}

	await mouse.releaseButton(Button.LEFT);

    return commandType;
}
