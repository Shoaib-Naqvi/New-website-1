function fetchUserAxios() {
    document.getElementById('axios-result').innerText = 'Loading...';
    axios.get('https://randomuser.me/api/')
        .then(function(response) {
            const user = response.data.results[0];
            const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                          <strong>Email:</strong> ${user.email}<br>
                          <img src="${user.picture.medium}" alt="User Picture">`;
            document.getElementById('axios-result').innerHTML = html;
        })
        .catch(function(error) {
            document.getElementById('axios-result').innerText = 'Error: ' + error;
        });
}
