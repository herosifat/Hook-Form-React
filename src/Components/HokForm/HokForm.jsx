import { useState } from "react";
import useInputState from "../../hooks/useInputState";

const HokForm = () => {

    // const nameState =useInputState('rojoni hook')
    const emailState =useInputState('rojoni@gmail.com')


    const handleSubmit =e =>{
        console.log('form data',emailState.value)
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="name" name="name" /> <br /> */}
                <input {...emailState} type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default HokForm;