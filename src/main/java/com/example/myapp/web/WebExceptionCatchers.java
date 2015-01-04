package com.example.myapp.web;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.exception.WebExceptionContext;
import com.britesnow.snow.web.exception.annotation.WebExceptionCatcher;
import com.britesnow.snow.web.renderer.JsonRenderer;
import com.example.myapp.AppException;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class WebExceptionCatchers {

	@Inject
	private JsonRenderer jsonRenderer;

	@Inject
	private WebResponseBuilder webResponseBuilder;

	@WebExceptionCatcher
	public void processAppException(AppException e, WebExceptionContext wec, RequestContext rc){
		jsonRenderer.render(webResponseBuilder.fail(e),rc.getWriter());
	}

}