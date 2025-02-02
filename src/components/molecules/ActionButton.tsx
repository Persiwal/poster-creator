import { useRef } from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  inputType: "file" | "text";
  onClick?: () => void;
  onFileChange?: (file: File) => void;
}

const ActionButton: React.FC<Props> = ({
  icon,
  onClick,
  label,
  inputType,
  onFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputType === "file") {
      fileInputRef.current?.click();
    } else {
      onClick?.();
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputType === "file") {
      if (event?.target.files && event.target.files.length > 0) {
        onFileChange?.(event.target.files[0]);
      }
    }
  };

  return (
    <div>
      {inputType === "file" && (
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleOnChange}
          className="hidden"
        />
      )}
      <button
        className="bg-white-97 pt-[64px] pb-3 mt-8 w-[365px] h-[256px] rounded-[10px] cursor-pointer hover:bg-black-25 transition focus:border-[4px] focus:border-primary-50 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={handleOnClick}
      >
        <div className="flex items-center flex-col gap-[25px]">
          {icon}
          {label}
        </div>
      </button>
    </div>
  );
};

export default ActionButton;
