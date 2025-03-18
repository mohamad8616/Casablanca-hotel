import { GiStarsStack } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdRoomService } from "react-icons/md";
export default function HotelStatus() {
  return (
    <section className="mt-10 w-full grid-cols-2 space-y-10 gap-y-8 bg-slate-50 py-10 sm:grid">
      <div className="text-center">
        <span className="flex items-center justify-center text-5xl text-amber-400">
          <GiStarsStack />
        </span>
        <h2 className="my-4 font-semibold">گارانتی بهترین نرخ</h2>
        <p className="text-slate-600">بهترین نرخ برای رزرو آنلاین</p>
      </div>
      <div className="text-center">
        <span className="flex items-center justify-center text-5xl text-amber-400">
          <FaWifi />
        </span>
        <h2 className="my-4 font-semibold">اینترنت بی سیم</h2>
        <p className="text-slate-600"> اینترنت رایگان در تمام روز</p>
      </div>
      <div className="text-center">
        <span className="flex items-center justify-center text-5xl text-amber-400">
          <RiCustomerService2Fill />
        </span>
        <h2 className="my-4 font-semibold">رزرواسیون شبانه روزی</h2>
        <p className="text-slate-600">
          در هر زمان از روز در به روی مسافان عزیز باز است
        </p>
      </div>
      <div className="text-center">
        <span className="flex items-center justify-center text-5xl text-amber-400">
          <MdRoomService />
        </span>
        <h2 className="my-4 font-semibold">روم سرویس</h2>
        <p className="text-slate-600">ارایه انواع خدمات در اتاق شما</p>
      </div>
    </section>
  );
}
