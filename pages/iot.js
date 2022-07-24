import Head from "next/head"

export default function IoT() {
    return (
        <div>
            <Head>
                <title>IoT Service</title>
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
                    <h1>IoT اینترنت اشیاء</h1>
                    <p>اشیاء متصل به اینترنت بر خلاف انسان ها که تنها در مواقع نیاز می بایست به اینترنت متصل شوند همیشه باید به پیغام ها از سمت سرور گوش فرا دهند و به صورت پیوسته پیغام هایی مبنی بر وضعبت خود رد و بدل می کنند.</p>
                    <p>یکی از پرتکل های محبوب در اینترنت اشیا و Pub/Sub Messaging پرتکل MQTT است. این پرتکل از از مدل ستاره ای یعنی بروکر و کلاینت تشکیل یافته است. هر دستگاه اینترنت اشیا یک کلاینت می باشد و پلتفرم به عنوان بروکر شناخته می شود.</p>
                    <hr />
                    <h3>سرویس ioCloud MQTT چه مزیتی دارد؟</h3>
                    <p>سرویس MQTT Messaging با استفاده از سرویس SSO  بسیار راحت و بدون دردسر تسلط بسیار خوبی بر رفتار IoT Devices در اختیار شما قرار می دهد.</p>
                    <p>امکان تعریف سطوح دسترسی بر حسب نام کاربری یا حتی زمان یا Role و ... که به تفصیل در مستندات اشاره شده است امکان کنترل اعضای یک Tenant را فراهم می کند. این موضوع باعث شده است که امنیت و انعطاف پذیری فوق العاده ای با کمک API های مربوطه داشته باشید.</p>
                </div>
            </div>
        </div>
    )
}
