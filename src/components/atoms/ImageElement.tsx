interface Props {
  src: string;
}

const ImageElement: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="img" className="w-full h-full object-cover" />;
};

export default ImageElement;
