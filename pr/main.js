
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.appendChild(wrap);

        for (const user of users) {
            let innerDiv = document.createElement('div');
            wrap.appendChild(innerDiv);
            innerDiv.classList.add('user');

            innerDiv.innerHTML =`
            <h3>Id: ${user.id} Name: ${user.name} </h3>
            `;

            // let a = document.createElement('a');
            // a.href = `user-details.html?id=${user.id}`;
            // a.innerText = 'user details';
            // innerDiv.appendChild(a);


            let button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'user details';
            innerDiv.appendChild(button);

            button.onclick = () =>{
                // let a = document.createElement('a');
                // a.href = `user-details.html?id=${user.id}`;
                // a.innerText = 'user details';
                // //innerDiv.appendChild(a);
                // button.appendChild(a);

                location.href = `user-details.html?id=${user.id}`;
            }

        }
    })

