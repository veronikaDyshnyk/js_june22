let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(value => value.json())
    .then(post =>{
        let postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <p>Id: ${post.id} </p>
        <p>Title: ${post.title} </p>
        <p>Body: ${post.body} </p>
        `;
        document.body.appendChild(postDiv);



        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(comments => {
                let commentsWrap = document.createElement('div');
                commentsWrap.classList.add('commentsWrap');
                postDiv.appendChild(commentsWrap);
                for (const comment of comments) {
                    let commentDiv = document.createElement('div');
                    commentsWrap.appendChild(commentDiv);
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `
                    <p>id: ${comment.id}</p>
                    <p>name: ${comment.name}</p>
                    <p>email: ${comment.email}</p>
                    <p>body: ${comment.body}</p>
                    `;

                }
            })
    })
