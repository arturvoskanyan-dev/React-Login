import { useState } from "react"
import "./PopUp.css"

export default function PopUp({ click, signInData }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([]);

    const newEmail = email.match(/[@]/)
    const signIn =  name && lastName && newEmail && password

    function btnClick() {
        if (signIn) {
            const userData = { name, lastName, email, password }

            setData(prev => {
                const updatedData = [...prev, userData];
                localStorage.setItem("data", JSON.stringify(updatedData))
                return updatedData
            });
        }
    }

    const newData = signInData.map((elem) => ({
        ...elem,
        className: 
            elem.className == "name" ? name :
            elem.className == "lastName" ? lastName : 
            elem.className == "email" ? newEmail : password,
        value: elem.value == "name" ? name : 
            elem.value == "lastName" ? lastName : 
            elem.value == "email" ? email : password,
        onChange: 
            elem.onChange == "setName" ? (e) => setName(e.target.value) : 
            elem.onChange == "setLastName" ? (e) => setLastName(e.target.value) :
            elem.onChange == "setEmail" ? (e) => setEmail(e.target.value) : (e) => setPassword(e.target.value)
        })
    )


    return (
        <div className="pop-up">
            <form className="container">
                <div className="title">
                    <h3>Create a new account</h3>
                    <p>It’s quick and easy.</p>
                </div>
                <div className="create-account">
                    {
                        newData.map((elem, index) => {
                            return (
                                <input className={elem.className ? "" : "warner"} 
                                    type={elem.type} key={index}
                                    value={elem.value} 
                                    onChange={elem.onChange}
                                    placeholder={elem.placeholder}
                                />
                            )
                        })
                    }
                </div>
                <div className="pop-up-btn">
                    <button onClick={(e) => { e.preventDefault(); signIn ? click() : ""; btnClick() }}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
