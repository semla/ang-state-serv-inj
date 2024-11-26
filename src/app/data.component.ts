import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StateService } from './state.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent  implements OnInit, OnDestroy{
  @Input() product = 'Laptop';
  sub!: Subscription;
  constructor(public stateService: StateService) {}
  ngOnInit() {
    this.stateService.getDataFromBE(this.product).subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
