import Head from 'next/head'
import Image from 'next/image'
import pic2 from '/public/office-long-2.png'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Cloud I/O streaming platform" />
        <link rel="icon" href="/iocloud-logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ff0000" />
      </Head>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
            <p dir='rtl' className="fontFa mb-4">گروه ioCloud از گروهی از برنامه نویسان معتقد به مبانی Opensource تشکیل شده است. تمامی بخش های مختلف سرویس های ارایه شده از ابزارهای اپن سورس استفاده شده است. کدهای اپن سورس به امنیت خاطر شما کمک می کند. شما می توانید تمام قسمت های کدها را وارسی کنید و ببینید اطلاعات شما چگونه انتقال یا نگهداری می شود. یا هر زمان که صلاح دانستید مسیر خود را با کدهای موجود از خدمات ما جدا می کنید و سرور مخصوص خود را راه اندازی می کنید.</p>
            <p dir='rtl' className="fontFa mb-4"> ما هر روز در حال توسعه و به روز رسانی کدها هستیم تا مطمٔن شویم همه چیز درست کار می کند و ابزارهای جدید را به خدمات خود اضافه می کنیم. از گیت هاب پروژه می توانید ما را دنبال کنید.</p>
            <p dir='rtl' className="fontFa mb-4">برای مشاوره در مورد راه اندازی پلتفرم Mobile یا IoT یا انجام تست های مورد نیاز بر روی پلتفرم با ما تماس بگیرید.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image class="mt-4 w-full lg:mt-10 rounded-lg float-right"
              src={pic2}
              alt="office content 1"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      </section>
    </div>
  )
}
