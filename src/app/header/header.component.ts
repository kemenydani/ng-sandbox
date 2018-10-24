import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //event bus. Output() makes it visible for the parent component
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    // emit with event bus
    this.featureSelected.emit(feature);
  }

}
