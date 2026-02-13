data.js - Data & Configuration */

const siteConfig = {
    brandName: "Elite Brands Pakistan",
    brandLogo: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png",
    mainSiteUrl: "https://digitalsiteshub.github.io/",
    helpContact: "+923001234567", // WhatsApp Number
   
    // Developer Info
    devName: "Your Name Here",
    devPortfolio: "https://github.com/yourusername",
   
    // Hadith Text (Urdu/English)
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔ (ترمذی: 1209)",
    hadithEnglish: "\"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.\" (Tirmidhi)"
};

const products = [
    {
        id: 1,
        title: "Luxury Matte Lipstick",
        category: "Cosmetics",
        price: "1,250",
        description: "یہ بہترین میٹ لپ اسٹک ہے جو دیرپا اور واٹر پروف ہے۔ ہونٹوں کو نرم رکھتی ہے۔", // New Description Added
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
        platforms: [
            { name: "Daraz", url: "https://daraz.pk/product1" },
            { name: "Markaz", url: "https://markaz.app/p1" },
            { name: "WhatsApp", url: "https://wa.me/923001234567?text=I want to buy Lipstick" }
        ]
    },
    {
        id: 2,
        title: "Anti-Aging Serum",
        category: "Skin Care",
        price: "2,500",
        description: "چہرے کی جھریاں ختم کرنے اور چمک لانے کے لیے بہترین سیرم۔",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        platforms: [
            { name: "Website Store", url: "https://mysite.com/order" },
            { name: "AliExpress", url: "https://aliexpress.com" }
        ]
    },
    {
        id: 3,
        title: "Leather Wallet",
        category: "Accessories",
        price: "950",
        description: "خالص چمڑے سے بنا پرس، جس میں کارڈز اور کیش کے لیے بہترین جگہ ہے۔",
        image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=400",
        platforms: [
            { name: "Daraz", url: "https://daraz.pk/wallet" }
        ]
    }
];
