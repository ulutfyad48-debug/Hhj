/* data.js - مکمل کنٹرول */
const siteConfig = {
    brandName: "Elite Brands Pakistan",
    brandLogo: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png", // اپنا لوگو یہاں لگائیں
    mainSiteUrl: "https://your-main-store.com", // پہلے بٹن کے لیے لنک
    helpContact: "+923001234567" // واٹس ایپ نمبر
};

const products = [
    {
        id: 1,
        title: "Luxury Matte Lipstick",
        category: "Cosmetics",
        price: "1,250", // اب روپے میں
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        // یہاں آپ جتنے چاہیں پلیٹ فارم شامل کریں
        platforms: [
            { name: "Daraz", url: "https://daraz.pk/product1" },
            { name: "Markaz", url: "https://markaz.app/p1" },
            { name: "WhatsApp", url: "https://wa.me/923001234567" }
        ]
    },
    {
        id: 2,
        title: "Anti-Aging Serum",
        category: "Skin Care",
        price: "2,500",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        platforms: [
            { name: "Website Store", url: "https://mysite.com/order" },
            { name: "AliExpress", url: "https://aliexpress.com" }
        ]
    }
];
