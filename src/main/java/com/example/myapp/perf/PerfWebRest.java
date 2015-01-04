package com.example.myapp.perf;

import javax.inject.Inject;
import javax.inject.Singleton;

import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.myapp.dao.DaoHelper;
import com.example.myapp.web.WebResponse;
import com.example.myapp.web.WebResponseBuilder;

/**
 * <p>WebRest methods to get and refresh the Perf info</p>
 */
@Singleton
public class PerfWebRest {

	@Inject
	private WebResponseBuilder wrb;

	@Inject
	private PerfManager perfManager;

	@Inject
	DaoHelper daoHelper;

	@WebGet("/perf-get-all")
	public WebResponse getAllPerf(){

		AppPerf appPerf = perfManager.getAppPerf(daoHelper.getPoolInfo());

		return wrb.success(appPerf);
	}

	@WebPost("/perf-clear")
	public WebResponse clearPerf(){
		perfManager.clear();
		return wrb.success(true);
	}

}
