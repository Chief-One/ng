import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],

})
export class NavigationComponent implements OnInit {
  
  isNavDropdownIn = false;

  constructor(public searchInput: FormControl) { }

  ngOnInit() {
    this.searchInput.valueChanges.debounceTime(500).subscribe(x => console.log(x));
  }

  toggle(){
    this.isNavDropdownIn = !this.isNavDropdownIn
    console.log(this.isNavDropdownIn);
  }
}
