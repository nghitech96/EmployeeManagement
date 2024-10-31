import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();
    const [loading, setLoading] = useState(true); // Thêm loading state

    useEffect(() => {
      getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees()
        .then((response) => {
            setEmployees(response.data);
            setLoading(false); // Đặt loading thành false sau khi lấy dữ liệu
        })
        .catch((error) => {
            console.error(error);
            setLoading(false); // Đặt loading thành false nếu có lỗi
        })
    }


    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator('/edit-employee/${id}')
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees()
        }).catch(error => {
            console.error(error);
        });
    }

    // Dữ liệu giả (dummy data) để kiểm tra
    const dummyData = [
        { id: 1, firstName: "Nghi", lastName: "Dang", email: "nghi@gmail.com" },
        { id: 2, firstName: "Hoang", lastName: "Le", email: "hoang@gmail.com" },
        { id: 3, firstName: "Son", lastName: "Dang", email: "son@gmail.com" },
    ];

    return (
        <section className='container-fluid'>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            {loading ? ( // Hiển thị loading khi đang lấy dữ liệu
                <p>Loading...</p>
            ) : (
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.length > 0 ? (
                                employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No employees found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            )};
        </section>
    );
};

export default ListEmployeeComponent;
