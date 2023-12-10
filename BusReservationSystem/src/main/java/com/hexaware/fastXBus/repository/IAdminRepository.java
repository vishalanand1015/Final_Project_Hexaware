package com.hexaware.fastXBus.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.fastXBus.dto.AdminDTO;
import com.hexaware.fastXBus.entity.Admin;


@Repository
public interface IAdminRepository extends JpaRepository<Admin,Long > {

	Optional<Admin> findByFirstname(String firstname);
}
