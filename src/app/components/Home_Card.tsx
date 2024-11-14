import Image from "next/image";
interface props {
  image: string;
  name: string;
}
const HomeCard: React.FC<props> = ({ image, name }: props) => {
  return (
    <div className="relative flex flex-col w-4/12 h-96 mx-5 text-center pt-8">
      <span className="relative text-4xl font-semibold font-serif mb-9">
        {name}
      </span>
      <div className="relative flex-grow">
        <Image src={image} alt={name} fill className="relative" />
      </div>
    </div>
  );
};
export default HomeCard;
