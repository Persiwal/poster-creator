import { useState } from "react";
import Canvas from "./components/organisms/Canvas";
import Toolbar from "./components/organisms/Toolbar";
import type { CanvasEl, CanvasElementType } from "./types";
import { createImageElement, createTextElement } from "./utils";

function App() {
  const [background, setBackground] = useState<string | null>(null);
  const [elements, setElements] = useState<CanvasEl[]>([]);

  const handleBackgroundChange = (file: File) => {
    const url = URL.createObjectURL(file);
    setBackground(url);
  };

  const handleAddElement = (type: CanvasElementType, file?: File) => {
    if (type === "img" && file) {
      const url = URL.createObjectURL(file);
      setElements([...elements, createImageElement(url)]);
    } else if (type === "text") {
      setElements([...elements, createTextElement()]);
    }
  };

  const handleUpdateCanvas = (updatedElements: CanvasEl[]) => {
    setElements(updatedElements);
  };

  const handleResetCanvas = () => {
    setElements([]);
    setBackground(null);
  };

  return (
    <div className="m-auto flex justify-center flex-wrap gap-6 py-[66px]">
      <Canvas
        elements={elements}
        background={background}
        onCanvasUpdate={handleUpdateCanvas}
      />
      <Toolbar
        handleBackgroundChange={handleBackgroundChange}
        handleElementAdd={handleAddElement}
        handleReset={handleResetCanvas}
      />
    </div>
  );
}

export default App;
