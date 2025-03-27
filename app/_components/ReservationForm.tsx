"use client";
const inputClass =
  "rounded-full border-3 border-stone-700/50 bg-stone-100 px-3 py-1 ";
export default function ReservationForm() {
  return (
    <form className="w-full space-y-6 bg-stone-50 p-2">
      <div className="flex justify-between">
        <label htmlFor="name">نام و نام خانوادگی</label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputClass}
          placeholder="نام و نام خانوادگی"
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="phoneNumber">شماره تلفن</label>
        <input
          type="number"
          id="phoneNumber"
          className={inputClass}
          placeholder="شمار همراه"
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="numGuests">تعداد مهمان</label>
        <input
          type="number"
          id="numGuests"
          name="numGuests"
          className={inputClass}
          placeholder="تعداد مهمانان"
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="numDates">چند روز رزرو میکنید</label>
        <input
          type="number"
          id="numDates"
          className={inputClass}
          placeholder="چند روز رزرو می کنید؟"
        />
      </div>

      {/* <div>
        <label htmlFor="phoneNumber"></label>
        <input type="number" id="phoneNumber" className="bg-stone-100" />
      </div> */}
    </form>
  );
}
