import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input('background') backgroundColor: string;
  @Input('progressColor') progressColor: string;
  @Input('width') width: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
