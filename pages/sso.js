import Head from "next/head"

export default function IoT() {
    return (
        <div>
            <Head>
                <title>Single Sign On Service</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>

            <div className="bg-gray-50 py-8 flex flex-col center relative overflow-hidden lg:py-12">
                <div dir='rtl' className="fontFa mt-8 prose prose-slate mx-auto lg:prose-lg">
                    <h1>مدیریت سطوح دسترسی یکپارچه SSO</h1>
                    <p>ابزار Single Sign On برای متمرکز کردن دسترسی ها به منابع طراحی شده است. معمولا برای کاربران به خاطر سپردن چندین نام کاربری و رمز عبور برای دسترسی به وب‌سایت‌ها و برنامه‌های مختلفی که از آن ها استفاده می کنند دشوار است. Single Sign On که به اختصار SSO نامیده می شود یک روش احراز هویت است که به کاربران امکان می دهد تا با استفاده از یک مجموعه از اعتبار (credential) به طور ایمن به چندین منبع دسترسی داشته باشند.</p>
                    <p>یکی از مزایای این سرویس این است که چنانچه بخواهید برای استارتاپ خود یک سرویس جدید خلق کنید به راحتی چند کلیک مجوزهای دسترسی کاربران را در سرویس جدید و API های مربوطه برقرار کنید. به طور مثال کاربران اپ شما همان دسترسی ها را در نرم افزار WordPress که جدیدا اضافه نموده اید خواهند داشت و نام کاربری آان ها معتبر خواهد بود.</p>
                    <p>این سرویس معادل سرویس AWS IAM است و همان کاربردها را خواهد داشت. امکانات زیادی برای کنترل رفتار کاربر و نحوه ثبت نام یا کلمه رمز یک بار مصرف یا حتی زمان های دسترسی می توانید بر کاربران اعمال نمایید و حتی جلوی حملات برای نفو‌‌ذ را نیز بگیرید.</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}
