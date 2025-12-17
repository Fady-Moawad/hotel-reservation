const name = document.getElementById('name')
const email = document.getElementById('email')
const checkInDate = document.getElementById('checkInDate')
const checkOutDate = document.getElementById('checkOutDate')
const type = document.getElementById('type')
const display = document.getElementById('display')
const send = document.getElementById('send')
const btn = document.getElementById('btn')
let errors = []



// send data
const reservation = async () => {
    btn.innerHTML = `<button class="submit-btn" disabled>⟳</button>`
    const dataBody = {
        name: name.value,
        email: email.value,
        checkInDate: checkInDate.value,
        checkOutDate: checkOutDate.value,
        type: type.value,
    }
    try {
        //send data with post method
        if (localStorage.getItem('token') != null) {
            const result = await fetch("http://localhost:4004/api/hotel/reservation", {
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
                    errors = []
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
                    btn.innerHTML = `<button id="send" type="button" onclick="reservation()" class="submit-btn">Complete Reservation</button>`

                }
                return
            }
            //move to home
            window.location.href = "../index.html";
        }
        else {
            display.innerHTML = `<h4 >Register frist <a href="register.html"> register now</a></h4>`
            btn.innerHTML = `<button id="send" type="button" onclick="reservation()" class="submit-btn">Complete Reservation</button>`

        }



    } catch (error) {
        display.innerHTML = `<h4 id="error">some thing wrong in connection server</h4>`
        btn.innerHTML = `<button id="send" type="button" onclick="reservation()" class="submit-btn">Complete Reservation</button>`

    }


}