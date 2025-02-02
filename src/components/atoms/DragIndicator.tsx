import dragIcon from "../../assets/icons/move.svg";

const DragIndicator = () => {
  return (
    <button className="absolute top-[-20px] left-[-20px] p-1 w-10 h-10 rounded-full bg-white cursor-move drag-handle">
      <img src={dragIcon} alt="Drag handle" draggable={false} />
    </button>
  );
};

export default DragIndicator;
