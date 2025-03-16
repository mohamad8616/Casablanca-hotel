import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className=' md:flex flex-col hidden'>
      <div className='flex justify-end space-x-3 items-center text-xs'>
        <p>mohamad.sh.a9036@gmail.com</p>
        <MdEmail className='text-xl' />
      </div>
      <div className='flex justify-end space-x-3'>
        <p>09104008616</p>
        <IoMdPhonePortrait />
      </div>
    </div>
  );
}
