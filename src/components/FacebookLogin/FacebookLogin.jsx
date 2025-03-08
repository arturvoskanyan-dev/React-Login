import { useState } from "react"
import PopUp from "../PopUp/PopUp"
import "./FacebookLogin.css"

export default function FacebookLogin({ signInData }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [popUp, setPopUp] = useState(false)

    const newEmail = email.match(/[@]/);

    function btnClick(e) {
        e.preventDefault()
        newEmail && password ? alert("Registration was successful.") : null
    }

    function newAccount() {
        setPopUp(prev => !prev)
    }

    return (
        <div className="facebook-login">
            {popUp ? <PopUp click={newAccount} signInData={signInData} /> : null}
            <form className="container">
                <div className="login-input">

                    <input className={newEmail ? "" : "warner"} type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email or phone number"
                    />

                    <input className={password ? "" : "warner"} type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password" 
                    />

                </div>
                <div className="login-btn">
                    <button onClick={btnClick}>Log In</button>
                    <button onClick={(e) => { e.preventDefault(); newAccount() }}>Create new account</button>
                </div>
            </form>
        </div>
    )
}
