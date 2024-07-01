import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userContext from './userContext';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, flag, setFlag } = useContext(userContext);

    const [userDATA, setUserDATA] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        phoneno: '',
        city: '',
        state: '',
        sports_preference: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setUserDATA({ ...userDATA, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (flag) {
            navigate('/login');
            setFlag(false);
        }
    }, [flag, navigate, setFlag]);

    const handleSignUp = async () => {
        try {
            await createUser(userDATA);
            setUserDATA({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                age: '',
                phoneno: '',
                city: '',
                state: '',
                sports_preference: ''
            });
        } catch (error) {
            console.error('Error creating user:', error);
            setError('Failed to create user. Please try again.');
        }
    };

    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <h2>New User</h2>
                <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                {error && <p className="error">{error}</p>}
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='Enter your first name'
                        onChange={handleChange}
                        value={userDATA.firstName}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Enter your last name'
                        onChange={handleChange}
                        value={userDATA.lastName}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                        onChange={handleChange}
                        value={userDATA.email}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={handleChange}
                        value={userDATA.password}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phoneno'>Phone</label>
                    <input
                        type='text'
                        id='phoneno'
                        name='phoneno'
                        placeholder='Enter your phone number'
                        onChange={handleChange}
                        value={userDATA.phoneno}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age</label>
                    <input
                        type='number'
                        id='age'
                        name='age'
                        placeholder='Enter your age'
                        onChange={handleChange}
                        value={userDATA.age}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='Enter your city'
                        onChange={handleChange}
                        value={userDATA.city}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='Enter your state'
                        onChange={handleChange}
                        value={userDATA.state}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='sports_preference'>Sport Preference</label>
                    <select
                        id='sports_preference'
                        name='sports_preference'
                        onChange={handleChange}
                        value={userDATA.sports_preference}
                    >
                        <option>Select Your Sport Preference</option>
                        {['Cricket', 'Football', 'Badminton', 'Athletics', 'Volleyball', 'Rugby'].map(sport => (
                            <option key={sport} value={sport}>{sport}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
