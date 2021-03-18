import { Component, Input, OnInit } from '@angular/core';
import { ISvaSaperatorConfig } from './sva-saperator.config';

@Component({
  selector: 'app-sva-saperator',
  templateUrl: './sva-saperator.component.html',
  styleUrls: ['./sva-saperator.component.scss']
})
export class SvaSaperatorComponent implements OnInit {
  @Input() SvaSaperatorConfig!: ISvaSaperatorConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
