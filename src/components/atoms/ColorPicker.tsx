const AVAILABLE_COLORS = ["black-100", "white", "red", "blue", "green"];

const BG_COLOR_MAP = {
  "black-100": "bg-black-100",
  white: "bg-white",
  red: "bg-red",
  blue: "bg-blue",
  green: "bg-green",
};

export const TEXT_COLOR_MAP = {
  "black-100": "text-black-100",
  white: "text-white",
  red: "text-red",
  blue: "text-blue",
  green: "text-green",
};

interface Props {
  setColor: (color: string) => void;
  selectedColor: string;
}

const ColorPicker: React.FC<Props> = ({ setColor, selectedColor }) => {
  return (
    <div className="flex gap-1">
      {AVAILABLE_COLORS.map((color) => (
        <div
          key={color}
          className={`relative w-6 h-6 rounded-full p-2 border-[2px]
            ${color === selectedColor ? "border-white" : "border-transparent"}`}
        >
          <button
            className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full cursor-pointer ${
              BG_COLOR_MAP[color as keyof typeof BG_COLOR_MAP]
            }`}
            onClick={() => setColor(color)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
