"use client";
import { format } from "date-fns-jalali";
import { updateBooking } from "../../_lib/actions";
import { Reservation } from "../../_lib/dataType";
import { useState, useEffect, useTransition } from "react";
import { MdEditCalendar } from "react-icons/md";
import Modal from "./Modal";
import DateSelector from "../DateSelector";
import { useReservation } from "../../_context/ReservationContext";
import { ScaleLoader } from "react-spinners";

export default function EditBookingButton({
  booking,
  maxCapacity,
}: {
  booking: Reservation;
  maxCapacity: number;
}) {
  const { range } = useReservation();
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [editData, setFormData] = useState({
    startDate: range[0] || booking.startDate,
    endDate: range[1] || booking.endDate,
    numGuests: booking.numGuests || "",
    hasBreakfast: booking.hasBreakfast || false,
    isPaid: booking.isPaid || false,
    status: booking.status || "تایید نشده",
    observations: booking.observations,
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Here you would typically send the updated data to your API
  //   console.log("Updated booking data:", editData);
  // };
  // await updateBooking(editData);

  // Close the modal after submission
  // setShowModal(false);
  // }

  const bookingData = {
    startDate: range[0],
    endDate: range[1],
    bookingId: booking.id,
    cabinId: booking.cabinId,
    numNights: booking.numNights,
  };
  const [isPending, startTransition] = useTransition();
  const updateBookingWithData = updateBooking.bind(null, bookingData);
  const handleSubmit = async (formData: FormData) => {
    startTransition(() => {
      updateBookingWithData(formData);
      setShowModal(false);
    });
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="h-full w-16 cursor-pointer border-none bg-yellow-500 px-1.5 py-0.5 text-sm text-slate-700"
      >
        ویرایش
      </button>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-20 flex items-center justify-center bg-slate-800/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-xl font-bold">ویرایش رزرو</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-4xl text-red-600"
              >
                &times;
              </button>
            </div>

            <form action={handleSubmit} className="mt-6 space-y-4">
              {showCalendar && (
                <Modal setShowCalendar={setShowCalendar}>
                  <DateSelector />
                  <span
                    onClick={() => setShowCalendar(false)}
                    className="rounded-md border-1 border-stone-800 px-2 py-1 text-sm text-stone-800 duration-200 hover:border-stone-600 hover:text-stone-600"
                  >
                    تایید و خروج &rarr;
                  </span>
                </Modal>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    تاریخ شروع
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowCalendar(true)}
                    className="mt-3 flex cursor-pointer items-center justify-between gap-2 rounded-sm border-2 border-stone-500 px-1 py-0.5 text-sm"
                  >
                    <span>
                      <MdEditCalendar />
                    </span>
                    <span>
                      {" "}
                      {range[0]
                        ? format(range[0], "yyyy/MM/dd")
                        : format(booking.startDate, "yyyy/MM/dd")}
                    </span>
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    تاریخ پایان
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowCalendar(true)}
                    className="mt-3 flex cursor-pointer items-center justify-between gap-2 rounded-sm border-2 border-stone-500 px-1 py-0.5 text-sm"
                  >
                    <span>
                      <MdEditCalendar />
                    </span>
                    <span>
                      {" "}
                      {range[1]
                        ? format(range[1], "yyyy/MM/dd")
                        : format(booking.endDate, "yyyy/MM/dd")}{" "}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  تعداد مهمان
                </label>
                <select
                  name="numGuests"
                  value={editData.numGuests}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none"
                >
                  {Array.from({ length: maxCapacity }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  وضعیت
                </label>
                <select
                  name="status"
                  disabled
                  value={editData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="تایید نشده">تایید نشده</option>
                  <option value="تایید شده">تایید شده </option>
                  <option value="ورود">ورود</option>
                  <option value="خروج">خروج</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  توضیحات
                </label>
                <textarea
                  name="observations"
                  value={editData.observations}
                  onChange={(e) =>
                    setFormData((editData) => ({
                      ...editData,
                      observations: e.target.value,
                    }))
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none"
                  rows={3}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasBreakfast"
                  checked={editData.hasBreakfast}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <label className="mr-2 block text-sm text-gray-700">
                  صبحانه
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isPaid"
                  checked={editData.isPaid}
                  onChange={handleChange}
                  disabled
                  className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <label className="mr-2 block text-sm text-gray-700">
                  پرداخت شده
                </label>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-3 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  // disabled={!range[0] || !range[1] ||}
                  className="cursor-pointer rounded-md border border-transparent bg-amber-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none disabled:cursor-default disabled:bg-stone-400"
                >
                  {isPending ? (
                    <ScaleLoader
                      height={15}
                      width={3}
                      color="#000"
                      speedMultiplier={1}
                      className="font-bold"
                    />
                  ) : (
                    "ذخیره تغییرات"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
