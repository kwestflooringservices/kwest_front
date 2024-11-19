import Image from "next/image";
import Link from "next/link";
interface props {
  image: string;
  name: string;
}
const HomeCard: React.FC<props> = ({ image, name }: props) => {
  return (
    <Link
      href="/test"
      className="relative flex flex-col w-1/3 h-[calc(50vh)] mx-5 text-center pt-8 shadow-lg shadow-slate-950"
    >
      <span className="relative text-4xl font-semibold font-serif mb-9">
        {name}
      </span>
      <div className="relative h-full w-full">
        <Image src={image} alt={name} fill />
      </div>
    </Link>
  );
};
export default HomeCard;
