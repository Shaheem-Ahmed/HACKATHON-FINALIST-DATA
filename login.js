import { useState } from "react";
import SMButton from "../components/button";
import { Link } from "react-router-dom";
import SMInput from "../components/input";

function LOGIN(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = () => {
        const obj = {
            email,
            password,
            
        }
        console.log(obj)
    };
    return(
        <>
        <h1>LOGIN</h1>
        <div>
            <SMInput label='ENTER EMAIL' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
            <SMInput 
            label='ENTER PASSWORD'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
            IF YOU ARE NEW <Link to="/signup">CREATE ACCOUNT</Link>
<SMButton label='LOGIN' onClick={loginUser} />

         </div>   
        </>
    )
}

export default LOGIN;