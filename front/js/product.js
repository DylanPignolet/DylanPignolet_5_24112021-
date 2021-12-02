const params = new URLSearchParams(window.location.search)
let _id = params.get('_id');


    fetch('http://localhost:3000/api/'+ _id)
        .then((response) => {
            return response.json()
    })
        .then((response2) => {
            console.log(response2)
        })
    }