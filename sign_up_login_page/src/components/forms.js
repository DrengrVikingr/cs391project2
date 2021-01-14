import React from 'react'

export const Login = () => {
    return (
        <div>
            <form class= "login" method="POST" action="../home/index.html" onsubmit="return login()">
                <input type="email" name="email_address_login" placeholder="E-mail Address" required></input>
                <br></br>
                <input type="password" name="password_login" placeholder="Password" required></input>
                <br></br>
                <button type="submit">Login</button>
                <br></br>
                <p id="login_error"></p>
			</form>
        </div>
    )
}

export const SignUp = () => {
    return (
        <div>
			<form class= "sign_up" method="POST" onsubmit="return sign_up()">
                <input type="email" name="email_address_sign_up" placeholder="E-mail Address" required></input>
                <br></br>
                <input type="text" name="user_name" placeholder="Name" required></input>
                <br></br>
                <input type="text" name="user_surname" placeholder="Surname" required></input>
                <br></br>
                <label for="birthdate" style={{color: "#665F59", margin: "10px"}}>Birthdate</label>
                <input type="date" id="birthdate" name="date_of_birth" style={{color: "#665F59"}} min="1930-01-01" max="2010-12-31" required></input>
                <br></br>
                <input type="password" name="password_sign_up" placeholder="Password" required></input>
                <br></br>
                <button type="submit" onclick="signUp()">Sign Up</button>
                <br></br>
                <p id="sign_up_error"></p>
			</form>
        </div>
    )
}
