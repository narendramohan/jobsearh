package com.jobsearch.model;

public class Job {

	Long jobId;
	String keyword;
	String jobTitle;
	String jobType;
	String exp;
	String location;
	String expectedSal;
	String maxSal;
	
	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}


	
	public String getMaxSal() {
		return maxSal;
	}


	public void setMaxSal(String maxSal) {
		this.maxSal = maxSal;
	}


	public Long getJobId() {
		return jobId;
	}

	 
	public String getJobTitle() {
		return jobTitle;
	}
	
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	
	public String getJobType() {
		return jobType;
	}
	
	public void setJobType(String jobType) {
		this.jobType = jobType;
	}
	
	public String getExp() {
		return exp;
	}
	
	public void setExp(String exp) {
		this.exp = exp;
	}
	
	public String getLocation() {
		return location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getExpectedSal() {
		return expectedSal;
	}
	
	public void setExpectedSal(String expectedSal) {
		this.expectedSal = expectedSal;
	}


	public String getKeyword() {
		return keyword;
	}


	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
}
