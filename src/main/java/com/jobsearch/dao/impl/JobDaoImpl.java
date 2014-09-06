package com.jobsearch.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.jobsearch.dao.JobDao;
import com.jobsearch.model.Search;
@Repository
public class JobDaoImpl implements JobDao {
	@PersistenceContext
	private EntityManager entityManager;
	
	@Transactional
	public void createJob(Search job) {
		System.out.println(job);
		if(job.getJobId()==null){
			entityManager.persist(job);
			
		}else {
			entityManager.merge(job);
		}
		

	}

	public Search find(Long id) {
		return entityManager.find(Search.class, id);
	}
	

}
