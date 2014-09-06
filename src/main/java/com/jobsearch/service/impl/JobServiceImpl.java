package com.jobsearch.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobsearch.dao.JobDao;
import com.jobsearch.model.Search;
import com.jobsearch.service.JobService;

@Service
public class JobServiceImpl implements JobService{
	@Autowired
	JobDao jobDao;
	
	public void createJob(Search job){
		jobDao.createJob(job);
	}

	public Search find(Long id) {
		return jobDao.find(id);
	}

}
