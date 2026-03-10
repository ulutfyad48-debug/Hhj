const categoriesList = [
    { name: "Coding", url: "codingAiToolsPage.html" },
    { name: "Ai Image", url: "imageMakingools.html" },
    { name: "ChatBots", url: "chatBots.html" },
    { name: "Ai Video", url: "videoMakingTools.html" },
    { name: "Automation", url: "aiAutomationToolsPage.html" },
    { name: "Voice/Audio", url: "aiVoiceAndAudio.html" },
    { name: "Ai Logo", url: "aiLogo.html" },
    { name: "Ai Presentation", url: "aiPresentation.html" }
];
const allTools = [
{
  name: "Seedance 2.0",
  description: "Fast AI Video Iterations — Generate controlled AI videos with references—consistent characters and style.",
  url: "https://openart.ai",
  islatest: true
},
  {
    name: "Claude AI",
    description: "Powerful AI assistant for writing, coding and analysis.",
    url: "https://claude.ai",
    islatest: "true"
  },
  {
    name: "Perplexity AI",
    description: "AI search engine providing accurate real-time answers.",
    url: "https://www.perplexity.ai",
    islatest: "true"
  },
  {
    name: "Runway ML",
    description: "AI video generation and creative editing platform.",
    url: "https://runwayml.com",
    islatest: "true"
  },
  {
    name: "Leonardo AI",
    description: "AI image generator for game assets and artwork.",
    url: "https://leonardo.ai",
    islatest: "true"
  },
  {
    name: "Copy.ai",
    description: "AI writing tool for marketing and content creation.",
    url: "https://www.copy.ai",
    islatest: "true"
  },
  {
    name: "Pika Labs",
    description: "AI tool for creating short cinematic videos.",
    url: "https://www.pika.art",
    islatest: "true"
  },
  {
  name: "Dia AI Browser",
  description: "AI browser with built-in AI search and automation to boost productivity.",
  url: "https://diabrowser.com",
  islatest: true
},
{
  name: "Sora Video App",
  description: "AI video generator that creates videos from text prompts with sound.",
  url: "https://openai.com/sora",
  islatest: true
},
{
  name: "Microsoft Copilot Studio",
  description: "Build custom AI assistants using low-code tools in Microsoft 365 and Azure.",
  url: "https://microsoft.com",
  islatest: true
},
{
  name: "VoiceClone Studio",
  description: "AI voice synthesis tool with natural voice cloning for content makers.",
  url: "https://voiceclone.studio",
  islatest: true
},
{
  name: "DataViz Genius",
  description: "AI data visualization tool that converts raw data into beautiful charts.",
  url: "https://datavizgenius.ai",
  islatest: true
},
{
  name: "Perplexity Comet",
  description: "Advanced AI search and browsing assistant with shopping insights.",
  url: "https://www.perplexity.ai",
  islatest: true
},
{
  name: "Norton Neo",
  description: "AI browser with built-in privacy protection and summarization features.",
  url: "https://norton.com",
  islatest: true
},
{
  name: "Opera Neon AI",
  description: "Opera’s AI workspace browser that automates tasks and workflows.",
  url: "https://opera.com",
  islatest: true
},
{
  name: "Fellow 5.0",
  description: "Meeting AI assistant that records, summarizes, and automates follow-ups.",
  url: "https://fellow.ai",
  islatest: true
},
{
  name: "Klaariqo",
  description: "AI voice assistant for automating tasks like scheduling and reminders.",
  url: "https://klaariqo.ai",
  islatest: true
},
{
  name: "Bohrium",
  description:"Bohrium AI: Smart search for libraries, science, and academic scholars.",
  url: "https://bohrium.com",
  islatest: true
},
{
  name: "z",
  description: "Your all-in-one tool for web design, presentations, and analytics.",
  url: "https://chat.z.ai",
  islatest: true
}
];

const  videoMakingAiTools = [
{
  name: "VEED AI",
  description: "VEED AI is an online AI video editor with automatic subtitles, text-to-video generation, and social media video optimization tools.",
  url: "https://www.veed.io"
},
{
  name: "FlexClip AI",
  description: "FlexClip AI video maker converts text into professional marketing videos with AI templates and auto-editing features.",
  url: "https://www.flexclip.com"
},
{
  name: "Animoto",
  description: "Animoto is an AI-powered video creation platform for businesses to create promotional and social media videos easily.",
  url: "https://animoto.com"
},
{
  name: "Fliki AI",
  description: "Fliki AI transforms blog posts and text into engaging AI videos with realistic text-to-speech voiceovers.",
  url: "https://fliki.ai"
},
{
  name: "Elai.io",
  description: "Elai.io is an AI avatar video generator that creates multilingual training and explainer videos from text.",
  url: "https://elai.io"
},
{
  name: "Hour One",
  description: "Hour One creates realistic AI presenter videos for e-learning, business, and marketing content.",
  url: "https://hourone.ai"
},
{
  name: "Vidnoz AI",
  description: "Vidnoz AI offers free AI video generation with avatars, voice cloning, and text-to-video automation tools.",
  url: "https://www.vidnoz.com"
},
{
  name: "Wisecut",
  description: "Wisecut is an AI video editor that automatically removes silences and adds subtitles for YouTube creators.",
  url: "https://www.wisecut.video"
},
{
  name: "Steve AI",
  description: "Steve AI converts scripts into animated and live-action videos using artificial intelligence.",
  url: "https://www.steve.ai"
},
{
  name: "Raw Shorts",
  description: "Raw Shorts is an AI explainer video generator that turns text into animated business videos automatically.",
  url: "https://www.rawshorts.com"
},
{
  name: "Designs.ai Videomaker",
  description: "Designs.ai Videomaker creates AI marketing videos from text with automated branding and voiceovers.",
  url: "https://designs.ai/tools/video"
},
{
  name: "Magisto",
  description: "Magisto uses AI video editing technology to create professional promotional videos in minutes.",
  url: "https://www.magisto.com"
},
{
  name: "Kapwing AI",
  description: "Kapwing AI is an online AI video editor with automatic subtitles, resizing, and social media optimization.",
  url: "https://www.kapwing.com"
},
{
  name: "Invideo Studio",
  description: "Invideo Studio offers advanced AI video automation tools for ads, YouTube, and digital marketing.",
  url: "https://invideo.io/studio"
},
{
  name: "Wave.video",
  description: "Wave.video is an AI-powered video marketing platform for creating and editing branded videos.",
  url: "https://wave.video"
},
{
  name: "Seedance 2.0",
  description: "Fast AI Video Iterations — Generate controlled AI videos with references—consistent characters and style.",
  url: "https://openart.ai",
  islatest: true
},  
{  
  name: "Runway ML",
  description: "Advanced AI video generation including text-to-video and video editing.",
  url: "https://runwayml.com",
  isLatest: true,
  use: "free"
},
{
  name: "Pika Labs",
  description: "AI tool for generating short cinematic videos from text prompts.",
  url: "https://pika.art",
  isLatest: true
},
{
  name: "Synthesia",
  description: "Create AI avatar videos from text in multiple languages.",
  url: "https://www.synthesia.io",
  isLatest: true
},
{
  name: "HeyGen",
  description: "AI video generator with realistic avatars and voice cloning.",
  url: "https://www.heygen.com",
  isLatest: true
},
{
  name: "Lumen5",
  description: "Turn blog posts and text into engaging AI videos automatically.",
  url: "https://lumen5.com",
  isLatest: true
},
{
  name: "InVideo AI",
  description: "AI-powered video creation tool for marketing and social media.",
  url: "https://invideo.io",
  isLatest: true
},
{
  name: "Kaiber",
  description: "Create AI music videos and cinematic visuals from text or images.",
  url: "https://kaiber.ai",
  isLatest: true
},
{
  name: "DeepBrain AI",
  description: "AI human avatar video generator for business presentations.",
  url: "https://www.deepbrain.io",
  isLatest: true
},
{
  name: "Colossyan",
  description: "AI video generator with realistic avatars and corporate templates.",
  url: "https://www.colossyan.com",
  isLatest: true
}
];

const imageMakingAiTools = [
{
  name: "Artbreeder",
  description: "Artbreeder is an AI image generator that lets users create and modify portraits, characters, and landscapes using advanced generative AI models.",
  url: "https://www.artbreeder.com"
},
{
  name: "Fotor AI",
  description: "Fotor AI is an online AI photo editor and text-to-image generator for creating professional marketing visuals and social media graphics.",
  url: "https://www.fotor.com"
},
{
  name: "Deep Dream Generator",
  description: "Deep Dream Generator uses deep learning AI to create surreal and artistic images from photos and text prompts.",
  url: "https://deepdreamgenerator.com"
},
{
  name: "RunDiffusion",
  description: "RunDiffusion provides cloud-based Stable Diffusion AI image generation with high-resolution outputs for commercial projects.",
  url: "https://rundiffusion.com"
},
{
  name: "PhotoRoom AI",
  description: "PhotoRoom AI automatically removes backgrounds and generates product images using artificial intelligence for eCommerce sellers.",
  url: "https://www.photoroom.com"
},
{
  name: "GetIMG AI",
  description: "GetIMG AI offers powerful text-to-image generation, image editing, and AI upscaling tools for creators and designers.",
  url: "https://getimg.ai"
},
{
  name: "Mage.Space",
  description: "Mage.Space is a free AI image generator based on Stable Diffusion for fast and unlimited text-to-image creation online.",
  url: "https://www.mage.space"
},
{
  name: "ArtSmart AI",
  description: "ArtSmart AI creates photorealistic AI images, digital art, and marketing graphics using advanced generative models.",
  url: "https://artsmart.ai"
},
{
  name: "DreamStudio",
  description: "DreamStudio by Stability AI is an official AI text-to-image platform for generating high-quality digital artwork.",
  url: "https://dreamstudio.ai"
},
{
  name: "StarryAI",
  description: "StarryAI is a mobile-friendly AI art generator that transforms text prompts into unique digital paintings and NFT-ready visuals.",
  url: "https://www.starryai.com"
},
{
  name: "Hotpot AI",
  description: "Hotpot AI provides AI image generation, photo enhancement, and graphic design tools for content creators and marketers.",
  url: "https://hotpot.ai"
},
{
  name: "Picsart AI",
  description: "Picsart AI combines AI image generation with editing tools to create stunning social media and branding visuals.",
  url: "https://picsart.com"
},
{
  name: "VanceAI",
  description: "VanceAI offers AI-powered image upscaling, background removal, and enhancement tools for high-resolution results.",
  url: "https://vanceai.com"
},
{
  name: "Remini AI",
  description: "Remini AI enhances low-quality photos using AI image restoration and sharpening technology.",
  url: "https://www.remini.ai"
},
{
  name: "Shutterstock AI Generator",
  description: "Shutterstock AI Generator creates commercial-safe AI images for marketing, advertising, and professional design use.",
  url: "https://www.shutterstock.com/generate"
},
  {
    name: "DALL·E 4",
    description: "DALL·E 4 by OpenAI is an advanced text-to-image generator that creates high-resolution, context-aware visuals for creative content, branding, and storytelling.",
    url: "https://openai.com/dall-e",
    islatest: "true",
    use: "Generate photorealistic and artistic images from text prompts. Free tier available; premium usage with ChatGPT Plus.",
    date: "Updated 2026"
  },
  {
    name: "Midjourney",
    description: "Midjourney is a leading AI art generator known for its creative and cinematic image styles, popular among designers and artists.",
    url: "https://www.midjourney.com",
    islatest: "true",
    use: "Artistic and stylized image creation. Paid subscription required with trial credits.",
    date: "2026 Latest Version"
  },
  {
    name: "Adobe Firefly",
    description: "Adobe Firefly is a professional AI image creation tool integrated with Adobe products for commercial-safe visuals for marketing and design.",
    url: "https://firefly.adobe.com",
    islatest: "true",
    use: "Text to image, creative graphics, marketing visuals. Free credits available; paid plans for unlimited use.",
    date: "2025 Latest Release"
  },
  {
    name: "Leonardo AI",
    description: "Leonardo AI is a versatile AI image suite perfect for game assets, concepts, characters, and custom stylistic visuals.",
    url: "https://leonardo.ai",
    islatest: "true",
    use: "Textures, concept art, character visuals. Free credits daily; paid for higher generation limits.",
    date: "2025 Major Update"
  },
  {
    name: "Stable Diffusion",
    description: "Stable Diffusion is a highly customizable open-source image generator that offers local and cloud generation with flexible models.",
    url: "https://stability.ai",
    islatest: "true",
    use: "Open-source image creation and experimentation. Free/self-hosted; some cloud paid plans.",
    date: "2026 Model Versions"
  },
  {
    name: "Canva AI",
    description: "Canva AI includes text-to-image creation inside a design platform, helping marketers and creators generate stunning branded visuals.",
    url: "https://www.canva.com",
    islatest: "true",
    use: "Branding graphics and images with templates. Free plan; premium for advanced features.",
    date: "2026 Integrated Update"
  },
  {
    name: "Google Gemini Image",
    description: "Google Gemini’s image generation model (Nano Banana) creates realistic and highly detailed visuals from text prompts with multilingual support.",
    url: "https://gemini.google.com",
    islatest: "true",
    use: "Prompt-based realistic image generation. Free tier with daily limits; paid Google AI Pro for more.",
    date: "2026 Nano Banana Pro"
  },
  {
    name: "Pixlr AI",
    description: "Pixlr AI is a browser-based image creator blending AI generation with editing tools for fast creative workflows.",
    url: "https://pixlr.com",
    islatest: "true",
    use: "AI created visuals + edits. Free version; paid premium plan.",
    date: "2026 Updated Tools"
  },
  {
    name: "Playground AI",
    description: "Playground AI offers versatile text-to-image generation and community styles for creators exploring varied aesthetics.",
    url: "https://playgroundai.com",
    islatest: "true",
    use: "Generate diverse image styles. Free tier with credits; paid for extended use.",
    date: "2026 Versions"
  },
  {
    name: "Ideogram AI",
    description: "Ideogram AI excels in handling text-to-image tasks, especially when typography, layouts, or design elements matter.",
    url: "https://ideogram.ai",
    islatest: "true",
    use: "Graphic design + AI image generation. Free tier daily credits; paid tier available.",
    date: "2026 Enhanced Release"
  },
  {
    name: "Kittl AI",
    description: "Kittl AI fuses vector editing with image generation, ideal for logos, posters, and brand visuals with text prompts.",
    url: "https://kittl.com",
    islatest: "true",
    use: "AI images + vector designs. Free tier; paid monthly plans.",
    date: "2026 Updated"
  },
  {
    name: "Seedream AI",
    description: "Seedream 4.0 by ByteDance is a next-gen image generator offering ultra-fast rendering and multi-reference input support.",
    url: "https://seedream.com",
    islatest: "true",
    use: "High-resolution visuals from multiple references. Free tier; paid for full access.",
    date: "2025 Launch"
  },
  {
    name: "Craiyon",
    description: "Craiyon is a fun and accessible AI image generator for quick concepts and imaginative visuals without complex prompts.",
    url: "https://www.craiyon.com",
    islatest: "true",
    use: "Quick creative image generation. Free; donations optional.",
    date: "2026 Popular"
  },
  {
    name: "NightCafe",
    description: "NightCafe is a community-friendly AI art platform with daily challenges and various styles for any creator.",
    url: "https://creator.nightcafe.studio",
    islatest: "true",
    use: "Daily image creation and challenges. Free tier; paid credits for more generations.",
    date: "2026 Popular"
  },
  {
    name: "Dreamina (CapCut AI)",
    description: "Dreamina AI integrates with CapCut to generate creative images optimized for social content and mobile visuals.",
    url: "https://www.capcut.com",
    islatest: "true",
    use: "Social media image generation. Free basics; paid upgrades.",
    date: "2025 Integration"
  },
  {
    name: "Flux AI",
    description: "Flux AI is an experimental multimodal generator supporting text and image prompts with creative output possibilities.",
    url: "https://flux.ai",
    islatest: "true",
    use: "Experimental image generation. Free tier; paid for advanced models.",
    date: "2026 Early Access"
  }
]

const codingAiTools = [
{
  name: "CodeRabbit",
  description: "CodeRabbit is an AI-powered code review assistant that automatically analyzes pull requests and suggests optimized improvements for developers.",
  url: "https://coderabbit.ai"
},
{
  name: "Sweep AI",
  description: "Sweep AI automatically fixes bugs and writes production-ready code changes directly inside GitHub repositories.",
  url: "https://sweep.dev"
},
{
  name: "Aider",
  description: "Aider is an AI pair programming tool that edits code in your local repository using large language models.",
  url: "https://aider.chat"
},
{
  name: "Refact AI",
  description: "Refact AI is an open-source AI coding assistant for intelligent code completion and refactoring.",
  url: "https://refact.ai"
},
{
  name: "CodeGeeX",
  description: "CodeGeeX is a multilingual AI code generation model supporting over 20 programming languages.",
  url: "https://codegeex.cn"
},
{
  name: "Buildt AI",
  description: "Buildt AI helps developers search and understand large codebases using AI-powered semantic search.",
  url: "https://buildt.ai"
},
{
  name: "Kite AI",
  description: "Kite AI offers smart AI code completions and documentation lookup for Python developers.",
  url: "https://kite.com"
},
{
  name: "MarsCode",
  description: "MarsCode is an AI cloud IDE with smart code suggestions and debugging support.",
  url: "https://www.marscode.com"
},
{
  name: "CodeWP",
  description: "CodeWP is an AI code generator specifically optimized for WordPress developers.",
  url: "https://codewp.ai"
},
{
  name: "Codex CLI",
  description: "Codex CLI enables AI-powered code generation and automation directly from the command line.",
  url: "https://platform.openai.com"
},
{
  name: "Smol Developer",
  description: "Smol Developer uses AI agents to build complete software projects from simple text prompts.",
  url: "https://github.com/smol-ai"
},
{
  name: "DevGPT",
  description: "DevGPT is an AI developer assistant that provides instant code solutions and explanations.",
  url: "https://devgpt.com"
},
{
  name: "AI2SQL",
  description: "AI2SQL converts natural language into optimized SQL queries instantly using AI.",
  url: "https://www.ai2sql.io"
},
{
  name: "SQLCoder",
  description: "SQLCoder is an AI model designed for automated SQL query generation and database optimization.",
  url: "https://github.com/defog-ai/sqlcoder"
},
{
  name: "AutoDev",
  description: "AutoDev is an AI software development tool that automates coding workflows and project scaffolding.",
  url: "https://autodev.ai"
},
  {
    name: "GitHub Copilot",
    description: "GitHub Copilot is an AI coding assistant that suggests code in real-time.",
    url: "https://github.com/features/copilot"
  },
  {
    name: "Codeium",
    description: "Codeium provides free AI-powered code completion and suggestions.",
    url: "https://codeium.com"
  },
  {
    name: "Cursor AI",
    description: "Cursor AI is an AI-first code editor built for faster development.",
    url: "https://cursor.sh"
  },
  {
    name: "Tabnine",
    description: "Tabnine uses AI to provide smart code completions for developers.",
    url: "https://www.tabnine.com"
  },
  {
    name: "Amazon CodeWhisperer",
    description: "Machine learning-powered coding companion that generates code suggestions in real-time.",
    url: "https://aws.amazon.com/codewhisperer"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI pair programmer built into Replit that helps generate and explain code.",
    url: "https://replit.com"
  },
  {
    name: "Sourcegraph Cody",
    description: "AI coding assistant that helps developers understand, refactor, and generate code.",
    url: "https://sourcegraph.com/cody"
  },
  {
    name: "AskCodi",
    description: "AI coding assistant that helps generate code, queries, tests and documentation.",
    url: "https://www.askcodi.com"
  },
  {
    name: "CodeT5",
    description: "Open-source AI model designed for code understanding and generation tasks.",
    url: "https://github.com/salesforce/CodeT5"
  },
  {
    name: "Mutable AI",
    description: "AI tool that accelerates software development by generating and transforming production-ready code.",
    url: "https://mutable.ai"
  },
  {
    name: "Blackbox AI",
    description: "AI tool that helps developers find code snippets and generate solutions instantly.",
    url: "https://www.blackbox.ai"
  },
  {
    name: "CodiumAI",
    description: "AI-powered test generation tool that creates meaningful unit tests automatically.",
    url: "https://www.codium.ai"
  },
  {
    name: "DeepCode (Snyk Code)",
    description: "AI-based static code analysis tool that finds bugs and security vulnerabilities.",
    url: "https://snyk.io/product/snyk-code"
  },
  {
    name: "Polycoder",
    description: "Open-source AI model for C programming language code generation.",
    url: "https://github.com/VHellendoorn/Code-LMs"
  },
  {
    name: "SpellBox",
    description: "AI coding assistant that generates code from simple prompts inside VS Code.",
    url: "https://spellbox.app"
  },
  {
    name: "Codiga",
    description: "AI code analysis and auto-fix tool for secure and clean code.",
    url: "https://www.codiga.io"
  },
  {
    name: "Figstack",
    description: "AI tool that explains code, translates between languages, and generates documentation.",
    url: "https://www.figstack.com"
  },
  {
    name: "Bito AI",
    description: "AI assistant for developers that generates code, tests, and explanations inside IDE.",
    url: "https://bito.ai"
  },
  {
    name: "Phind",
    description: "AI-powered search engine specifically designed for developers and coding queries.",
    url: "https://www.phind.com"
  },
  {
    name: "Continue.dev",
    description: "Open-source AI coding assistant that integrates with VS Code for faster development.",
    url: "https://continue.dev"
  }
];

const logoAndDesignTools = [
  {
    name: "Looka",
    description: "Looka is an AI-powered logo maker that helps businesses create professional brand identities within minutes.",
    url: "https://looka.com"
  },
  {
    name: "Brandmark",
    description: "Brandmark uses artificial intelligence to generate unique logo designs and full brand kits instantly.",
    url: "https://brandmark.io"
  },
  {
    name: "LogoAI",
    description: "LogoAI is an automated logo design platform that creates modern logos and branding materials using AI.",
    url: "https://www.logoai.com"
  },
  {
    name: "Designs.ai",
    description: "Designs.ai offers AI-based logo creation, video generation, and branding tools for businesses and marketers.",
    url: "https://designs.ai"
  },
  {
    name: "Tailor Brands",
    description: "Tailor Brands provides AI-driven logo creation and complete business branding solutions.",
    url: "https://www.tailorbrands.com"
  },
  {
    name: "Kittl AI",
    description: "Kittl AI is a design-focused AI platform ideal for creating logos, typography art, and marketing visuals.",
    url: "https://www.kittl.com"
  }
];

const chat_WritingAiTools = [
{
  name: "YouChat",
  description: "YouChat is an AI chatbot integrated with search that provides real-time answers and content generation.",
  url: "https://you.com"
},
{
  name: "Character AI",
  description: "Character AI allows users to chat with customizable AI personalities for creative conversations.",
  url: "https://character.ai"
},
{
  name: "Sudowrite",
  description: "Sudowrite is an AI writing assistant designed for authors, storytelling, and creative fiction writing.",
  url: "https://www.sudowrite.com"
},
{
  name: "Wordtune",
  description: "Wordtune improves writing clarity and SEO optimization using AI-powered rewriting suggestions.",
  url: "https://www.wordtune.com"
},
{
  name: "QuillBot",
  description: "QuillBot is an AI paraphrasing and grammar correction tool for students and content creators.",
  url: "https://quillbot.com"
},
{
  name: "INK AI",
  description: "INK AI is an SEO content writing assistant optimized for ranking blog posts on Google search.",
  url: "https://inkforall.com"
},
{
  name: "HyperWrite",
  description: "HyperWrite is an AI writing assistant that generates emails, blog posts, and marketing copy.",
  url: "https://www.hyperwriteai.com"
},
{
  name: "Peppertype AI",
  description: "Peppertype AI helps marketers generate high-converting SEO content and product descriptions.",
  url: "https://www.peppertype.ai"
},
{
  name: "Anyword",
  description: "Anyword is an AI copywriting platform focused on conversion-optimized ad copy and landing pages.",
  url: "https://anyword.com"
},
{
  name: "Frase AI",
  description: "Frase AI combines AI content writing with SEO research and SERP optimization tools.",
  url: "https://www.frase.io"
},
{
  name: "LongShot AI",
  description: "LongShot AI generates fact-based long-form SEO articles with citation support.",
  url: "https://www.longshot.ai"
},
{
  name: "Scalenut",
  description: "Scalenut is an AI-powered SEO writing and content research platform for bloggers and businesses.",
  url: "https://www.scalenut.com"
},
{
  name: "Neuroflash",
  description: "Neuroflash is an AI text generator for marketing content and brand storytelling.",
  url: "https://neuroflash.com"
},
{
  name: "Copysmith",
  description: "Copysmith generates eCommerce product descriptions and SEO blog content automatically.",
  url: "https://copysmith.ai"
},
{
  name: "TextCortex",
  description: "TextCortex is an AI writing assistant for multilingual content and SEO optimization.",
  url: "https://textcortex.com"
},
  {
    name: "ChatGPT",
    description: "ChatGPT is an advanced conversational AI assistant for content creation, coding, and research tasks.",
    url: "https://chat.openai.com"
  },
  {
    name: "Claude AI",
    description: "Claude AI is a powerful AI chatbot designed for writing, analysis, and long-form conversations.",
    url: "https://claude.ai"
  },
  {
    name: "Google Gemini",
    description: "Google Gemini is a multimodal AI assistant integrated with Google services for productivity and research.",
    url: "https://gemini.google.com"
  },
  {
    name: "Microsoft Copilot",
    description: "Microsoft Copilot enhances productivity with AI-powered chat, writing, and coding support.",
    url: "https://copilot.microsoft.com"
  },
  {
    name: "Perplexity AI",
    description: "Perplexity AI is an AI-powered search assistant providing real-time, cited answers.",
    url: "https://www.perplexity.ai"
  },
    {
    name: "Jasper",
    description: "Jasper is an AI content platform for marketing copy and blog writing.",
    url: "https://www.jasper.ai"
  },
  {
    name: "Copy.ai",
    description: "Copy.ai helps generate marketing content and product descriptions using AI.",
    url: "https://www.copy.ai"
  },
  {
    name: "Writesonic",
    description: "Writesonic is an AI writing tool for SEO content and ads.",
    url: "https://writesonic.com"
  },
  {
    name: "Rytr",
    description: "Rytr is an affordable AI writing assistant for quick content creation.",
    url: "https://rytr.me"
  }
];

const presentationTools = [
{
  name: "Decktopus AI",
  description: "Decktopus AI automatically creates professional slide decks using AI presentation templates.",
  url: "https://www.decktopus.com"
},
{
  name: "Presentations.ai",
  description: "Presentations.ai turns simple text into fully designed AI-powered presentation slides.",
  url: "https://www.presentations.ai"
},
{
  name: "Pitch AI",
  description: "Pitch AI helps teams create collaborative and visually engaging presentations faster.",
  url: "https://pitch.com"
},
{
  name: "Slidesgo AI",
  description: "Slidesgo AI generates ready-to-use presentation templates with AI content assistance.",
  url: "https://slidesgo.com"
},
{
  name: "Slidebean",
  description: "Slidebean uses AI to design startup pitch decks and investor presentations automatically.",
  url: "https://slidebean.com"
},
{
  name: "Prezi AI",
  description: "Prezi AI enhances interactive presentations with AI-generated storytelling visuals.",
  url: "https://prezi.com"
},
{
  name: "Visme AI",
  description: "Visme AI creates engaging presentations, infographics, and visual reports using artificial intelligence.",
  url: "https://www.visme.co"
},
{
  name: "Zoho Show AI",
  description: "Zoho Show AI assists in creating smart business presentations with AI suggestions.",
  url: "https://www.zoho.com/show"
},
{
  name: "Designrr",
  description: "Designrr converts blog posts and PDFs into professional presentations and eBooks using AI.",
  url: "https://designrr.io"
},
{
  name: "Storydoc AI",
  description: "Storydoc AI creates interactive and conversion-focused presentation documents.",
  url: "https://www.storydoc.com"
},
{
  name: "DeckRobot",
  description: "DeckRobot automates PowerPoint design formatting using AI branding tools.",
  url: "https://deckrobot.com"
},
{
  name: "Sendsteps AI",
  description: "Sendsteps AI generates interactive presentations with live audience engagement features.",
  url: "https://www.sendsteps.com"
},
{
  name: "Canva Magic Design",
  description: "Canva Magic Design uses AI to generate stunning slide layouts instantly.",
  url: "https://www.canva.com"
},
{
  name: "Plus AI for Slides",
  description: "Plus AI creates Google Slides presentations automatically from prompts.",
  url: "https://www.plusdocs.com"
},
{
  name: "MagicSlides",
  description: "MagicSlides converts YouTube videos and text into AI-powered presentation slides.",
  url: "https://magicslides.app"
},
  {
    name: "Gamma",
    description: "Gamma is an AI presentation tool that turns simple text prompts into professional slide decks instantly.",
    url: "https://gamma.app"
  },
  {
    name: "Tome AI",
    description: "Tome AI helps users create engaging presentations and storytelling slides using artificial intelligence.",
    url: "https://tome.app"
  },
  {
    name: "Beautiful.ai",
    description: "Beautiful.ai automates slide design using AI to create visually appealing presentations.",
    url: "https://www.beautiful.ai"
  },
  {
    name: "Canva AI",
    description: "Canva AI enhances presentation creation with smart templates and AI-generated designs.",
    url: "https://www.canva.com"
  },
  {
    name: "SlidesAI",
    description: "SlidesAI generates ready-to-use presentations from text content automatically.",
    url: "https://www.slidesai.io"
  }
];

const voiceAndAudioTools = [
{
  name: "Resemble AI",
  description: "Resemble AI offers realistic AI voice cloning and text-to-speech generation for content creators.",
  url: "https://www.resemble.ai"
},
{
  name: "LOVO AI",
  description: "LOVO AI provides professional AI voiceovers with emotional tone control for marketing videos.",
  url: "https://www.lovo.ai"
},
{
  name: "WellSaid Labs",
  description: "WellSaid Labs creates studio-quality AI voice narration for enterprise and e-learning.",
  url: "https://www.wellsaidlabs.com"
},
{
  name: "Replica Studios",
  description: "Replica Studios generates AI character voices for games and animation projects.",
  url: "https://replicastudios.com"
},
{
  name: "Voicemod AI",
  description: "Voicemod AI offers real-time AI voice changing and synthetic voice creation.",
  url: "https://www.voicemod.net"
},
{
  name: "Altered AI",
  description: "Altered AI enables professional voice transformation and AI dubbing solutions.",
  url: "https://www.altered.ai"
},
{
  name: "Cleanvoice AI",
  description: "Cleanvoice AI automatically removes filler words and background noise from audio recordings.",
  url: "https://cleanvoice.ai"
},
{
  name: "Podcastle AI",
  description: "Podcastle AI provides AI-powered podcast recording, editing, and voice enhancement tools.",
  url: "https://podcastle.ai"
},
{
  name: "Audo AI",
  description: "Audo AI enhances audio clarity using AI noise reduction and voice cleaning technology.",
  url: "https://audo.ai"
},
{
  name: "Krisp AI",
  description: "Krisp AI removes background noise in real-time for calls and online meetings.",
  url: "https://krisp.ai"
},
{
  name: "Speechmatics",
  description: "Speechmatics provides AI speech recognition and automatic transcription services.",
  url: "https://www.speechmatics.com"
},
{
  name: "AssemblyAI",
  description: "AssemblyAI offers advanced speech-to-text APIs with AI-powered audio intelligence features.",
  url: "https://www.assemblyai.com"
},
{
  name: "Coqui AI",
  description: "Coqui AI develops open-source AI text-to-speech models and voice synthesis tools.",
  url: "https://coqui.ai"
},
{
  name: "Sonantic",
  description: "Sonantic creates emotionally expressive AI-generated voices for media production.",
  url: "https://www.sonantic.io"
},
{
  name: "Voice.ai",
  description: "Voice.ai is an AI voice changer and voice cloning platform for gamers and streamers.",
  url: "https://voice.ai"
},
  {
    name: "ElevenLabs",
    description: "ElevenLabs is an advanced AI voice generator that creates realistic voiceovers, dubbing, and voice cloning for professional content.",
    url: "https://elevenlabs.io"
  },
  {
    name: "Murf AI",
    description: "Murf AI converts text into natural-sounding voiceovers for presentations, videos, and e-learning content.",
    url: "https://murf.ai"
  },
  {
    name: "PlayHT",
    description: "PlayHT is an AI text-to-speech platform that produces high-quality realistic audio voices.",
    url: "https://play.ht"
  },
  {
    name: "Descript",
    description: "Descript is an AI-powered audio and video editing tool with automatic transcription and voice editing features.",
    url: "https://www.descript.com"
  },
  {
    name: "Speechify",
    description: "Speechify is an AI text-to-speech reader that converts documents and web pages into natural audio.",
    url: "https://speechify.com"
  }
];

const aiAutomationTools = [
{
  name: "Workato",
  description: "Workato is an enterprise AI automation platform for integrating apps and automating business workflows.",
  url: "https://www.workato.com"
},
{
  name: "UiPath",
  description: "UiPath provides AI-powered robotic process automation (RPA) for enterprise automation.",
  url: "https://www.uipath.com"
},
{
  name: "Automation Anywhere",
  description: "Automation Anywhere delivers AI-driven RPA solutions for digital transformation.",
  url: "https://www.automationanywhere.com"
},
{
  name: "Tray.io",
  description: "Tray.io offers advanced workflow automation with AI integrations for businesses.",
  url: "https://tray.io"
},
{
  name: "Levity AI",
  description: "Levity AI automates repetitive workflows using no-code AI models.",
  url: "https://levity.ai"
},
{
  name: "Tines",
  description: "Tines is a secure workflow automation platform for IT and security teams.",
  url: "https://www.tines.com"
},
{
  name: "Axiom AI",
  description: "Axiom AI automates browser tasks and web scraping without coding.",
  url: "https://axiom.ai"
},
{
  name: "Robocorp",
  description: "Robocorp provides open-source robotic process automation tools for developers.",
  url: "https://robocorp.com"
},
{
  name: "Pipefy AI",
  description: "Pipefy AI streamlines business process automation with AI-powered workflow management.",
  url: "https://www.pipefy.com"
},
{
  name: "ClickUp AI",
  description: "ClickUp AI enhances productivity and automates task workflows using artificial intelligence.",
  url: "https://clickup.com"
},
{
  name: "Kissflow",
  description: "Kissflow automates business processes with AI-powered workflow management tools.",
  url: "https://kissflow.com"
},
{
  name: "Process Street AI",
  description: "Process Street AI automates recurring workflows and standard operating procedures.",
  url: "https://www.process.st"
},
{
  name: "Gumloop",
  description: "Gumloop is an AI automation platform for building AI-powered workflows visually.",
  url: "https://www.gumloop.com"
},
{
  name: "Flowise AI",
  description: "Flowise AI is an open-source tool for building AI automation flows with LLM integrations.",
  url: "https://flowiseai.com"
},
{
  name: "Botpress",
  description: "Botpress is an AI chatbot and automation framework for building conversational workflows.",
  url: "https://botpress.com"
},
  {
    name: "Zapier",
    description: "No-code automation platform that connects apps and automates workflows using AI-powered triggers and actions.",
    url: "https://zapier.com"
  },
  {
    name: "Make (formerly Integromat)",
    description: "Advanced automation tool that allows users to build complex workflows visually without coding.",
    url: "https://www.make.com"
  },
  {
    name: "n8n",
    description: "Open-source workflow automation tool with AI integrations for developers and businesses.",
    url: "https://n8n.io"
  },
  {
    name: "Pabbly Connect",
    description: "Automation software that integrates multiple apps and services with AI-enabled workflows.",
    url: "https://www.pabbly.com/connect"
  },
  {
    name: "IFTTT",
    description: "Simple automation platform that connects apps and devices using conditional logic.",
    url: "https://ifttt.com"
  },
  {
    name: "Microsoft Power Automate",
    description: "Enterprise automation platform that streamlines business processes with AI capabilities.",
    url: "https://powerautomate.microsoft.com"
  },
  {
    name: "Activepieces",
    description: "Open-source automation platform that helps create AI-driven workflows and integrations.",
    url: "https://www.activepieces.com"
  },
  {
    name: "Taskade AI",
    description: "AI-powered productivity and automation tool for task management and team collaboration.",
    url: "https://www.taskade.com"
  },
  {
    name: "Bardeen AI",
    description: "AI automation tool that automates repetitive tasks directly inside your browser.",
    url: "https://www.bardeen.ai"
  },
  {
    name: "Relay.app",
    description: "Workflow automation platform designed for teams to automate processes with AI support.",
    url: "https://www.relay.app"
  }
];

