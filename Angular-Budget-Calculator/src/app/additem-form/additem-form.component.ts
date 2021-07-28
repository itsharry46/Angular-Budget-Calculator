import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {

  @Input() item!: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem!: boolean;

  constructor() { }

  ngOnInit(): void {
    // if itme has a value
    if (this.item){
      // this means that an existing itme object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null!);
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
