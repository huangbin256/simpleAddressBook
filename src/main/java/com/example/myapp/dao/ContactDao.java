package com.example.myapp.dao;


import java.util.List;

import org.j8ql.query.Query;

import com.example.myapp.entity.Contact;
import com.google.inject.Singleton;

@Singleton
public class ContactDao extends BaseDao<Contact,Long> {

	public List<Contact> getContacts(Long groupId){
		if(groupId == null){
			return daoHelper.list(Query.select(entityClass));
		}
		return daoHelper.list(Query.select(entityClass).innerJoin("groupcontact", "contactId", "contact", "id").where("groupcontact.groupId", groupId));
	}
	
}
