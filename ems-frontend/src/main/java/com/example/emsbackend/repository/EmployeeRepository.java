package com.example.emsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.emsbackend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
