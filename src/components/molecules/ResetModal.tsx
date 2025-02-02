import resetIcon from "../../assets/icons/reset.svg";
import { createPortal } from "react-dom";
import closeIcon from "../../assets/icons/close.svg";
import alertIcon from "../../assets/icons/alert.svg";
import Button from "../atoms/Button";
import useModal from "../../hooks/useModal";

interface Props {
  handleReset: () => void;
}

const ResetModal: React.FC<Props> = ({ handleReset }) => {
  const { isOpen, handleOpen, handleClose, modalRef } = useModal();

  const onReset = () => {
    handleReset();
    handleClose();
  };

  return (
    <>
      <button
        className="border-b-[1px] border-[#CB0000] text-[#CB0000] hover:cursor-pointer"
        onClick={handleOpen}
      >
        Reset
        <img src={resetIcon} alt="Reset Icon" className="inline ml-2" />
      </button>
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 flex justify-center bg-black-100/50 items-center z-20">
            <div
              ref={modalRef}
              className="relative w-[643px] rounded-[10px] bg-white py-[48px] rounded flex flex-col items-center"
            >
              <button
                className="absolute top-[32px] right-[32px] cursor-pointer"
                onClick={handleClose}
              >
                <img src={closeIcon} alt="Close modal" />
              </button>
              <img src={alertIcon} alt="" className="w-[290px] h-[290px]" />
              <h2 className="text-display mb-2 uppercase">Warning</h2>
              <p className="mb-[48px] max-w-[387px] text-black-75 text-center">
                You're about to reset whole process. Are you sure you want to do
                it?
              </p>
              <div className="mt-4 flex justify-end gap-8">
                <button className="py-2 cursor-pointer" onClick={handleClose}>
                  Cancel
                </button>
                <Button onClick={onReset}>Reset</Button>
              </div>
            </div>
          </div>,
          document.getElementById("reset-modal")!
        )}
    </>
  );
};

export default ResetModal;
