import { Component, OnInit } from '@angular/core';
import {Tools} from './tools';
import {ToolService} from './tool.service';
import { Observable, of } from 'rxjs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-tool-dash',
  templateUrl: './tool-dash.component.html',
  styleUrls: ['./tool-dash.component.css'], 
})
export class ToolDashComponent implements OnInit {

  //tools: Tools[];

  constructor(private toolService: ToolService) { 
  	//this.tools = this.getTools();
  }


  ngOnInit() {
  }

  getTools():Tools[]{
  	return this.toolService.getTools();
  }

}
