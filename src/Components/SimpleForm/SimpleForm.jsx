const SimpleForm = () => {
    const handleSubmit =e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.Phone.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="text" name="Phone" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;