import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-shape';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';


@Component({
  selector: 'app-ngx-examples',
  templateUrl: './ngx-examples.component.html',
  styleUrls: ['./ngx-examples.component.scss']
})
export class NgxExamplesComponent implements OnInit {

  multi: any[];
  view: any[] = [700, 300];

  curve  = d3.curveBasis;



  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#007ffd', '#66aeff', '#bfddff', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor() {
    Object.assign(this, { multi });
    console.log(d3);

  }

  ngOnInit(): void {
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
/*
  this.curve = d3.curveStepBefore;
  this.curve = d3.curveStepAfter;
  this.curve = d3.curveStep;
  this.curve = d3.curveNatural;
  this.curve = d3.curveMonotoneY;
  this.curve = d3.curveMonotoneX;
  this.curve = d3.curveLinear;
  this.curve = d3.curveCatmullRom;
  this.curve = d3.curveBasis;
  this.curve = d3.curveCardinal;
*/

}
