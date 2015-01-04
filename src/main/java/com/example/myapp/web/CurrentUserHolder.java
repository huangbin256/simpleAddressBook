package com.example.myapp.web;

import javax.inject.Inject;

import com.britesnow.snow.web.CurrentRequestContextHolder;
import com.britesnow.snow.web.RequestContext;
import com.example.myapp.entity.User;
import com.google.inject.Singleton;

/**
 * <p>This is a holder for the Current User in the request (or @WebUser).</p>
 *
 * <p> Typically the user comes from the CurrentRequestContext, but we will need to add the ability
 * to set Current User not based on RequestContext for cron jobs or such (will probably be in threadLocal)</p>
 *
 */
@Singleton
public class CurrentUserHolder {

	@Inject
	private CurrentRequestContextHolder crch;

	public User get(){
		RequestContext rc = crch.getCurrentRequestContext();
		if (rc != null){
			return rc.getUser(User.class);
		}else{
			// TODO: needs to allow current user even when not a RC (for cron jobs)
			// 		 probably from the thread local
			return null; // for now, return null.
		}
	}

	// TODO: Allow to set a User on a thread local
	// public void setUser()
}
