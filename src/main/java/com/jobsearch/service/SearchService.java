package com.jobsearch.service;

import java.util.List;

import com.jobsearch.model.Job;
import com.jobsearch.model.Search;

public interface SearchService {
	public String doSearch(Search search);
	public String createInex(List<Job> jobs);
	public List<Search> allJobs();
}
