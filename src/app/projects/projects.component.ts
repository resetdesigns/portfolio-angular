import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project('Project 1', 'This is an example of a project description'),
    new Project(
      'Project 2',
      'This is another example used as a description for a project'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
