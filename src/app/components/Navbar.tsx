import Image from "next/image";
const Navbar: React.FC = () => {
  const width: number = 50;
  const height: number = 50;
  return (
    <nav className="flex flex-row sticky top-0 shadow-md bg-white z-50">
      <a className=" bg-red-700 ml-40" href="#">
        <Image src="/KwestIcon.jpeg" width={300} height={100} alt="facebook" />
      </a>
      <a
        href="https://www.facebook.com/kwestflooringservices/"
        className="pt-3 rounded-full ml-auto mr-3"
      >
        <Image
          src="/FacebookIcon.png"
          width={width}
          height={height}
          alt="facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/kwestflooring/"
        className="pt-3 rounded-full mr-3"
      >
        <Image
          src="/InstagramIcon.png"
          width={width}
          height={height}
          alt="instagram"
        />
      </a>
      <a
        href="https://www.yelp.com/biz/kwest-flooring-services-san-diego-2"
        className="pt-3 rounded-full mr-3"
      >
        <Image src="/YelpIcon.png" width={width} height={height} alt="yelp" />
      </a>
      <a
        href="mailto:kwestflooringservices@gmail.com"
        className="pt-3 rounded-full mr-56"
      >
        <Image src="/MailIcon.png" width={width} height={height} alt="mail" />
      </a>
    </nav>
  );
};
export default Navbar;
