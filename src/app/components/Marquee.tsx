const Marquee = () => {
  const sales: string[] = Array(20).fill("sale");
  return (
    <div className="relative flex overflow-x-hidden border-red-600 border-y-8 font-serif my-9">
      <div className=" py-20 animate-marquee whitespace-nowrap ">
        {sales.map((value, index) => (
          <span className="mx-4 text-6xl font-bold">{value}</span>
        ))}
      </div>
      <div className="absolute top-0  py-20 animate-marquee2 whitespace-nowrap">
        {sales.map((value, index) => (
          <span className="mx-4 text-6xl font-bold">{value}</span>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
