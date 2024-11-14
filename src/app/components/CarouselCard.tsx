import Image from "next/image";

interface Props {
  name: string;
  desc: string;
}
const CarouselCard: React.FC<Props> = ({ name, desc }: Props) => {
  return (
    <div className="carousel-item w-1/3 mx-1 flex-col">
      <div className="relative w-full h-1/2">
        <Image alt={name} src={`/${name}.jpeg`} fill />
      </div>
      <div className="relative">
        <span className="text-3xl font-serif mt-4">{name.toUpperCase()}</span>
        <p className=" px-5 pt-5 text-lg">{desc}</p>
      </div>
    </div>
  );
};
export default CarouselCard;
