package com.jobsearch.dao;

import com.jobsearch.model.Search;

public interface JobDao {
	public void createJob(Search job);

	public Search find(Long id);
}
