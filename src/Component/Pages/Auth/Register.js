import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            if(!uname || !email || !password || !phone){
                return toast.error("All fields are required");
            }
            console.log('auth form data',uname + email + password + phone);
            setUname('');
            setEmail('');
            setPassword('');
            setPhone('');
            
            toast.success("Registration Successful");
            navigation('/register');
            // add submission logic here
        }catch(error){
            console.log(error)
        }
    };

    return (
        <>
            <div className="mb-3">
                <div className='row'>
                    <div className='col-md-7'>
                        <img src='' alt='auth' className='rounded' height={"100%"} width={"100%"} />
                    </div>
                    <div className='col-md-5 bg-dark rounded-3 p-4'>
                        <h3 className='mb-3 text-center text-white mt-3'>
                            Registration Form
                        </h3>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputName' className='form-label'>Enter Your Name</label>
                            <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} className='form-control' placeholder='Enter Name' id='exampleInputName' aria-describedby='nameHelp' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputEmail' className='form-label'>Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Enter email' id='exampleInputEmail' aria-describedby='emailHelp' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputPhone' className='form-label'>Phone Number</label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control' placeholder='Enter PhoneNumber' id='exampleInputPhone' aria-describedby='phoneHelp' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputPassword' className='form-label'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Enter Password' id='exampleInputPassword' aria-describedby='passwordHelp' />

                        </div>
                        <button type='submit' className='btn btn-primary w-100 mt-3 mb-3' onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
