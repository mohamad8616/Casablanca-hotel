import Image from "next/image";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
import logo from "@/public/logo.png";

export default function Home() {
  return (
    <main className='my-5 w-full flex felx-col items-center justify-center text-slate-800'>
      <section id='hero-section' className='md:grid grid-cols-2 w-10/12'>
        <div className='h-auto p-1'>
          <h1 className='text-2xl text-center'>هتل کازابلانکا</h1>
          <h3 className='text-xl text-center my-3'>مکانی رویایی</h3>
          <p className='tracking-wide text-sm/9'>
            هتل کازابلانکا که با افتخار در سواحل دریای شمال ایستاده است، بهشتی
            آرام و گوهری بی نظیر است که تداعی گر یک فضای سنتی در زمان قدیم است.
            و بهترین امکانات رفاهی و مدرن امروزی در عین سادگی برای شما به ارمغان
            می آورد. این مجموعه چندیدن کابین چوبی لوکس در مکانی شگفت انگیز را
            برای شما عزیزان فراهم کرده است. همچنین دارای پرسنلی با تجربه و مهارت
            برای رفاه هر چه بیشتر شما عزیزان است. زیباترین و فراموش نشدنی ترین
            ویو های جهان را با ما تجربه کنید{" "}
          </p>
        </div>
        <div className='grid grid-cols-2 p-4'>
          <div>
            <Image
              alt='hotel photo'
              src={pic1}
              width={300}
              height={150}
              className='W-20'
            />
          </div>
          <div>
            <Image
              alt='hotel photo'
              src={pic2}
              width={300}
              height={190}
              className=''
            />
          </div>
          <div className='text-end justify-end mr-auto'>
            <Image
              alt='hotel photo'
              src={logo}
              width={260}
              height={150}
              className=''
            />
          </div>
          <div>
            <Image
              alt='hotel photo'
              src={pic3}
              width={300}
              height={150}
              className=''
            />
          </div>
        </div>
      </section>
    </main>
  );
}
