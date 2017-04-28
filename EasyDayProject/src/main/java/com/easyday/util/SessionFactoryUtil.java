package com.easyday.util;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import com.easyday.entities.InvoiceEntity;
import com.easyday.entities.SupplierEntity;

public class SessionFactoryUtil {
	
	public static SessionFactory getSessionFactory() {
		Configuration config = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(InvoiceEntity.class).addAnnotatedClass(SupplierEntity.class);
		ServiceRegistry registry = new StandardServiceRegistryBuilder().applySettings(config.getProperties()).build();
		
		return config.buildSessionFactory();
	}
}
