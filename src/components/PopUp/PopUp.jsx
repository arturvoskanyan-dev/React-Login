import { useState } from "react"
import "./PopUp.css"

export default function PopUp({ click, logInData }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([]);

    const newEmail = email.match(/[@]/)
    const signInData =  name && lastName && newEmail && password

    function btnClick() {
        if (signInData) {
            const userData = { name, lastName, email, password }

            setData(prev => {
                const updatedData = [...prev, userData];
                localStorage.setItem("data", JSON.stringify(updatedData))
                return updatedData
            });
        }
    }

    return (
        <div className="pop-up">
            <form className="container">
                <div className="title">
                    <h3>Create a new account</h3>
                    <p>It’s quick and easy.</p>
                </div>
                <div className="create-account">

                    <input type="text" className={name ? "" : "warner"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First Name"
                    />

                    <input type="text" className={lastName ? "" : "warner"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />

                    <input type="email" className={newEmail ? "" : "warner"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />

                    <input type="password" className={password ? "" : "warner"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="new password"
                    />

                </div>
                <div className="pop-up-btn">
                    <button onClick={(e) => { e.preventDefault(); signInData ? click() : ""; btnClick() }}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
