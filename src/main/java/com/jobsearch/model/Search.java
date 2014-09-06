package com.jobsearch.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Search {
	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	@Id
	@GeneratedValue
	@Column(name = "jobId") 
	Long jobId;
	@Column(name = "keyword")
	String keyword;
	@Column(name = "jobTitle")
	String jobTitle;
	@Column(name = "jobType")
	String jobType;
	@Column(name = "exp")
	String exp;
	@Column(name = "location")
	String location;
	@Column(name = "expectedSal")
	String expectedSal;
	@Column(name = "maxSal")
	String maxSal;
	
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
	
	public String toString(){
		return jobId+" "+exp+" "+expectedSal+" "+jobTitle+" "+jobType+" "+keyword+" "+location+" "+maxSal; 
	}
}
