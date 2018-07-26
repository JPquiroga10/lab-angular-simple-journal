import { Component } from '@angular/core';
import { EntryService } from './services/entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  list: any;

  constructor(private lists: EntryService) { }

  ngOnInit(){
    this.displayList()
  }

  displayList(){
    this.lists.getList().subscribe((list) => {
      this.list = list
    });
  }

  
}
