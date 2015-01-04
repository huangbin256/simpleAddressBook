package com.example.myapp.web;

import java.util.List;
import java.util.Map;

import org.j8ql.query.Condition;
import org.j8ql.query.Query;

import com.britesnow.snow.web.param.annotation.WebUser;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.myapp.dao.ContactDao;
import com.example.myapp.dao.IDao;
import com.example.myapp.entity.Contact;
import com.example.myapp.entity.GroupContact;
import com.example.myapp.entity.User;
import com.example.myapp.perf.annotation.ToMonitor;
import com.example.myapp.web.annotation.EntityIdParam;
import com.example.myapp.web.annotation.JsonParam;
import com.google.inject.Inject;
import com.google.inject.Singleton;

/**
 * Created by jeremychone on 12/27/13.
 */
@Singleton
@ToMonitor
public class UserWebHandler {

	@Inject
	private ContactDao contactDao;
	
	@Inject
	private IDao<GroupContact,GroupContact.Id> groupContactDao;
	
	@Inject
	private WebResponseBuilder webResponseBuilder;


    @WebGet("/das-list-Contact")
    public WebResponse listContact(@WebUser User user, @JsonParam("filter") Map filter){
    	Long groupId = null;
    	if(filter.get("groupId") != null && !String.valueOf(filter.get("groupId")).equals("")){
    		groupId = new Long(String.valueOf(filter.get("groupId")));
    	}
        List<Contact> contacts = contactDao.getContacts(groupId);
        return webResponseBuilder.success(contacts);
    }
    
    @WebGet("/das-list-GroupContact")
    public WebResponse listGroupContacts(@WebUser User user, @JsonParam("filter") Map filter){
    	Long contactId = new Long(String.valueOf(filter.get("contactId")));
    	Condition con = Query.one("contactId", contactId);
        List<GroupContact> contacts = groupContactDao.list(user, con, 0, 1000, "groupId");
        return webResponseBuilder.success(contacts);
    }
    
    @WebPost("/das-delete-GroupContact")
    public WebResponse delete(@WebUser User user, @EntityIdParam("id") Map idMap){
    	GroupContact groupContact = new GroupContact();
    	groupContact.setContactId(new Long((Integer)idMap.get("contactId")));
    	groupContact.setGroupId(new Long((Integer)idMap.get("groupId")));
    	groupContactDao.delete(user, groupContact.getId());
        return webResponseBuilder.success();
    }

}
