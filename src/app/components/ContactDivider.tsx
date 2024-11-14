import Image from "next/image";
import ContactUs from "./ContactUs";
import ProjectInquiry from "./ProjectInquiry";

const ContactDivider: React.FC = () => {
  return (
    <div className="flex flex-row h-[calc(80vh)] bg-[#d4cab1] mt-40">
      <ContactUs />
      <ProjectInquiry />
    </div>
  );
};
export default ContactDivider;
