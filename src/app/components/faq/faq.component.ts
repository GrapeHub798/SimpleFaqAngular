import {Component, Input, OnInit} from "@angular/core";
import {Question} from "../../models/question";
import {NgIf} from "@angular/common";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {TextwitharrowComponent} from "./textwitharrow/textwitharrow.component";

@Component({
  standalone: true,
  selector: 'single-faq',
  templateUrl: './faq.component.html',
  imports: [
    NgIf,
    NgbCollapseModule,
    TextwitharrowComponent
  ],
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {
  @Input() question: Question | null = null;

  isCollapsed: boolean = true;

  ngOnInit() {
    if (this.question){
      this.isCollapsed = this.question?.isCollapsed ?? true;
    }
  }

  toggleCollapse(toggle: boolean): void {
    this.isCollapsed = toggle;
  }
}
