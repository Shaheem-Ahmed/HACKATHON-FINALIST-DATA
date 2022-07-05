import { useState } from "react";
import SMButton from "../components/button";
import { Link } from "react-router-dom";
import SMInput from "../components/input";
import { SUP } from "../firebase/firebasemethod";
import SimpleSnackbar from "../components/BAR";

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [messageBar, setMessageBar] = useState(false)
    const [MessageBarMessage, setMessageBarMessage] = useState(false)
    const SignupUser = () => {
        const obj = {
            email,
            password,
            username,
        };
        if(!email){
           alert("ENTER EMAIL")
            return;
        }
        if(!password){
            alert("ENTER PASSWORD")
            return;
        }
        SUP(obj)
    };
    return(
        <>
        {messageBar && <SimpleSnackbar open={messageBar} message={MessageBarMessage}/>}
        <h1>Signup</h1>
        <div>
            <SMInput label='USERNAME' onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div>
            <SMInput 
            label='ENTER PASSWORD'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
            <SMInput 
            label='ENTER EMAIL'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
ALREADY HAVE AN ACCOUNT<Link to="/login">LOGIN</Link>
<SMButton label='Signup' onClick={SignupUser} />

         </div>   
        </>
    )
}

export default Signup;