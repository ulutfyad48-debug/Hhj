/* data.js - تمام ڈیٹا اور سیٹنگز یہاں ہیں */

const siteConfig = {
    brandName: "SSelix",
    brandLogo: "https://lh3.googleusercontent.com/d/1AYBfk-gmFobSzNUtiUSBVEcOdGGoEiii", // یہاں اپنا لوگو لنک لگائیں
    
    // وہ لنک جو ویب سائٹ کے اندر ہی کھلے گا (iframe میں)
    directShopUrl: "https://digitalsiteshub.github.io/", 
    
    // Developer Link
    developerUrl: "https://digitalsiteshub.github.io/",
    
    // ہیلپ واٹس ایپ نمبر
    whatsappNumber: "+923102890002",

    // حدیث مبارکہ (Urdu & English)
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔ (ترمذی: 1209)",
    hadithEnglish: "\"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.\" (Tirmidhi)"
};

// پروڈکٹس کی لسٹ (کیٹلاگ کے لیے)
const products = [
    {
        id: 1,
        title: "Premium Leather Wallet",
        category: "Accessories",
        price: "1,500",
        description: "اصلی چمڑے سے بنا پرس، کارڈز اور کیش کے لیے بہترین۔",
        image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=500",
        links: [
            { name: "Daraz", url: "https://daraz.pk", icon: "bi-bag" },
            { name: "WhatsApp Order", url: "https://wa.me/923001234567", icon: "bi-whatsapp" }
        ]
    },
    {
        id: 2,
        title: "Luxury Wrist Watch",
        category: "Watches",
        price: "3,200",
        description: "واٹر پروف اور سٹینلیس سٹیل، ایک سال کی وارنٹی کے ساتھ۔",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
        links: [
            { name: "Markaz", url: "https://markaz.app", icon: "bi-cart" },
            { name: "WhatsApp Order", url: "https://wa.me/923001234567", icon: "bi-whatsapp" }
        ]
    },
    {
        id: 3,
        title: "Wireless Earbuds Pro",
        category: "Electronics",
        price: "2,800",
        description: "نوائس کینسلیشن اور بہترین بیٹری ٹائمنگ۔",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        links: [
            { name: "Website", url: "#", icon: "bi-globe" }
        ]
    }
];
