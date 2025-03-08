import { useState } from "react"
import PopUp from "../PopUp/PopUp"
import "./FacebookLogin.css"

export default function FacebookLogin({ logInData }) {
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

    const newData = logInData.map((elem) => ({
        ...elem,
        className: elem.className == "newEmail" ? newEmail : password,
        value: elem.value == "email" ? email : password,
        onChange: elem.onChange == "setEmail" ? (e) => setEmail(e.target.value) : (e) => setPassword(e.target.value)
    }))

    return (
        <div className="facebook-login">
            {popUp ? <PopUp click={newAccount} logInData={logInData} /> : null}
            <form className="container">
                <div className="login-input">

                    {
                        newData.map((elem, index) => {
                            return (
                                <input className={elem.className ? "" : "warner"} type={elem.type} key={index}
                                    value={elem.value} 
                                    onChange={elem.onChange}
                                    placeholder={elem.placeholder}
                                />
                            )
                        })
                    }

                    {/* <input className={newEmail ? "" : "warner"} type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email or phone number"
                    />

                    <input className={password ? "" : "warner"} type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password" 
                    /> */}

                </div>
                <div className="login-btn">
                    <button onClick={btnClick}>Log In</button>
                    <button onClick={(e) => { e.preventDefault(); newAccount() }}>Create new account</button>
                </div>
            </form>
        </div>
    )
}
