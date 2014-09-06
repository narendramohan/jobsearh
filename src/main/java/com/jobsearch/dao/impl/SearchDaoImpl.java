package com.jobsearch.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.jobsearch.dao.SearchDao;
import com.jobsearch.model.Job;
import com.jobsearch.model.Person;
import com.jobsearch.model.Search;
@Repository
public class SearchDaoImpl implements SearchDao{
	@PersistenceContext
	private EntityManager entityManager;
	
	public Search find(Long id) {
		return entityManager.find(Search.class, id);
	}
	
	@SuppressWarnings("unchecked")
	public List<Search> getJob() {
		return entityManager.createQuery("select s from Search s").getResultList();
	}
	public List<Search> doAllJobSeach() {
		// TODO Auto-generated method stub
		return getJob();
	}

}
