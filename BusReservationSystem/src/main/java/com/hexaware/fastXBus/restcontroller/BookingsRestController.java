package com.hexaware.fastXBus.restcontroller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.fastXBus.dto.BookingsDTO;
import com.hexaware.fastXBus.entity.Bookings;
import com.hexaware.fastXBus.entity.PaymentHistory;
import com.hexaware.fastXBus.exceptions.BookingNotFoundException;
import com.hexaware.fastXBus.service.IBookingsService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1/bookings")
public class BookingsRestController {
	@Autowired
	private IBookingsService booking;
	private static final Logger logger = LoggerFactory.getLogger(BookingsRestController.class);
	@PostMapping("/add")
	public Bookings createBookings(@RequestBody BookingsDTO bookingsdto) {
		logger.info("Booking created");
		return  booking.createBookings(bookingsdto);
	}
	
	@PutMapping("/update/{bookingId}")
	@PreAuthorize("hasAnyAuthority('ROLE_BUSOPERATOR','ROLE_USER')")
	public Bookings updatebookings(@RequestBody BookingsDTO bookingsdto,@PathVariable Long bookingId) {
		logger.info("Booking updated");
		return  booking.updateBookings(bookingsdto,bookingId);
	}
	@DeleteMapping("/delete/{bookingId}")
	@PreAuthorize("hasAnyAuthority('ROLE_BUSOPERATOR','ROLE_USER')")
	public void deleteBookings(@PathVariable Long bookingId)
	{
		logger.info("Booking deleted");
		 booking.deleteBookings(bookingId);
	
	}
	@GetMapping("/getById/{bookingId}")
	@PreAuthorize("hasAnyAuthority('ROLE_BUSOPERATOR','ROLE_USER')")
	public BookingsDTO getById(@PathVariable Long bookingId)throws BookingNotFoundException{
		
		
		if(bookingId==0) {
			throw new BookingNotFoundException(HttpStatus.BAD_REQUEST,"booking not found"+bookingId);
		}
		return  booking.getBookingsById(bookingId);	
		
	}
	@GetMapping("/getall")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
	public List<Bookings> getAll(){
		logger.info("All Booking ");
		return  booking.getAllBookings();	
		
	}
	@PostMapping("/create")
	@PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public ResponseEntity<Bookings> createBookingForUser(@RequestBody BookingsDTO bookingId) {
        // Ensure that the booking has the user ID properly set
        // You might want to set it based on the authenticated user or from the request
        
        Bookings createdBooking = booking.createBookings(bookingId);
        return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
    }
	@GetMapping("/{bookingId}/getpayments")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<PaymentHistory>> getPaymentsForBooking(@PathVariable Long bookingId) {
        List<PaymentHistory> payments = booking.getPaymentsForBooking(bookingId);
        return ResponseEntity.ok(payments);
    }

    // Endpoint to add a payment to a booking
    @PostMapping("/{bookingId}/payments")
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public ResponseEntity<String> addPaymentToBooking(@PathVariable Long bookingId,@RequestBody PaymentHistory payment) {
    	
    	booking.addPaymentToBooking(bookingId, payment);
        return ResponseEntity.status(HttpStatus.CREATED).body("Payment added ");
    }

}
