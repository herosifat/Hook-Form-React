import { useState } from "react";

const StateFullForm = () => {
    const [email,setEmail] =useState(null);
    const [password ,setPassword] = useState(null);
    const [name ,setName] =useState(null);

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(name,email,password);

    }

    const handleNameChange =e =>{
setName(e.target.value)
    }

 const handleEmailChange =e=>{
console.log(e.target.value);
setEmail(e.target.value)
    }

    const handlePassword = e=>{
setPassword(e.target.value)
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="name" name="name" /> <br />
                <input type="email"
               onChange={handleEmailChange}  name="email" id="" /> <br />
                <input onChange={handlePassword} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default StateFullForm;