function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}
function displayUsers(users) {
    const ul = document.getElementById('users');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} & email: ${user.email}`;
        ul.appendChild(li);        
    }
}
