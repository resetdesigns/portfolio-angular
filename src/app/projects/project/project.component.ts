import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  // Need to initialize the property 'project' because TypeScript has Strict Class Initialization :: http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html
  @Input() project: Project = { name: '', description: '' };

  constructor() {}

  ngOnInit(): void {}
}
