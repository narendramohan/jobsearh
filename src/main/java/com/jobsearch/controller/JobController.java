package com.jobsearch.controller;

import java.util.List; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.jobsearch.model.Search;
import com.jobsearch.service.JobService;
import com.jobsearch.service.SearchService;

@Controller
public class JobController {
	private static final Logger logger = LoggerFactory
			.getLogger(JobController.class);

	@Autowired
	JobService jobService; 
	
	@Autowired
	SearchService searchService;
	/**
	 * Selects the home page and populates the model with a message
	 */
	@RequestMapping(value = "/createJob", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView createPage(@RequestParam(value="id",required=false) Long id){
		logger.info("Create Job!");
		/*return "";
		logger.debug("Received request to edit person id : "+id);*/				
		ModelAndView mav = new ModelAndView();		
 		mav.setViewName("createNewJob");
 		Search person = null;
 		if (id == null) {
 			person = new Search();
 		} else {
 			person = jobService.find(id);
 		}
 		
 		mav.addObject("search", person);
 		List<Search> list = searchService.allJobs();
 		for(Search search:list){
 			System.out.println(search);
 		}
		return mav;
	}
	@RequestMapping(value = "/saveJob", method = {RequestMethod.GET, RequestMethod.POST})
	public String saveJob(Model model, @ModelAttribute("command") Search search){
		jobService.createJob(search);
		return "searchPage";
	}
	@RequestMapping(value = "/searchJob", method = {RequestMethod.GET, RequestMethod.POST})
	public String searchJob(Model model, @ModelAttribute("command") Search search){
		//jobService.createJob(search);
		return "searchPage";
	}
}
