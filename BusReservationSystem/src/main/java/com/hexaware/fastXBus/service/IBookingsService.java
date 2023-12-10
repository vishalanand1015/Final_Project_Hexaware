package com.hexaware.fastXBus.service;

import java.util.List;

import com.hexaware.fastXBus.dto.BookingsDTO;
import com.hexaware.fastXBus.entity.Bookings;
import com.hexaware.fastXBus.entity.PaymentHistory;



public interface IBookingsService {
	
	public Bookings createBookings(BookingsDTO bookingsdto);
	public Bookings updateBookings(BookingsDTO bookingsdto,Long bookingId);
	public void  deleteBookings(Long bookingId);
	public BookingsDTO getBookingsById(Long bookingId);
	public List<Bookings>getAllBookings();
    List<PaymentHistory> getPaymentsForBooking(Long bookingId);
    
    void addPaymentToBooking(Long bookingId, PaymentHistory payment);

}
