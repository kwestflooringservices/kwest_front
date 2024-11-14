import Image from "next/image";

const Description: React.FC = () => {
  return (
    <div className="relative w-full h-96 mt-40">
      <div className="relative flex items-center justify-center">
        <Image
          alt="Kwest Logo"
          src={"/kwestlogo.jpg"}
          height={105}
          width={105}
          className="mx-auto"
        />
        <span className=" mx-auto text-4xl font-serif">
          SELLING & INSTALLING NEW FLOORS FOR OVER 24 YEARS
        </span>
      </div>
      <div className=" mt-7">
        <p className=" text-pretty mx-10">
          Are you searching for discount flooring for your home in San Diego
          County, Kwest serving homes and businesses in the San Diego area for
          more than 15 years. We offer high quality wholesale floors at the
          lowest guaranteed price, professional installation, if you are
          searching for residential floors for your home, you can find exactly
          what you need at the best price. We put on your hands the best quality
          brands as Shaw , Mohawk and other high quality flooring from leading
          brands. We can meet your needs for every room in your home with a wide
          range of wholesale flooring options, including carpet commercial and
          residential, laminate floors, harwood floors, ceramic tile, vinyl
          floors, vct tile, vinyl planks and more, from many colors to match the
          décor of any home. At kwest we offer fast and reliable professional
          flooring installation. Our team of professional installers has
          extensive knowledge and experience to provide outstanding quality
          service for all your flooring needs. Your trusted flooring experts
          with over 24 years of experience in the industry. Licensed and
          insured, we pride ourselves in delivering unparalleled craftsmanship
          and exceptional service to our clients. Our dedication to quality has
          earned us a reputation as the go-to choice for all your flooring
          needs. Whether you’re looking to enhance your home or commercial space
          we are committed to exceed your expectations. With a wide range of
          flooring options we have options to suit any style and budget.
          Experience peace of mind with Kwest Flooring Services where quality
          meets excellence.
        </p>
      </div>
    </div>
  );
};

export default Description;
