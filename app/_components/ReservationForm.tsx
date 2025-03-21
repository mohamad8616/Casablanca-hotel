"use client";
export default function ReservationForm() {
  <form className="w-full">
    <div>
      <label htmlFor="desc">توضیحات شما</label>
      <input type="text" id="desc" />
    </div>
    <div>
      <label htmlFor="name">نام</label>
      <input type="text" id="name" />
    </div>
    <div>
      <label htmlFor="phoneNumber">شماره تلفن</label>
      <input type="number" id="phoneNumber" />
    </div>
  </form>;
}
