let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(value => value.json())
.then(user => {
    let div = document.createElement('div');
    div.classList.add('wrap');
    div.innerHTML = ` <h4>id: ${user.id}<br>
                          name: ${user.name}<br>
                          username: ${user.username}<br>
                          email: ${user.email}</h4>

                          <h4>address: <br>
                          street: ${user.address.street}<br>
                          suite: ${user.address.suite}<br>
                          city: ${user.address.city}<br>
                          zipcode: ${user.address.zipcode}</h4>

                          <h4>geo:<br>
                          Lat: ${user.address.geo.lat} <br>
                          Lng: ${user.address.geo.lng}</h4>

                          <h4>phone: ${user.phone}<br>
                          website: ${user.website}<br>

                          company name: ${user.company.name}<br>
                          company catchPhrase: ${user.company.catchPhrase}<br>
                          company bs: ${user.company.bs}</h4>`;

    document.body.appendChild(div);

let button = document.createElement('button');
button.innerText = 'post of current user';
button.classList.add('button');
div.appendChild(button);

button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let wrapPosts = document.createElement('div');
            wrapPosts.classList.add('wrapPosts');
            div.appendChild(wrapPosts);
            for (const post of posts) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('inner');
                postDiv.innerText = post.title;
                wrapPosts.appendChild(postDiv);
                button.disabled = true;


                let buttonPost = document.createElement('button');
                buttonPost.innerText = 'post details';
                postDiv.appendChild(buttonPost);

                //post-details.html
                buttonPost.onclick = () => {
                    location.href = `post-details.html?id=${post.id}`;
                }



            }

        })

}


});



