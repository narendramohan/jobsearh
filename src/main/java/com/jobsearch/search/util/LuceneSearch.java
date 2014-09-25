package com.jobsearch.search.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import org.apache.lucene.analysis.core.SimpleAnalyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.IntField;
import org.apache.lucene.document.StringField;
import org.apache.lucene.index.CorruptIndexException;
import org.apache.lucene.index.FilterDirectoryReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import com.google.gson.Gson;
import com.jobsearch.model.Job;
import com.jobsearch.model.Search;

public class LuceneSearch {
	public void initializeDirectory() {
		if(indexDir==null){
			Properties prop = getConfigProperties(getClass()
					.getClassLoader().getResource("/").getPath());
			String path = prop.getProperty("indexpath");
			String noofthread = prop.getProperty("noofthread");
			
			logger.debug(path + " "+noofthread);
			
			// System.out.println(Util.getConfigProperties(getClass().getClassLoader().getResource("/").getPath()));
			try {
				indexDir = FSDirectory.open(new File(path));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	private static final Logger logger = LoggerFactory
			.getLogger(LuceneSearch.class);
	static IndexWriter iwriter = null;
	static List<Search> list = null;

	public static void analyzeAndIndexJob(List<Search> search) {
		logger.debug("Indexing started");
		try {
			List<Search> tempList = new ArrayList<Search>();
			logger.debug(" list: " + list);
			if (list == null) {
				list = new ArrayList<Search>();
				list.addAll(search);
				tempList.addAll(search);
			} else {
				for(Search srch:search){
					logger.debug(list.contains(srch) + "");
					if(list.contains(srch)){
						tempList.add(srch);
						list.add(srch);
					}
				}
				/*tempList.addAll(search);
				tempList.removeAll(list);*/

				//list.addAll(search);
			}
			logger.debug("Temporary list: " + tempList);
			//if(iwriter==null)
			
			addDocument(tempList);
			

		} catch (CorruptIndexException e1) {
			logger.error("Exception: Corrupted Index",e1);
		} catch (IOException e) {
			logger.error("Exception: Io ",e);
		}
	}

	/**
	 * Create Index using the job search
	 * @param search
	 * @throws IOException
	 */
	private static void addDocument(List<Search> search) throws IOException {
		IndexWriter iwriter = getIndexWriter();
		for (Search srch : search) {
			Document doc = new Document();
			Field pathField = new StringField("keyword", srch.getKeyword()==null?"":srch.getKeyword(),
					Field.Store.YES);
			doc.add(pathField);
			pathField = new StringField("jobTitle", srch.getJobTitle()==null?"":srch.getJobTitle(),
					Field.Store.YES);
			doc.add(pathField);
			pathField = new StringField("jobType", srch.getJobType()==null?"":srch.getJobType(),
					Field.Store.YES);
			doc.add(pathField);
			pathField = new StringField("exp", srch.getExp()==null?"":srch.getExp(), Field.Store.YES);
			doc.add(pathField);
			pathField = new StringField("location", srch.getLocation()==null?"":srch.getLocation(),
					Field.Store.YES);
			doc.add(pathField);
			pathField = new IntField("MinSal", Integer.parseInt(srch
					.getExpectedSal()==null?"":srch.getExpectedSal()), Field.Store.YES);
			doc.add(pathField);
			pathField = new IntField("MaxSal", Integer.parseInt(srch
					.getMaxSal()==null?"":srch.getMaxSal()), Field.Store.YES);
			doc.add(pathField);
			iwriter.addDocument(doc);
		}
		iwriter.close();
	}



	public static IndexWriter getIndexWriter() throws IOException {
		if(indexDir==null)
			new LuceneSearch().initializeDirectory();
		IndexWriterConfig luceneConfig = new IndexWriterConfig(
				Version.LUCENE_4_9, new StandardAnalyzer(Version.LUCENE_4_9));

		return (new IndexWriter(indexDir, luceneConfig));
	}

	public static String doSearch(Search search) {
		List<Job> jobList = new ArrayList<Job>();
		IndexSearcher isearcher = null;
			// System.out.println(userName);
			try {
				// Now search the index:
				isearcher = getIndexSearcher();
				SimpleAnalyzer sa = new SimpleAnalyzer(Version.LUCENE_4_9);
				String field ="keyword";
				QueryParser parser = new QueryParser(Version.LUCENE_4_9, field, sa);
				Query query = parser.parse(search.getKeyword());
				ScoreDoc[] hits = isearcher.search(query, isearcher.getIndexReader().maxDoc()).scoreDocs;
				Job job=null;
				for (int i = 0; i < hits.length; i++) {
					Document hitDoc = isearcher.doc(hits[i].doc); // getting actual document
					job=new Job();
					job.setKeyword(hitDoc.get("keyword"));
					boolean bjT=!StringUtils.isEmpty(search.getJobType());
					boolean bjtt=!StringUtils.isEmpty(search.getJobTitle());
					boolean bloc=!StringUtils.isEmpty(search.getLocation());
					boolean bexp=!StringUtils.isEmpty(search.getExp());
					boolean bmsal=!StringUtils.isEmpty(search.getMaxSal());
					boolean besal=!StringUtils.isEmpty(search.getExpectedSal());
					String exp = search.getExp();
					//if(StringUtil)
					
					System.out.println(hitDoc.get("keyword"));
					if(bjT && !search.getJobType().equalsIgnoreCase(hitDoc.get("jobType"))){
						continue;
					}
					if(bjtt && !search.getJobTitle().equalsIgnoreCase(hitDoc.get("jobTitle"))){
						continue;
					}
					if(bloc && !search.getLocation().equalsIgnoreCase(hitDoc.get("location"))){
						continue;
					}
					if(bexp && ! (Integer.parseInt(search.getExp()) <= Integer.parseInt(hitDoc.get("exp")))){
						continue;
					}
					
					if(besal && !(Integer.parseInt(search.getExpectedSal()) <= Integer.parseInt(hitDoc.get("MinSal")))){
						continue;
					}
					int jobType = Integer.parseInt(hitDoc.get("jobType"));
					int jobTitle = Integer.parseInt(hitDoc.get("jobTitle"));
					
					job.setExp(hitDoc.get("exp"));
					job.setExpectedSal(hitDoc.get("MinSal")+ " to "+hitDoc.get("MaxSal")+ " in lacs");
					job.setJobTitle(JobTitle.get(jobTitle).title());
					job.setJobType(JobType.get(jobType).type());
					job.setLocation(hitDoc.get("location"));
					jobList.add(job);
				}
				
			} catch (IOException e1) {
				e1.printStackTrace();
			} catch (ParseException e) {
				e.printStackTrace();
			} finally {

				if (isearcher != null)
					try {
						isearcher.getIndexReader().close();
					} catch (IOException e) {
						e.printStackTrace();
					}
			}
			String jsonString="";
			if(jobList.size()>0)
				jsonString = new Gson().toJson(jobList);
			else
				jsonString = "[{\"keyword\":\""+search.getKeyword()+"\",\"jobTitle\":\" \",\"jobType\":\" \",\"location\":\" \",\"expectedSal\":\" \"}]";
		logger.debug(jsonString);
		return jsonString;
	}

	static IndexSearcher getIndexSearcher() throws IOException {
		if(indexDir==null)
		new LuceneSearch().initializeDirectory();
		return new IndexSearcher(
				FilterDirectoryReader.open(indexDir));
	}

	public static Directory indexDir;
	/**
	 * Load the config.property
	 * @param args
	 * @return
	 */
	public static Properties getConfigProperties(String path) {

		Properties prop = new Properties();
		InputStream input = null;

		try {
			input = new FileInputStream(path+"\\config.properties");

			// load a properties file
			prop.load(input);
		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return prop;
	}
}
enum JobTitle {
	   SE(0){

		@Override
		public String title() {
			return "Software Engineer";
		}
		   
	   },HE(1) {
		@Override
		public String title() {
			return "Hardware Engineer";
		}
	};
	   private int value;
	   public abstract String title();
	   JobTitle(int p) {
		   value = p;
	   }
	   int getValue() {
	      return value;
	   } 
	// Lookup table
		private static final Map<Integer, JobTitle> lookup = new HashMap<Integer, JobTitle>();

		// Populate the lookup table on loading time
		static {
			for (JobTitle s : EnumSet.allOf(JobTitle.class))
				lookup.put(s.getValue(), s);
		}

		// This method can be used for reverse lookup purpose
		public static JobTitle get(int angle) {
			return lookup.get(angle);
		}
	}
enum JobType {
	   FT(0){

		@Override
		public String type() {
			return "Full Time";
		}
		   
	   },PT(1) {
		@Override
		public String type() {
			return "Part Time";
		}
	},Contract(2){

		@Override
		public String type() {
			return "Contract";
		}
		   
	   },intern(3) {
		@Override
		public String type() {
			return "Intern Ship";
		}
	};
	   private int value;
	   public abstract String type();
	   JobType(int p) {
		   value = p;
	   }
	   int getValue() {
	      return value;
	   } 
		// Lookup table
		private static final Map<Integer, JobType> lookup = new HashMap<Integer, JobType>();

		// Populate the lookup table on loading time
		static {
			for (JobType s : EnumSet.allOf(JobType.class))
				lookup.put(s.getValue(), s);
		}

		// This method can be used for reverse lookup purpose
		public static JobType get(int angle) {
			return lookup.get(angle);
		}
	}