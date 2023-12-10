package com.hexaware.fastXBus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.fastXBus.entity.Bookings;


@Repository
public interface IBookingsRepository extends JpaRepository<Bookings,Long > {

}
