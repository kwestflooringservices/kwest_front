interface props {
  text: string;
}
const Button = ({ text }: props) => {
  return (
    <div className="flex justify-center mb-20 text-white">
      <button className=" bg-black rounded-full w-1/2 h-16 btn-sweep">
        {text}
      </button>
    </div>
  );
};
export default Button;
