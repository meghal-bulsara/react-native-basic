export async function CreateAccount (account){
    return new Promise((resolve, reject) => {
        try {
            console.log('Account', account);
            fetch('http://localhost:3000/accounts',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'account': account
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