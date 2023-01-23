import {
  Button, down, left, mouse, right, up,
} from '@nut-tree/nut-js';

export const drawRectangle = async (commandType: string, args: string[]) => {
  let [width = 0, height = 0] = args;

  width = Number(width);
  height = height > 0 ? Number(height) : width; // width === height for square

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.move(down(height));
  await mouse.move(left(width));
  await mouse.move(up(height));
  await mouse.releaseButton(Button.LEFT);

  return commandType;
};
