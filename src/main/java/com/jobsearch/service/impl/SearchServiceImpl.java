package com.jobsearch.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobsearch.dao.SearchDao;
import com.jobsearch.model.Job;
import com.jobsearch.model.Search;
import com.jobsearch.search.util.LuceneSearch;
import com.jobsearch.service.SearchService;

@Service("searchService")
public class SearchServiceImpl implements SearchService {
	@Autowired
	SearchDao searchDao;
	
	public List<Search> allJobs(){
		return searchDao.doAllJobSeach();
	}
	
	public String doSearch(Search search) {
		
		return LuceneSearch.doSearch(search);
	}



	public String createInex(List<Job> jobs) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
