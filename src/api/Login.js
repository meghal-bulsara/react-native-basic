export async function logIn (user){
    return new Promise((resolve, reject) => {
        try {
            console.log('Inside Promise User', user);
            fetch('http://localhost:3000/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'user': user
                })
            }).then((response) => {
                response.json().then(
                    data => {
                    resolve(data);
                    }).catch(
                    error => {
                    reject(error);
                    })
                // console.log('successful', response);
                // return response;
                }).catch(function(error) {
                    console.log('failure', error);
                    return error;
                });
            } 
        catch (error){
            reject(error);
        }
    })
}