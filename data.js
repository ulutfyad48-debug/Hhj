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
    stock: 15
},
{
    id: 2,
    title: "L'Oreal Paris Infallible Foundation 15 Rose Ivory",
    category: "فاؤنڈیشن",
    price: 3200,
    priceFormatted: "3,200",
    description: "لوریل انفیلبل فاؤنڈیشن - 24 گھنٹے تک قائم رہنے والی کوریج۔",
    image: "https://drive.google.com/uc?export=view&id=1LSiJoAjFbovl-QDzI8RqzkyZUv5vnQ0s",
    stock: 10
},
{
    id: 3,
    title: "Sunscreen SPF 50 PA+++",
    category: "اسکن کیئر",
    price: 850,
    priceFormatted: "850",
    description: "واٹر بیس سن اسکرین - جلد کو UV شعاعوں سے بچائیں، ہلکی اور نان گریسی۔",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400",
    stock: 25
},
{
    id: 4,
    title: "Vitamin C Serum 20%",
    category: "اسکن کیئر",
    price: 1250,
    priceFormatted: "1,250",
    description: "وٹامن سی سیرم - جلد کو نکھارے، داغ دھبے کم کرے، کولیجن بڑھائے۔",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400",
    stock: 20
},
{
    id: 5,
    title: "Matte Liquid Lipstick - Rose Pink",
    category: "لپ اسٹک",
    price: 450,
    priceFormatted: "450",
    description: "میٹ لیکوئڈ لپ اسٹک - دیرپا، خشک نہیں ہوتی، گلاب گلابی رنگ۔",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
    stock: 30
},
{
    id: 6,
    title: "Eyelash Curler Mascara",
    category: "آئی میک اپ",
    price: 650,
    priceFormatted: "650",
    description: "کرلنگ مسکارا - پلکوں کو موڑ دے، حجم اور لمبائی دے۔",
    image: "https://images.unsplash.com/photo-1631730313056-6d5f05f3e0b0?w=400",
    stock: 18
},
{
    id: 7,
    title: "Makeup Setting Spray",
    category: "میک اپ",
    price: 950,
    priceFormatted: "950",
    description: "سیٹنگ سپرے - میک اپ کو گھنٹوں فریش رکھے، واٹرپروف۔",
    image: "https://images.unsplash.com/photo-1631730312566-68e7bda9f16a?w=400",
    stock: 22
},
{
    id: 8,
    title: "Charcoal Face Wash",
    category: "اسکن کیئر",
    price: 550,
    priceFormatted: "550",
    description: "چارکول فیس واش - جلد کو گہرائی سے صاف کرے، ایکنی سے بچائے۔",
    image: "https://images.unsplash.com/photo-1556228578-567ba127e37c?w=400",
    stock: 35
},
{
    id: 9,
    title: "Underarm Whitening Cream",
    category: "باڈی کیئر",
    price: 750,
    priceFormatted: "750",
    description: "بغلں کو نکھارنے والی کریم - جلد کو نرم اور روشن بنائے۔",
    image: "https://images.unsplash.com/photo-1631730312565-cff1c5e8f1b0?w=400",
    stock: 12
},
{
    id: 10,
    title: "Nail Polish Remover",
    category: "نیلز",
    price: 250,
    priceFormatted: "250",
    description: "نیل پالش ریموور - تیز اور مؤثر، ایسیٹون فری۔",
    image: "https://images.unsplash.com/photo-1631730312570-7d2e4b78e3d4?w=400",
    stock: 40
},
{
    id: 11,
    title: "Makeup Brushes Set (12 pcs)",
    category: "برشز",
    price: 1990,
    priceFormatted: "1,990",
    description: "12 پیس میک اپ برش سیٹ - تمام ضروری برش ایک سیٹ میں۔",
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400",
    stock: 8
},
{
    id: 12,
    title: "Hyaluronic Acid Serum",
    category: "اسکن کیئر",
    price: 1350,
    priceFormatted: "1,350",
    description: "ہائیلورونک ایسڈ سیرم - جلد کو گہرائی سے نم رکھے، نمی برقرار رکھے۔",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
    stock: 15
},
{
    id: 13,
    title: "Eyebrow Pencil - Dark Brown",
    category: "آئی میک اپ",
    price: 350,
    priceFormatted: "350",
    description: "آئی برو پنسل - آسانی سے بھرے، قدرتی شکل دے۔",
    image: "https://images.unsplash.com/photo-1631730312578-63e5c4a1b5c3?w=400",
    stock: 28
},
{
    id: 14,
    title: "Compact Powder - Translucent",
    category: "میک اپ",
    price: 750,
    priceFormatted: "750",
    description: "کومپیکٹ پاؤڈر - میٹ فنش، تیل جذب کرے، پورز بند نہ کرے۔",
    image: "https://images.unsplash.com/photo-1631730312560-7e3a5f0e8b1a?w=400",
    stock: 17
},
{
    id: 15,
    title: "Lip Balm with Tint",
    category: "لپ اسٹک",
    price: 320,
    priceFormatted: "320",
    description: "ٹنٹڈ لپ بام - ہونٹوں کو نم رکھے، ہلکا گلابی رنگ دے۔",
    image: "https://images.unsplash.com/photo-1631730312588-5e4c8a3b0f2d?w=400",
    stock: 45
}
];