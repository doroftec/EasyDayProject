package com.easyday.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.easyday.entities.SupplierEntity;
import com.easyday.util.SessionFactoryUtil;

public class SupplierDAO {

	@SuppressWarnings("unchecked")
	public List<SupplierEntity> getAllSuppliers(){
		Session session = SessionFactoryUtil.getSessionFactory().getCurrentSession();
		List<SupplierEntity> listOfSuppliers = null;
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			
			listOfSuppliers = (List<SupplierEntity>)session.createQuery("FROM SUPPLIER").list();
			tx.commit();
		}catch(HibernateException he){
			if(tx != null)
				tx.rollback();
			throw he;
		}finally{
			session.close();
		}
		
		return listOfSuppliers;
	}
}
