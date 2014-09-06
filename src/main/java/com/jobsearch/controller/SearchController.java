package com.jobsearch.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jobsearch.model.Search;
import com.jobsearch.service.SearchService;

/**
 * Search controller for going to the home page with a search options
 */
@Controller
public class SearchController {
	private static final Logger logger = LoggerFactory
			.getLogger(SearchController.class);
	@Autowired
	SearchService searchService;
	/**
	 * Selects the home page and populates the model with a message
	 */
	@RequestMapping(value = "search/job", method = {RequestMethod.GET, RequestMethod.POST})
	public String home(Model model, @ModelAttribute("command") Search search) {
		logger.info("Job Search!");
		/*String keyword = request.getParameter("keyword");

		String jobTitle = request.getParameter("jobTitle");
		String jobType = request.getParameter("jobType");
		String exp = request.getParameter("exp");
		String location = request.getParameter("location");
		String expectedSal = request.getParameter("expectedSal");*/
		logger.info(String.format("keyowr: %s, jobTitle: %s, experience: %s, "
				+ "Location: %s, Excpected Salary: %s", search.getJobTitle(), search.getJobType(), search.getExp(),
				search.getLocation(), search.getExpectedSal()));
		String jsonString = searchService.doSearch(search);
		model.addAttribute("jsonString", jsonString);
		model.addAttribute("controllerMessage", "Find the search result below!");
		return "searchResult";
	}
}
