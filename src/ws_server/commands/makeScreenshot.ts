import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const makeScreenshot = async () => {
  const screenshotSize = 500;
  const { x, y } = await mouse.getPosition();

  const screenshotRegion = new Region(x, y, screenshotSize, screenshotSize);

  const rawScreenshot = await screen.grabRegion(screenshotRegion);
  const rawScreenshotInRGB = await rawScreenshot.toRGB();

  const image = new Jimp({ ...rawScreenshotInRGB });
  const imageBase64 = await image.getBase64Async(Jimp.MIME_PNG);
  const screenshot = imageBase64.toString().replace('data:image/png;base64,', '');

  return `prnt_scrn ${screenshot}`;
};
