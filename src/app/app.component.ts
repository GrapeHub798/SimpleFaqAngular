import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Question} from "./models/question";
import {FaqComponent} from "./components/faq/faq.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaqComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  questions: Question[] = [];

  ngOnInit() {
    this.questions.push({
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
      isCollapsed: false,
    });
    this.questions.push({
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    });
    this.questions.push({
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    });
  }
}
