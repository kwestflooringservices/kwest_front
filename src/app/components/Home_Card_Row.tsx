import HomeCard from "./Home_Card";

interface props {
  sources: string[];
}
const Home_Card_Row: React.FC<props> = ({ sources }: props) => {
  return (
    <div className="relative flex flex-row justify-center flex-grow overflow-scroll mt-8">
      {sources.map((value, index) => (
        <HomeCard name={value} image={`/${value}.jpeg`} />
      ))}
    </div>
  );
};
export default Home_Card_Row;
