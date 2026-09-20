import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title implements OnChanges{

  //La manera tradicional de hacer los inputs es añadiendo el @Inut encima del title
  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges<Title>) {
    console.log('ngOnChanges');
  if (changes.title) {
    console.log(`Previous: ${changes.title.previousValue}`);
    console.log(`Current: ${changes.title.currentValue}`);
    console.log(`Is first ${changes.title.firstChange}`);
  }
}

}
