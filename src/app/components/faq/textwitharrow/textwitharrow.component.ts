import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {NgClass, NgIf} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgIf,
    NgClass
  ],
  selector: 'text-with-arrow',
  templateUrl: './textwitharrow.component.html',
  styleUrls: ['./textwitharrow.component.css']
})

export class TextwitharrowComponent {
  @Input() hasArrow: boolean = false;
  @Input() text: string = '';
  @Input() isCollapsed: boolean = true;
  @Output() toggleCollapseOnParent: EventEmitter<boolean> = new EventEmitter<boolean>();

  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;

  toggleCollapse(): void {
    if (!this.hasArrow){
      return;
    }
    this.isCollapsed = !this.isCollapsed;
    this.toggleCollapseOnParent.emit(this.isCollapsed);
  }
}
