import { mouse } from '@nut-tree/nut-js';

export const drawCircle = async (commandType: string, args: string[]) => {
    const [ radius ] = args; 
    const { x, y } = await mouse.getPosition();
    console.log('Circle', x, y, radius);
    return commandType;
}
