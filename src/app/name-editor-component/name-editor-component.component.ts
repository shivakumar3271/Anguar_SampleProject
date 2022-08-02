import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor-component',
  templateUrl: './name-editor-component.component.html',
  styleUrls: ['./name-editor-component.component.css']
})
export class NameEditorComponentComponent implements OnInit {

  name = new FormControl('');
  profileForm: any;

  updateName() {
    this.name.setValue('Nancy');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
