import Head from "next/head"

export default function Privacy() {
    return (
        <div>
            <Head>
                <title>ioCloud License</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="../public/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>

            <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
                <div dir='rtl' className="fontFa mt-8 prose prose-slate mx-auto lg:prose-lg">
                    <h1>پروانه و مجوز دسترسی ioCloud</h1>
                    <p>نرم‌افزار آزاد و متن‌باز (به انگلیسی: Free and open source software یا FLOSS, F/OSS, FOSS)، نرم‌افزاری است که به‌منظور تأمین حق کاربران برای مطالعه، تغییر، و بهبود طراحی آن، با دردسترس‌بودن کد مبدأ نرم‌افزار، به‌شکل آزاد پروانه‌دار گشته‌است. </p>
                    <blockquote>
                        <p>با پذیرش پروانه و مجوز دسترسی ioCloud، مسوولیت انطباق این سند و سیاست‌ استفاده از کدهای این پلتفرم در صورتی که خارج از خدمات ابری ioCloud مورد بهره برداری قرار گیرد به‌عهده‌ی شماست</p>
                    </blockquote>
                    <h3>مجوز Apache </h3>
                    <p>استفاده از نرم‌افزار یا انتشار مجدد آن، چه به صورت کدهای منبع و چه به صورت فایل‌های باینری، چه با اعمال تغییرات و چه بدون اعمال تغییرات، با در نظر گرفتن شرایط زیر مجاز است:</p>
                    <p>در هنگام انتشار مجدد نرم‌افزار در قالب کدهای منبع، باید اعلان کپی رایت (که در قسمت بالای پروانه قرار دارد)، دو شرط قید شده در پروانه و همینطور یک گواهی رفع ادعا (که در قسمت پایین پروانه قرار دارد) را به همراه کدهای منبع انتشار داد.</p>
                    <p>در هنگام انتشار مجدد نرم‌افزار به صورت فایل‌های باینری، باید اعلان کپی رایت (که در قسمت بالای پروانه قرار دارد)، دو شرط قید شده در پروانه و همینطور یک گواهی رفع ادعا (که در قسمت پایین پروانه قرار دارد) را مجدداً بازنویسی کرد.</p>
                    <p>از بالا می‌توان این‌گونه برداشت کرد که: </p>
                    <ol>
                        <li>حقوق هیچ‌گاه به اتمام نمی‌رسد:‌ وقتی حقوقی تحت مجوز آپاچی ارائه شود، دیگر نیازی به تکرار مجوز برای آن نیست و همیشه می‌توانید تحت همین مجوز از آن‌ها استفاده کنید.</li>
                        <li> مجوز Apache به شما امکان میده تا آزادانه از هر محصول دارای مجوز Apache استفاده کنید، تغییرش بدید و توزیعش کنید. با این حال، در حین انجام این کار، شما باید از شرایط مجوز Apache پیروی کنید.</li>
                    </ol>

                    <hr />
                </div>
            </div>
        </div>
    )
}
