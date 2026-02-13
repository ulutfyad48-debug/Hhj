/* data.js */
const siteData = {
    name: "Elite Store", // سٹور کا نام
    welcomeTitle: "Choose Your Shopping Mode",
    welcomeDesc: "Select how you would like to explore our premium collection.",
    logo: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png", 
};

/* ================================================
   پروڈکٹس ڈیٹا (Products Data)
   یہاں آپ اپنی مرضی کے جتنے چاہیں لنکس ڈال سکتے ہیں۔
   ہر لنک کا ایک 'name' (جو بٹن پر نظر آئے گا) اور 'url' (ویب سائٹ کا لنک) رکھیں۔
   ================================================
*/
const productsData = [
    {
        id: 1,
        name: "Luxury Matte Lipstick",
        desc: "Long-lasting 12-hour formula with premium finish.",
        price: "850",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        // یہاں آپ جتنے مرضی پلیٹ فارم ایڈ کریں
        links: [
            { platform: "Daraz", url: "https://www.daraz.pk", color: "orange" },
            { platform: "Markaz", url: "https://markaz.app", color: "green" },
            { platform: "Direct Order", url: "https://wa.me/923001234567", color: "blue" } 
        ]
    },
    {
        id: 2,
        name: "Organic Face Wash",
        desc: "100% natural ingredients for glowing skin.",
        price: "450",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        links: [
            { platform: "AliExpress", url: "https://aliexpress.com", color: "red" },
            { platform: "Website Checkout", url: "#", color: "black" }
        ]
    }
];
