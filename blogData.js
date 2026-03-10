function renderBlogPosts() {
    const blogContainer = document.getElementById("blogPostsContainer");
    if (!blogContainer) return;

    blogContainer.innerHTML = blogPosts.map(post => `
        <div class="col-md-6 col-lg-4">
            <div class="card bg-secondary text-white border-0 shadow-sm h-100">
                <img src="${post.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${post.title}">
                <div class="card-body">
                    <span class="badge bg-aqua text-dark mb-2" style="background-color: aqua;">${post.category}</span>
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text small text-light-50">${post.excerpt}</p>
                    <a href="blog-details.html?id=${post.id}" class="btn btn-sm btn-outline-info">Read More</a>
                </div>
            </div>
        </div>
    `).join("");
}

// Render call karein
document.addEventListener("DOMContentLoaded", renderBlogPosts);

const blogPosts = [ 
{
  id: 1710000000000,
  title: "Top 5 AI Tools in 2026 That Are Changing Productivity and Creativity",
  category: "AI Tools",
  excerpt: "Discover the most powerful AI tools of 2026 that are transforming how people work, create, and automate tasks. These tools help developers, creators, and businesses save time and boost productivity.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  link: "blog-details.html?id = 1710000000000",
  date: "March 9, 2026",
  content: `
    <p>Artificial Intelligence continues to evolve rapidly, and 2026 has brought some incredibly powerful AI tools that are transforming industries. From content creation to coding assistance and automation, AI tools are helping individuals and businesses work faster and smarter. In this article, we will explore the top 5 AI tools in 2026 that are making the biggest impact.</p>

    <h4>1. ChatGPT</h4>
    <p>ChatGPT remains one of the most powerful AI assistants in 2026. It helps users generate content, write code, solve problems, and automate workflows. Developers, students, and professionals use it daily to improve productivity.</p>
    <ul>
      <li>Advanced conversational AI</li>
      <li>Code generation and debugging</li>
      <li>Content writing and research</li>
      <li>Learning and tutoring support</li>
    </ul>

    <h4>2. Midjourney</h4>
    <p>Midjourney is one of the most advanced AI image generation tools available today. Designers and creators use it to generate stunning visuals, concept art, and high-quality graphics within seconds.</p>
    <ul>
      <li>High quality AI generated images</li>
      <li>Great for designers and artists</li>
      <li>Creative concept generation</li>
      <li>Unique artistic styles</li>
    </ul>

    <h4>3. GitHub Copilot</h4>
    <p>GitHub Copilot has become a must-have tool for developers. It acts as an AI coding assistant that suggests code in real time, helping developers write better and faster programs.</p>
    <ul>
      <li>Real-time coding suggestions</li>
      <li>Supports multiple programming languages</li>
      <li>Helps beginners learn coding faster</li>
      <li>Improves development efficiency</li>
    </ul>

    <h4>4. Runway ML</h4>
    <p>Runway ML is revolutionizing video editing and AI-powered content creation. Creators can generate videos, remove backgrounds, and apply AI effects easily without advanced editing skills.</p>
    <ul>
      <li>AI video generation</li>
      <li>Background removal tools</li>
      <li>Creative video editing features</li>
      <li>Popular among content creators</li>
    </ul>

    <h4>5. Notion AI</h4>
    <p>Notion AI is transforming productivity and workspace management. It integrates AI directly into your notes and documents, helping you summarize content, generate ideas, and organize information effectively.</p>
    <ul>
      <li>Smart writing assistant</li>
      <li>Automatic summaries</li>
      <li>Task and workflow management</li>
      <li>Perfect for teams and individuals</li>
    </ul>

    <p>AI tools in 2026 are not just optional anymore; they are becoming essential for staying productive and competitive. Whether you are a developer, designer, student, or entrepreneur, these tools can help you save time, improve creativity, and work more efficiently.</p>

    <p>If you want to stay ahead in the AI era, exploring and learning these tools is a great place to start.</p>
  `
},

{
  id: 1710000000001,
  title: "AI Automation Tools: The Future of Smart Workflows in 2026",
  category: "AI Automation",
  excerpt: "AI automation tools are transforming how businesses and creators handle repetitive tasks. Discover how these tools save time, reduce errors, and boost productivity.",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  link: "blog-details.html?id=1710000000001",
  date: "March 9, 2026",
  content: `
    <p>Artificial Intelligence has changed the way people work, and AI automation tools are at the center of this transformation. These tools allow businesses, developers, and creators to automate repetitive tasks, saving valuable time and improving efficiency. In 2026, AI automation is no longer a luxury — it has become a necessity for staying competitive.</p>

    <h4>What Are AI Automation Tools?</h4>
    <p>AI automation tools are software platforms that use artificial intelligence to perform tasks automatically. These tasks can include data processing, content generation, customer support, marketing workflows, and even coding. By using machine learning and advanced algorithms, these tools reduce manual effort and improve productivity.</p>

    <h4>Key Benefits of AI Automation</h4>
    <ul>
      <li>Reduces repetitive manual work</li>
      <li>Saves time and operational costs</li>
      <li>Improves accuracy and efficiency</li>
      <li>Allows teams to focus on creative tasks</li>
      <li>Scales business operations easily</li>
    </ul>

    <h4>Popular AI Automation Tools</h4>
    <p>Several AI-powered platforms are helping businesses automate their workflows and processes. Some popular examples include tools for marketing automation, customer support bots, data analysis, and content generation.</p>
    <ul>
      <li>AI workflow automation platforms</li>
      <li>AI chatbots for customer service</li>
      <li>Automated content generation tools</li>
      <li>AI-powered email marketing automation</li>
    </ul>

    <h4>How Businesses Use AI Automation</h4>
    <p>Companies use AI automation in many areas such as handling customer queries, scheduling social media posts, analyzing large datasets, and managing digital marketing campaigns. This helps businesses operate faster while reducing human workload.</p>

    <h4>The Future of AI Automation</h4>
    <p>The future of AI automation looks extremely promising. As technology continues to improve, AI tools will become even smarter and more capable of handling complex tasks. Businesses that adopt automation early will gain a strong competitive advantage in the digital economy.</p>

    <p>Whether you are a developer, entrepreneur, or content creator, learning how to use AI automation tools can significantly increase your productivity and open new opportunities in the evolving tech landscape.</p>
  `
},

{
  id: 1710000000002,
  title: "Best Free AI Tools in 2026 That Can Boost Your Productivity",
  category: "AI Tools",
  excerpt: "Discover the best free AI tools in 2026 that can help you write content, design graphics, generate images, and automate tasks without paying anything.",
  image: "https://images.unsplash.com/photo-1744900647430-965ccc7a6078?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000002",
  date: "March 9, 2026",
  content: `
    <p>Artificial Intelligence has become one of the most powerful technologies in the modern world. In 2026, AI tools are helping people write content, design images, automate workflows, and even develop software. The best part is that many powerful AI tools are available for free. These tools allow students, creators, developers, and businesses to increase productivity without spending money.</p>

    <p>In this article, we will explore some of the best free AI tools in 2026 that can help you work faster and smarter.</p>

    <h4>1. ChatGPT</h4>
    <p>ChatGPT is one of the most popular AI tools in the world. It helps users write blog posts, generate ideas, learn new topics, and even write code. Many students and developers use ChatGPT daily to solve problems and improve productivity.</p>
    <ul>
      <li>Content writing and idea generation</li>
      <li>Programming help and debugging</li>
      <li>Learning support for students</li>
      <li>Research and brainstorming</li>
    </ul>

    <h4>2. Canva AI</h4>
    <p>Canva AI helps users design professional graphics easily. With AI-powered features, you can generate images, design social media posts, and create marketing materials quickly.</p>
    <ul>
      <li>AI image generation</li>
      <li>Automatic design suggestions</li>
      <li>Social media graphics</li>
      <li>Presentation creation</li>
    </ul>

    <h4>3. Grammarly AI</h4>
    <p>Grammarly is an AI-powered writing assistant that helps improve grammar, spelling, and writing clarity. It is widely used by students, bloggers, and professionals.</p>
    <ul>
      <li>Grammar correction</li>
      <li>Writing improvement suggestions</li>
      <li>Tone and clarity enhancement</li>
      <li>Professional writing support</li>
    </ul>

    <h4>4. Leonardo AI</h4>
    <p>Leonardo AI is a powerful AI image generator that allows users to create stunning artwork using simple text prompts. Designers and content creators use it to generate unique visuals.</p>
    <ul>
      <li>AI generated images</li>
      <li>Concept art creation</li>
      <li>Game asset design</li>
      <li>Creative artwork</li>
    </ul>

    <h4>5. Notion AI</h4>
    <p>Notion AI helps users manage tasks, create notes, summarize documents, and organize work efficiently. It is widely used by teams and individuals for productivity.</p>
    <ul>
      <li>AI writing assistant</li>
      <li>Note summarization</li>
      <li>Task management</li>
      <li>Workflow organization</li>
    </ul>

    <h4>Why You Should Start Using AI Tools</h4>
    <p>AI tools are not just a trend; they are becoming essential for modern productivity. These tools help automate repetitive tasks, improve creativity, and save valuable time. Whether you are a student, developer, content creator, or business owner, AI tools can help you work more efficiently.</p>

    <p>As AI technology continues to evolve, we will see even more powerful tools that make work easier and faster. Exploring these tools today can help you stay ahead in the digital world.</p>
  `
},

{
  id: 1710000000003,
  title: "AI Tools for Students: Study Smarter in 2026",
  category: "AI Education",
  excerpt: "AI tools are helping students learn faster and study more effectively. Discover the best ways students can use AI for homework, research, and productivity.",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000003",
  date: "March 9, 2026",
  content: `
    <p>Artificial Intelligence is transforming education. In 2026, students are using AI tools to study more efficiently, complete assignments faster, and understand complex topics.</p>

    <h4>How AI Helps Students</h4>
    <ul>
      <li>Explaining difficult topics</li>
      <li>Helping with homework</li>
      <li>Creating study notes</li>
      <li>Improving writing skills</li>
    </ul>

    <h4>Advantages for Students</h4>
    <ul>
      <li>Faster learning</li>
      <li>Better research support</li>
      <li>Improved productivity</li>
      <li>Access to unlimited knowledge</li>
    </ul>

    <p>Students who learn to use AI tools responsibly can gain a strong advantage in modern education.</p>
  `
},

{
  id: 1710000000004,
  title: "AI Tools for Content Creators in 2026",
  category: "Content Creation",
  excerpt: "Content creators are using AI tools to produce videos, blogs, and designs faster than ever. Learn how AI is transforming digital creativity.",
  image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000004",
  date: "March 9, 2026",
  content: `
    <p>Content creation has become easier with the help of AI tools. From writing scripts to generating images and editing videos, AI is helping creators produce professional content quickly.</p>

    <h4>What AI Can Do for Creators</h4>
    <ul>
      <li>Generate blog content</li>
      <li>Create AI images</li>
      <li>Edit videos automatically</li>
      <li>Generate social media captions</li>
    </ul>

    <p>These tools help creators focus on creativity while AI handles repetitive tasks.</p>
  `
},

{
  id: 1710000000005,
  title: "AI Tools for Developers: Coding Faster with AI",
  category: "AI Development",
  excerpt: "Developers are using AI-powered coding assistants to write better code and reduce development time. Explore how AI helps programmers in 2026.",
  image: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000005",
  date: "March 9, 2026",
  content: `
    <p>AI coding tools are transforming software development. In 2026, developers rely on AI assistants to write, debug, and optimize code.</p>

    <h4>Key Benefits</h4>
    <ul>
      <li>Faster coding</li>
      <li>Automatic error detection</li>
      <li>Code suggestions</li>
      <li>Learning support for beginners</li>
    </ul>

    <p>AI allows developers to focus more on solving problems rather than writing repetitive code.</p>
  `
},

{
  id: 1710000000006,
  title: "How AI Is Transforming Businesses in 2026",
  category: "AI Business",
  excerpt: "Businesses around the world are adopting AI tools to automate operations and improve decision making.",
  image: "https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000006",
  date: "March 9, 2026",
  content: `
    <p>Artificial Intelligence is helping businesses operate more efficiently by automating processes and analyzing data quickly.</p>

    <h4>Business Applications</h4>
    <ul>
      <li>Customer service chatbots</li>
      <li>Marketing automation</li>
      <li>Data analysis</li>
      <li>Sales optimization</li>
    </ul>

    <p>Companies that adopt AI early can gain a strong competitive advantage.</p>
  `
},

{
  id: 1710000000007,
  title: "AI Image Generator Tools You Should Try in 2026",
  category: "AI Design",
  excerpt: "AI image generators allow users to create stunning visuals within seconds. Discover how these tools are changing digital design.",
  image: "https://images.unsplash.com/photo-1767716134807-646b08712f6d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000007",
  date: "March 9, 2026",
  content: `
    <p>AI image generators are becoming extremely popular among designers and content creators.</p>

    <h4>What These Tools Can Do</h4>
    <ul>
      <li>Create artwork from text prompts</li>
      <li>Generate social media graphics</li>
      <li>Create concept art</li>
      <li>Assist designers</li>
    </ul>

    <p>These tools are changing how digital art and design are created.</p>
  `
},

{
  id: 1710000000008,
  title: "AI Writing Tools That Help You Create Content Faster",
  category: "AI Writing",
  excerpt: "AI writing assistants can generate blogs, articles, and marketing content quickly while maintaining quality.",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000008",
  date: "March 9, 2026",
  content: `
    <p>AI writing tools help bloggers, marketers, and students generate high-quality content within minutes.</p>

    <h4>Benefits</h4>
    <ul>
      <li>Fast content creation</li>
      <li>Grammar improvements</li>
      <li>Idea generation</li>
      <li>SEO assistance</li>
    </ul>

    <p>These tools help writers save time while maintaining creativity.</p>
  `
},

{
  id: 1710000000009,
  title: "Top AI Productivity Tools for Professionals",
  category: "Productivity",
  excerpt: "AI productivity tools help professionals organize tasks, manage time, and improve workflow efficiency.",
  image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "blog-details.html?id=1710000000009",
  date: "March 9, 2026",
  content: `
    <p>Professionals are using AI productivity tools to manage their schedules, automate workflows, and improve efficiency.</p>

    <h4>Features</h4>
    <ul>
      <li>Task automation</li>
      <li>Smart reminders</li>
      <li>Workflow optimization</li>
      <li>AI powered insights</li>
    </ul>
  `
}

]