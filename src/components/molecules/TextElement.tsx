import ColorPicker from "../atoms/ColorPicker";
import { TextEl } from "../../types";

interface Props {
  id: string;
  color: string;
  text: string;
  onElementUpdate: (id: string, elementData: Partial<TextEl>) => void;
  isEditMode: boolean;
}

const TextElement: React.FC<Props> = ({
  id,
  color,
  text,
  onElementUpdate,
  isEditMode,
}) => {
  if (isEditMode) {
    return (
      <>
        <textarea
          placeholder="Type your text here"
          className={`text-${color} text-display placeholder:text-display py-3 px-6 w-full h-full resize-none text-center overflow:hidden focus:outline-none`}
          value={text}
          onChange={(e) => onElementUpdate(id, { text: e.target.value })}
        />

        <ColorPicker
          selectedColor={color || ""}
          setColor={(color) => onElementUpdate(id, { color })}
        />
      </>
    );
  }

  return (
    <div
      className={`text-${color} text-display py-3 px-6 w-full h-full text-center overflow-hidden`}
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
    >
      {text}
    </div>
  );
};

export default TextElement;
