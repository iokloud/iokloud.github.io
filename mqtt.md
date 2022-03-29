### کار با MQTT
یکی از پرتکل های محبوب در اینترنت اشیا و Pub/Sub Messaging پرتکل MQTT است. این پرتکل از از مدل ستاره ای یعنی بروکر و کلاینت تشکیل یافته است. هر دستگاه اینترنت اشیا یک کلاینت می باشد و پلتفرم به عنوان بروکر شناخته می شود. در این ویدیو معماری این پرتکل پرداخته می شود.

<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/3x26G/vt/frame?recom=none" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>


برای تست ارتباط با بروکر کلاینت های متعددی وجود دارد. در این [لیست شگفت انگیز](https://github.com/hobbyquaker/awesome-mqtt) می توانید تمامی مطالب مرتبط با MQTT را به یکجا مطالعه نمایید.
در این ویدیو تفاوت معماری پرتکل های MQTT, HTTP پرداخته می شود.

<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/wyREM/vt/frame?recom=none" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>


یکی از دستورات محبوب در لینوکس برای اتصال به بروکر می توان از mosquitto_sub و mosquitto_pub نام برد.

```bash
mosquitto_sub -h demo.iokloud.ir -p 1883 -t garden/fan -u device_username -P device_password

mosquitto_pub -h demo.iokloud.ir -t garden/fan -m "hello world" -u device_username -P device_password
```
توجه داشته باشید چنانچه در قسمت سرور اجبار به Authorization فعال باشد می بایست حتما topic های برای Publish/Subscribe را در قسمت Authorizationمعرفی و مجوز دسترسی را صادر نمایید و گرنه خطای ارتباط مانع از اتصال خواهد شد.

