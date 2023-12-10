package com.hexaware.fastXBus.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;

/*
 * Author:Vishal Anand
 * Date: 20-11-23
 */


@Entity
public class Bookings implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;
	 

	  
	    private LocalDate bookingDate;

	    
	    private String sourceCity;

	   
	    private String destinationCity;

	    private double amount;
	    private int busId;
	
	
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserCustomers user;
	@OneToMany(mappedBy = "booking")
    private List<PaymentHistory> paymentHistoryList;
	public Bookings() {
		super();
	}
	
	public Bookings(Long bookingId, LocalDate bookingDate, String sourceCity, String destinationCity, double amount,
			int busId, UserCustomers user, List<PaymentHistory> paymentHistoryList) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.sourceCity = sourceCity;
		this.destinationCity = destinationCity;
		this.amount = amount;
		this.busId = busId;
		this.user = user;
		this.paymentHistoryList = paymentHistoryList;
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
	public UserCustomers getUser() {
		return user;
	}
	public void setUser(UserCustomers user) {
		this.user = user;
	}
	public List<PaymentHistory> getPaymentHistoryList() {
		return paymentHistoryList;
	}
	public void setPaymentHistoryList(List<PaymentHistory> paymentHistoryList) {
		this.paymentHistoryList = paymentHistoryList;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
