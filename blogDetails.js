document.addEventListener("DOMContentLoaded", () => {
    // 1. URL se ID nikalna
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // 2. Data dhoondna (blogPosts array blogData.js se aa raha hai)
    const post = blogPosts.find(p => p.id == postId);

    if (post) {
        // 3. HTML Elements ko dhoondna aur data set karna (Safe way)
        const elements = {
            mainTitle: document.getElementById('mainTitle'),
            blogBody: document.getElementById('blogBody'),
            mainImage: document.getElementById('mainImage'),
            blogCategory: document.getElementById('blogCategory'),
            blogDate: document.getElementById('blogDate'),
            breadcrumbTitle: document.getElementById('breadcrumbTitle'),
            pageTitle: document.getElementById('pageTitle')
        };

        // Har element ko check karke data insert karna
        if (elements.mainTitle) elements.mainTitle.innerText = post.title;
        if (elements.blogBody) elements.blogBody.innerHTML = post.content;
        if (elements.mainImage) {
            elements.mainImage.src = post.image;
            elements.mainImage.alt = post.title;
        }
        if (elements.blogCategory) elements.blogCategory.innerText = post.category;
        if (elements.blogDate) elements.blogDate.innerText = post.date;
        if (elements.breadcrumbTitle) elements.breadcrumbTitle.innerText = post.title;
        if (elements.pageTitle) elements.pageTitle.innerText = post.title + " - Top AI Tools Hub";

    } else {
        // Agar post nahi mili toh error handle karein
        const body = document.getElementById('blogBody');
        if (body) {
            body.innerHTML = `<div class="alert alert-danger text-center">
                <h3>Oops! Blog Post Not Found</h3>
                <p>The post you are looking for does not exist.</p>
                <a href="blog.html" class="btn btn-primary">Back to Blogs</a>
            </div>`;
        }
    }
});
