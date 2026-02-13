/* ============================================================
   MASTER CONTROL DATA
   Change all links, text, and products from here.
   ============================================================ */

const siteConfig = {
    brandName: "Elite Brands",
    brandLogo: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png", // اپنی لوگو کا لنک یہاں ڈالیں
    
    // وہ مین ویب سائٹ جو آپ پہلے بٹن پر دکھانا چاہتے ہیں
    mainSiteUrl: "https://www.wikipedia.org", // اپنی اصل شاپنگ ویب سائٹ کا لنک یہاں دیں
    
    helpImage: "https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148889374.jpg", // ہیلپ سینٹر کی تصویر
    helpText: "Need Assistance? Watch our tutorial or contact support."
};

const products = [
    {
        id: 1,
        title: "Luxury Matte Lipstick",
        category: "Cosmetics", // کیٹیگری یہاں لکھیں
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        // یہاں پلیٹ فارم کے لنکس ڈالیں۔ اگر لنک نہیں ہے تو "" (خالی) چھوڑ دیں۔
        platforms: {
            daraz: "https://www.daraz.pk", // لنک موجود ہے (Open ہوگا)
            markaz: "",                    // لنک نہیں ہے (Locked ہوگا)
            amazon: "https://www.amazon.com", 
            shopify: "" 
        }
    },
    {
        id: 2,
        title: "Organic Face Serum",
        category: "Skin Care",
        price: "$40.00",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        platforms: {
            daraz: "",   // Locked
            markaz: "https://markaz.app", // Open
            amazon: "",
            shopify: "https://shopify.com"
        }
    }
    // مزید پروڈکٹس اسی طرح کاپی پیسٹ کریں
];
