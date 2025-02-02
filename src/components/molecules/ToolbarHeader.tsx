import logo from "../../assets/images/logo.svg";
import ResetModal from "./ResetModal";

interface Props {
  handleReset: () => void;
}

const ToolbarHeader: React.FC<Props> = ({ handleReset }) => {
  return (
    <div className="flex justify-between items-center pb-8 border-b-[2px] border-white-98">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Canvas Editor Logo" />
        <h1 className="text-display text-black-75">CanvasEditor</h1>
      </div>
      <ResetModal handleReset={handleReset} />
    </div>
  );
};

export default ToolbarHeader;
