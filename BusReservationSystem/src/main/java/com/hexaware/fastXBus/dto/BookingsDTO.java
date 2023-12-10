package com.hexaware.fastXBus.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;

public class BookingsDTO {
	
	private Long bookingId;
	 

	  
    private LocalDate bookingDate;

    
    private String sourceCity;

   
    private String destinationCity;

    private double amount;
    private int busId;
	
	public BookingsDTO() {
		super();
	}

	public BookingsDTO(Long bookingId, LocalDate bookingDate, String sourceCity, String destinationCity, double amount,
			int busId) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.amount = amount;
		this.busId = busId;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getSourceCity() {
		return sourceCity;
	}

	public void setSourceCity(String sourceCity) {
		this.sourceCity = sourceCity;
	}

	public String getDestinationCity() {
		return destinationCity;
	}

	public void setDestinationCity(String destinationCity) {
		this.destinationCity = destinationCity;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getBusId() {
		return busId;
	}

	public void setBusId(int busId) {
		this.busId = busId;
	}
	

	
}
