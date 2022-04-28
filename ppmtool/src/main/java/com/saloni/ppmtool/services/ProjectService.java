package com.saloni.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saloni.ppmtool.domain.Project;
import com.saloni.ppmtool.exceptions.ProjectIdException;
import com.saloni.ppmtool.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public Project saveOrUpdateProject(Project project) {
		
		try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			return projectRepository.save(project);
		}catch (Exception e) {
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
		}
	}
	
	public Project findProjectByIdentifier(String projectId){

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null){
            throw new ProjectIdException("Project ID '"+projectId+"' does not exist");

        }
        return project;
	}
	public Iterable<Project> findAllProject(){
		return projectRepository.findAll();
	}
	
	public void deleteProjecByIdentifier(String projectid) {
		Project project=projectRepository.findByProjectIdentifier(projectid.toUpperCase());
		
		if(project==null) {
            throw  new  ProjectIdException("Cannot Project with ID '"+projectid+"'. This project does not exist");
		}
		projectRepository.delete(project);
	}
}
