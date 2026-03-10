document.addEventListener("DOMContentLoaded", () => {
    // 1. URL se ID nikalna (e.g., blog-details.html?id=123)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // 2. blogData mein se wo post dhoondna
    const post = blogPosts.find(p => p.id == postId);

    if (post) {
        // 3. UI update karna
        document.title = post.title;
        document.getElementById("pageTitle").innerText = post.title;
        document.getElementById("breadcrumbTitle").innerText = post.title;
        document.getElementById("mainTitle").innerText = post.title;
        document.getElementById("blogCategory").innerText = post.category;
        document.getElementById("blogDate").innerText = post.date;
        document.getElementById("mainImage").src = post.image;
        document.getElementById("blogBody").innerHTML = post.content;
    } else {
        // Agar post na mile
        document.getElementById("blogBody").innerHTML = "<h2>Oops! Post not found.</h2>";
    }
});
