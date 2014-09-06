package com.jobsearch.task;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.jobsearch.model.Search;
import com.jobsearch.search.util.LuceneSearch;
import com.jobsearch.service.SearchService;


@Component
public class JobScheduler {
	private static final Logger logger = LoggerFactory.getLogger(JobScheduler.class);
	@Autowired
	SearchService searchService;
	static int size=0;
	@Scheduled(cron="1 * * * * *") // Every 5 minute
	public void runMe() { 		
		logger.info("Running the schedule !");
		List<Search> search = searchService.allJobs();
		if(size<search.size())
		{
			LuceneSearch.analyzeAndIndexJob(search);
		}
	}
	/*doIndexing(){
		
	}*/
}
