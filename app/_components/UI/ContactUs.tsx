import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-end space-x-3 text-xs">
        <p>mohamad.sh.a9036@gmail.com</p>
        <MdEmail className="text-xs" />
      </div>
      <div className="flex justify-end space-x-3">
        <p className="text-xs">09104008616</p>
        <IoMdPhonePortrait />
      </div>
    </div>
  );
}
