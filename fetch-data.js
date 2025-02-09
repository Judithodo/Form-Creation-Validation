async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data')

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        users.array.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = John;
            userList.appendChild(listItem);
        });
    }catch{
        dataContainer.innerHTML='';
        dataContainer.textContent= 'Failed to load user data';
    }

    document.addEventListener('DOMContentLoaded', fetchUserData);
}