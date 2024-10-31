import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee, getEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();
    const [error, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [id]);

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email };
            console.log(employee);

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch((error) => {
                    console.error(error);
                });
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch((error) => {
                    console.error(error);
                });
            }
        }
    }


    function validateForm() {
        let valid = true;
        const errorsCopy = { ...error };

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        return id ? 'Update Employee' : 'Add Employee';
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-24 offset-md-24'>
                    <h2 className='text-center'>{pageTitle()}</h2>
                    <div className='card-body'>
                        <form onSubmit={saveOrUpdateEmployee}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='email'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${error.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error.email && <div className='invalid-feedback'>{error.email}</div>}
                            </div>

                            <button type='submit' className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
