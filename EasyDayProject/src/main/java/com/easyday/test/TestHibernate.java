package com.easyday.test;

import java.util.List;

import com.easyday.dao.InvoiceDAO;
import com.easyday.dao.SupplierDAO;
import com.easyday.entities.InvoiceEntity;
import com.easyday.entities.SupplierEntity;

public class TestHibernate {

	public static void main(String[] args) {
		InvoiceDAO invoiceDao = new InvoiceDAO();
		SupplierDAO supplierDao = new SupplierDAO();
		
		List<InvoiceEntity> listOfInvoices = invoiceDao.getAllInvoices();
		for(InvoiceEntity invoice: listOfInvoices)
			System.out.println("Factura NR: " + invoice.getNr() +  "; Furnizor: " + invoice.getSupplier().getName() + "; Total de plata: " + invoice.getTotalToPay());
		
		List<SupplierEntity> listOfSuppliers = supplierDao.getAllSuppliers();
		for(SupplierEntity supplier: listOfSuppliers){
			System.out.print("Pentru Furnizorul: " + supplier.getName() + " cu serviciul: " + supplier.getService());
			
			if(supplier.getInvoices().size() >= 1){
				for(InvoiceEntity invoice: supplier.getInvoices()){
					System.out.print(", avem urmatoarele Facturi: Nr " + invoice.getNr());
				}
			}else{
				System.out.print(", nu avem facturi");
			}
			System.out.println();
		}
	}
	
	
}
