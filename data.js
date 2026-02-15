// siteConfig object - مکمل اور صاف
const siteConfig = {
    brandName: "SSelix",
    brandLogo: "logo.png",
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔ (ترمذی: 1209)",
    hadithEnglish: "\"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.\" (Tirmidhi)",
    developerUrl: "https://digitalsiteshub.github.io/",
    directShopUrl: "#", // اب استعمال نہیں ہوگا
    contactEmail: "sselix418@gmail.com",
    contactPhone: "+923102890002",
    whatsappNumber: "+923102890002",
    googleVerification: "u0HQvmeVKbyBWL1oaDDylFERp4bmJKpg-IT7i_U0CmE"
};

// ڈلیوری چارجز کنفیگریشن
const deliveryConfig = {
    peshawar: 100, // پشاور میں ڈلیوری چارجز
    khyberPakhtunkhwa: 200, // خیبرپختونخوا (پشاور کے علاوہ)
    otherProvinces: 300, // دوسرے صوبے
    freeDeliveryThreshold: 3000 // ₹3000 سے زیادہ پر ڈلیوری فری
};

// پاکستانی کاسمیٹکس پروڈکٹس - درست تصاویر کے ساتھ
const products = [
  {
    id: 1,
    title: "Maybelline Fit Me Matte + Poreless Foundation 128 Warm Nude",
    category: "فاؤنڈیشن",
    price: 2850,
    priceFormatted: "2,850",
    description: "میبلین فٹ می فاؤنڈیشن - تیل والی جلد کے لیے بہترین، 12 گھنٹے تک میٹ فنش۔",
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400",
    stock: 15,
    externalUrl: "#" // یہاں اگر باہر کا لنک ہو تو ڈالیں، ورنہ "#" رکھیں
},
{
    id: 2,
    title: "L'Oreal Paris Infallible Foundation 15 Rose Ivory",
    category: "فاؤنڈیشن",
    price: 3200,
    priceFormatted: "3,200",
    description: "لوریل انفیلبل فاؤنڈیشن - 24 گھنٹے تک قائم رہنے والی کوریج۔",
    image: "https://drive.google.com/uc?export=view&id=1LSiJoAjFbovl-QDzI8RqzkyZUv5vnQ0s",
    stock: 10,
    externalUrl: "#"
},
{
    id: 3,
    title: "Sunscreen SPF 50 PA+++",
    category: "اسکن کیئر",
    price: 850,
    priceFormatted: "850",
    description: "واٹر بیس سن اسکرین - جلد کو UV شعاعوں سے بچائیں، ہلکی اور نان گریسی۔",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400",
    stock: 25,
    externalUrl: "https://example.com/product" // اگر باہر کا لنک ہو
},
{
    id: 4,
    title: "Vitamin C Serum 20%",
    category: "اسکن کیئر",
    price: 1250,
    priceFormatted: "1,250",
    description: "وٹامن سی سیرم - جلد کو نکھارے، داغ دھبے کم کرے، کولیجن بڑھائے۔",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400",
    stock: 20,
    externalUrl: "#"
},
// ... باقی تمام پروڈکٹس کے لیے اسی طرح externalUrl شامل کریں
];