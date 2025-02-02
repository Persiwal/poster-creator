import deleteIcon from "../../assets/icons/delete.svg";

interface Props {
  onElementDelete: () => void;
}

const DeleteElementButton: React.FC<Props> = ({ onElementDelete }) => {
  return (
    <button
      onClick={onElementDelete}
      className="absolute right-[-12px] top-[-12px] p-1 w-6 h-6 rounded-full bg-white cursor-pointer"
    >
      <img
        src={deleteIcon}
        alt="Delete"
        draggable={false}
        className="w-[18px] h-[18px]"
      />
    </button>
  );
};

export default DeleteElementButton;
