export async function createUser(user, token) {
    return new Promise((resolve, reject) => {
        try {
            console.log('User', user);
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-Token': token
                },
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
            }).catch(function (error) {
                console.log('failure', error);
                return error;
            });
        }
        catch (error) {
            reject(error);
        }
    })
}

//fetch all users

export function allUsers(token) {
    console.log('Token in all user api', token)
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        }).then((response) => {
            response.json().then(
                data => {
                    resolve(data);
                })
        }).catch((error) => {
            reject(error);
        })
    })
}


//update user

export function updateUser(user, token) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            },
            body: JSON.stringify({ 'user': user })
        }).then((response) => {
            response.json().then(
                data => {
                    resolve(data);
                })
        }).catch((error) => {
            reject(error);
        });
    });
}