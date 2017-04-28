package com.easyday.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity(name="SUPPLIER")
@Table(name="SUPPLIER")
public class SupplierEntity implements Serializable{
	
	private static final long serialVersionUID = -6898538636854542219L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID_SUPPLIER")
	private int id;
	
	@Column(name="NAME_SUPPLIER")
	private String name;
	
	@Column(name="SERVICE_SUPPLIER")
	private String service;
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="supplier")
	private List<InvoiceEntity> invoices;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public List<InvoiceEntity> getInvoices() {
		return invoices;
	}
	public void setInvoices(List<InvoiceEntity> invoices) {
		this.invoices = invoices;
	}
}
