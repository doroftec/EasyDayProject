package com.easyday.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.easyday.entities.InvoiceEntity;
import com.easyday.entities.SupplierEntity;
import com.easyday.util.SessionFactoryUtil;

public class InvoiceDAO {

	public void save(InvoiceEntity invoice){
		
	}
	
	public List<InvoiceEntity> getAllInvoices(){
		Session session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
		List<InvoiceEntity> listOfInvoices = null;
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			
			listOfInvoices = (List<InvoiceEntity>)session.createQuery("FROM invoice").list();
			tx.commit();
		}catch(HibernateException he){
			if(tx != null)
				tx.rollback();
			throw he;
		}finally{
			session.close();
		}
		
		return listOfInvoices;
	}
	
	public void deleteInvoiceById(int id){
		
	}
	
	public void updateInvoice(InvoiceEntity invoice){
		
	}
}
