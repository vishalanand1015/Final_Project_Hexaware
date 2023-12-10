package com.hexaware.fastXBus.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hexaware.fastXBus.dto.BookingsDTO;
import com.hexaware.fastXBus.entity.Bookings;
import com.hexaware.fastXBus.entity.PaymentHistory;
import com.hexaware.fastXBus.entity.UserCustomers;
import com.hexaware.fastXBus.repository.IBookingsRepository;
import com.hexaware.fastXBus.repository.IPaymentHistoryRepository;

@Service
public class BookingsService implements IBookingsService {
	@Autowired
	private IBookingsRepository repository;
	@Autowired
    private IPaymentHistoryRepository payrepository;
	@Autowired
	RestTemplate restTemplate;
	private static final Logger logger = LoggerFactory.getLogger(BookingsService.class);
	@Override
	public Bookings createBookings(BookingsDTO bookingsdto) {
		Bookings booking=new Bookings();
	
		booking.setBookingId(bookingsdto.getBookingId());
		booking.setBusId(bookingsdto.getBusId());
		booking.setSourceCity(bookingsdto.getSourceCity());
		booking.setDestinationCity(bookingsdto.getDestinationCity());
		booking.setBookingDate(bookingsdto.getBookingDate());
		booking.setAmount(bookingsdto.getAmount());
	
		return repository.save(booking);
	}

	@Override
	public Bookings updateBookings(BookingsDTO bookingsdto, Long bookingId) {
	    // Find the existing booking by ID
	    Optional<Bookings> bookingOptional = repository.findById(bookingId);
	    
	    if (bookingOptional.isPresent()) {
	        // Get the existing booking
	        Bookings existingBooking = bookingOptional.get();
	        
	        // Update the fields with new values from DTO
	       
	        existingBooking.setBusId(bookingsdto.getBusId());
	        existingBooking.setSourceCity(bookingsdto.getSourceCity());
	        existingBooking.setDestinationCity(bookingsdto.getDestinationCity());
	        existingBooking.setBookingDate(bookingsdto.getBookingDate());
	        existingBooking.setAmount(bookingsdto.getAmount());
		
	        
	        // Save the updated booking
	        return repository.save(existingBooking);
	    } else {
	    	logger.error("Booking not found");
	        return null;
	    }
	}

	@Override
	public void deleteBookings(Long bookingId) {
		
		repository.deleteById(bookingId);
		
	}

	@Override
	public BookingsDTO getBookingsById(Long bookingId) {
		
		Bookings booking=repository.findById(bookingId).orElse(new Bookings());
		return new BookingsDTO(booking.getBookingId(),booking.getBookingDate(),booking.getSourceCity(),booking.getDestinationCity(),booking.getAmount(),booking.getBusId());
	}

	@Override
	public List<Bookings> getAllBookings() {
	
		return repository.findAll(Sort.by("bookingDate"));
	}
	public List<PaymentHistory> getPaymentsForBooking(Long bookingId) {
        Optional<Bookings> optionalBooking = repository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Bookings booking = optionalBooking.get();
            return booking.getPaymentHistoryList();
        }
        return Collections.emptyList();
    }

	
    public void addPaymentToBooking(Long bookingId, PaymentHistory payment) {
        Optional<Bookings> optionalBooking = repository.findById(bookingId);
        optionalBooking.ifPresent(booking -> {
            payment.setBooking(booking);
            payrepository.save(payment);
        });
    }
	

}
