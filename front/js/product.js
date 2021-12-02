let params = new URL(window.location.href).searchParams;
let id = params.get('id');

    fetch('http://localhost:3000/api/'+ id)
        .then((response) => {
            return response.json()
    })
        .then((response2) => {
            console.log(response2)
        })
    }