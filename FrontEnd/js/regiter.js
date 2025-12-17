const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const display = document.getElementById('display')
const send = document.getElementById('send')
const btn = document.getElementById('btn')
let errors =[]



// send data
const register = async () => {
    btn.innerHTML = `<button disabled>⟳</button>`
    const dataBody = {
        name: name.value,
        email: email.value,
        password: password.value,
    }
    try {
        //send data with post method
        const result = await fetch("http://localhost:4004/api/hotel/register", {
            method: "POST", headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dataBody)
        });

        //convert result to json
        const data = await result.json();
        //store errors
        if (data.status == 'error') {            
            if (data.data[0].errors) {
                errors=[]
                for (let i = 0; i < data.data[0].errors.length; i++) {
                    errors.push(data.data[0].errors[i].msg);
                }
            } else {
                errors = data.data;
            }

            //display errors
            display.innerHTML = ``
            for (let i = 0; i < errors.length; i++) {
                display.innerHTML += `<h4 id="error">${errors[i]}</h4>`
                btn.innerHTML = `<button onclick="register()" id="send" type="button">Sign Up</button>`
            }
            return
        }
        //store useful data
        localStorage.setItem('token', data.data)
        localStorage.setItem('name', name.value[0])
        //move to home
        window.location.href = "../index.html";
    } catch (error) {      
        display.innerHTML = `<h4 id="error">some thing wrong in connection server</h4>`
        btn.innerHTML = `<button onclick="register()" id="send" type="button">Sign Up</button>`

    }


}