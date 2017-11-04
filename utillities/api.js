let api = {
    getToken(){
        let url = "https://accounts.spotify.com/api/token";
        let body = {
            'grant_type' : 'client_credentials'
        };
        let formBody = [];
        for (let property in body) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        return fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic NDk4ZDkyNDA0ZjEyNGI3ZmIwNzVkMDhhNmZkN2JkMTU6ZTFkMzc3OWYxM2U1NDA5MmJhMGIwY2E1OTZlNDllYzk=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then((response) => response.json())
            .then(function(resJson) {
                return resJson;
        })
            .catch((error) => {
            console.error("Errors: " + error);
        });
    },

};


module.exports = api;
