type Position = { x: number; y: number };

type Size = { width: number; height: number };

type CanvasElementType = "text" | "img";

type ImageEl = {
  id: string;
  src: string;
  position: Position;
  size: Size;
};

type TextEl = {
  id: string;
  text: string;
  position: Position;
  size: Size;
  color: string;
};

type CanvasEl = {
  id: string;
  src: string;
  type: CanvasElementType;
  position: Position;
  size: Size;
  text: string;
  color: string;
};

export type { ImageEl, TextEl, CanvasEl, CanvasElementType };
