import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get foo() {
    console.log('foo read!');
    return 'foo';
  }

}
