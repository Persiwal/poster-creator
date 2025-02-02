import { CanvasElementType } from "../../types";
import { exportToPNG } from "../../utils";
import Button from "../atoms/Button";
import ActionButton from "../molecules/ActionButton";
import ToolbarHeader from "../molecules/ToolbarHeader";

import textIcon from "../../assets/icons/text.svg";
import imageIcon from "../../assets/icons/img.svg";
import bgIcon from "../../assets/icons/background.svg";

interface Props {
  handleElementAdd: (elementType: CanvasElementType, file?: File) => void;
  handleBackgroundChange: (file: File) => void;
  handleReset: () => void;
}

const Toolbar: React.FC<Props> = ({
  handleElementAdd,
  handleBackgroundChange,
  handleReset,
}) => {
  return (
    <div className="flex flex-col w-[759px]">
      <ToolbarHeader handleReset={handleReset} />
      <div className="flex flex-wrap gap-x-[29px] pt-8 pb-[97px] border-b-[2px] border-white-98">
        <div className="w-full px-4 py-6 bg-white-98 rounded-[10px]">
          <h2 className=" font-bold text-black-100">Add content</h2>
        </div>
        <ActionButton
          onClick={() => handleElementAdd("text")}
          icon={<img src={textIcon} className="w-[128px] h-[128px]" />}
          label="Text"
          inputType="text"
        />
        <ActionButton
          onFileChange={(file: File) => handleElementAdd("img", file)}
          icon={<img src={imageIcon} className="w-[128px] h-[128px]" />}
          label="Image"
          inputType="file"
        />
        <ActionButton
          onFileChange={handleBackgroundChange}
          icon={<img src={bgIcon} className="w-[128px] h-[128px]" />}
          label="Background"
          inputType="file"
        />
      </div>
      <div className="ml-auto pt-8">
        <Button onClick={() => exportToPNG("canvas-container")}>
          Export to PNG
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
