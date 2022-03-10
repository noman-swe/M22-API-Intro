function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h3> ${post.title}</h3>
        <p>${post.body}</p>`;
        postContainer.appendChild(div);
        console.log(post.title);

    }
}


// post[] ******prb
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts'), {
        method: 'POST',
        body: JSON.stringify({
            title: 'My New Post',
            body: 'This is my posts',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; chaset=UTF-8'
        }
    }
        .then(res => res.json())
        .then(data => console.log(data))

}