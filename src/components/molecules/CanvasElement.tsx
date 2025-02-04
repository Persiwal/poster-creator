import { useRef, useState } from "react";
import { DraggableData, Rnd, RndResizeCallback } from "react-rnd";
import { CanvasEl } from "../../types";
import TextElement from "./TextElement";
import { useClickOutside } from "../../hooks/useClickOutside";
import ImageElement from "../atoms/ImageElement";
import DragIndicator from "../atoms/DragIndicator";
import DeleteElementButton from "../atoms/DeleteElementButton";
import ResizeHandler from "../atoms/ResizeHandler";

interface Props {
  id: string;
  type: "text" | "img";
  position: { x: number; y: number };
  size: { width: number; height: number };
  text?: string;
  color?: string;
  src?: string;
  onElementUpdate: (id: string, elementData: Partial<CanvasEl>) => void;
  onElementDelete: (id: string) => void;
}

const CanvasElement: React.FC<Props> = ({
  id,
  type,
  position,
  size,
  text,
  src,
  color,
  onElementUpdate,
  onElementDelete,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [editMode, setEditMode] = useState(true);
  const [showGrids, setShowGrids] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { x, y } = position;
  const { width, height } = size;

  const style: React.CSSProperties = {
    outline: "none",
    border: `2px solid ${
      id && (showGrids || editMode) ? "#7209B7" : "transparent"
    }`,
  };

  const handleElementClick = () => {
    if (!isDragging) {
      setEditMode(true);
    }
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target as Node)
    ) {
      setEditMode(false);
    }
  };

  const onMouseEnter = () => {
    setShowGrids(true);
  };

  const onMouseLeave = () => {
    setShowGrids(false);
  };

  const onDragStop = (d: DraggableData) => {
    setIsDragging(false);
    onElementUpdate(id, { position: { x: d.x, y: d.y } });
  };

  const onResize: RndResizeCallback = (_, __, ref) => {
    onElementUpdate(id, {
      size: {
        width: parseInt(ref.style.width),
        height: parseInt(ref.style.height),
      },
    });
  };

  useClickOutside(elementRef, handleClickOutside);

  return (
    <Rnd
      style={style}
      size={{ width, height }}
      bounds="parent"
      position={{ x, y }}
      onDragStart={() => setIsDragging(true)}
      onDragStop={(_, d) => onDragStop(d)}
      onResizeStop={onResize}
      minWidth={150}
      minHeight={100}
      onClick={handleElementClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      dragHandleClassName="drag-handle"
      enableResizing={editMode ? { bottomRight: true } : false}
      resizeHandleStyles={{
        bottomRight: {
          width: "20px",
          height: "20px",
          cursor: "se-resize",
        },
      }}
    >
      <div ref={elementRef} className="relative w-full h-full">
        {editMode && (
          <>
            <DragIndicator />
            <DeleteElementButton onElementDelete={() => onElementDelete(id)} />
            <ResizeHandler />
          </>
        )}
        {type === "text" && (
          <TextElement
            id={id}
            color={color || ""}
            text={text || ""}
            onElementUpdate={onElementUpdate}
            isEditMode={editMode}
          />
        )}
        {type === "img" && <ImageElement src={src || ""} />}
      </div>
    </Rnd>
  );
};

export default CanvasElement;
