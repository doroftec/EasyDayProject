package com.easyday.entities;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name="invoice")
@Table(name="invoice")
public class InvoiceEntity implements Serializable{

	private static final long serialVersionUID = 8844633250388090072L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID_INVOICE")
	private int id;
	
	@Column(name="NR_INVOICE")
	private int nr;
	
	@ManyToOne
	@JoinColumn(name="ID_SUPPLIER")
	private SupplierEntity supplier;
	
	@Column(name="TOTAL_TO_PAY")
	private double totalToPay;
	
	@Column(name="DUE_DATE")
	private Date dueDate;
	
	@Column(name="BLOB_INVOICE")
	private Blob blobInvoice;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getNr() {
		return nr;
	}
	public void setNr(int nr) {
		this.nr = nr;
	}
	public SupplierEntity getSupplier() {
		return supplier;
	}
	public void setSupplier(SupplierEntity supplier) {
		this.supplier = supplier;
	}
	public double getTotalToPay() {
		return totalToPay;
	}
	public void setTotalToPay(double totalToPay) {
		this.totalToPay = totalToPay;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public Blob getBlobInvoice() {
		return blobInvoice;
	}
	public void setBlobInvoice(Blob blobInvoice) {
		this.blobInvoice = blobInvoice;
	}
}
