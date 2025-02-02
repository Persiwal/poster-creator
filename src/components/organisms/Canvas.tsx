import { useEffect, useRef } from "react";
import { CanvasEl } from "../../types";

import CanvasElement from "../molecules/CanvasElement";
import { handleBackgroundChange } from "../../utils";



interface Props {
  elements: CanvasEl[];
  onCanvasUpdate: (elements: CanvasEl[]) => void;
  background: string | null;
}

const Canvas: React.FC<Props> = ({ elements, background, onCanvasUpdate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      handleBackgroundChange(container, background, elements);
    }
  }, [background, elements]);

  const handleElementUpdate = (id: string, elementData: Partial<CanvasEl>) => {
    const updatedElements = elements.map((el) =>
      el.id === id ? { ...el, ...elementData } : el
    );
    onCanvasUpdate(updatedElements);
  };

  const handleElementDelete = (id: string) => {
    const updatedElements = elements.filter((el) => el.id !== id);
    onCanvasUpdate(updatedElements);
  };

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="relative w-[759px] h-[948px]"
    >
      {elements.map((el, index) => {
        return (
          <CanvasElement
            type={el.type}
            key={index}
            id={el.id}
            text={el.text}
            color={el.color}
            position={el.position}
            size={el.size}
            src={el.src}
            onElementUpdate={handleElementUpdate}
            onElementDelete={handleElementDelete}
          />
        );
      })}
    </div>
  );
};

export default Canvas;
