import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
import { CanvasEl } from "./types";
import startImageEl from "./assets/images/startImage.png";

export const DEFAULT_TEXT_COLOR = "black-100";
export const DEFAULT_STARTING_POSITION = { x: 280, y: 366 };
export const DEFAULT_TEXT_SIZE = { width: 350, height: 120 };
export const DEFAULT_IMAGE_SIZE = { width: 200, height: 200 };

const createImageElement = (url: string): CanvasEl => ({
  id: uuidv4(),
  type: "img",
  position: DEFAULT_STARTING_POSITION,
  size: DEFAULT_IMAGE_SIZE,
  src: url,
  text: "",
  color: "",
});

const createTextElement = (): CanvasEl => ({
  id: uuidv4(),
  type: "text",
  position: DEFAULT_STARTING_POSITION,
  size: DEFAULT_TEXT_SIZE,
  color: DEFAULT_TEXT_COLOR,
  text: "",
  src: "",
});

const exportToPNG = (containerId: string) => {
  const canvasElement = document.getElementById(containerId);

  if (canvasElement) {
    html2canvas(canvasElement, { width: 1080, height: 1350, scale: 1 }).then(
      (canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "poster.png";
        link.click();
      }
    );
  }
};

const handleBackgroundChange = (
  container: HTMLDivElement,
  background: string | null,
  elements: CanvasEl[]
) => {
  if (background) {
    container.style.backgroundImage = `url(${background})`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
  }
  if (!background && elements.length === 0) {
    container.style.backgroundImage = `url(${startImageEl})`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
  }
  if (!background && elements.length > 0) {
    container.style.backgroundImage = "none";
    container.style.backgroundColor = "#9B9B9B";
    return;
  }
};

export {
  exportToPNG,
  createImageElement,
  createTextElement,
  handleBackgroundChange,
};
