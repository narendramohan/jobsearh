package com.jobsearch.service;

import com.jobsearch.model.Search;

public interface JobService {
	public void createJob(Search job);

	public Search find(Long id);
}
