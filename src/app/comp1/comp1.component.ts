import { Component, NgZone, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(renderer: Renderer2, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => renderer.listen('document', 'mousemove', () => void 0));
  }

  ngOnInit() {
  }

}
