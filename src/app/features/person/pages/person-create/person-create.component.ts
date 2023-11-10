import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
})
export class PersonCreateComponent implements OnInit {
  formRegister?: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formRegister = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Za-zÀ-ú]+[A-Za-zÀ-ú ])*$')]],
      age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('\\d+')]],
      cpf: [
        '',
        [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]+$')],
      ],
    });
  }

  onSubmit(): void {
    if (this.formRegister) {
      console.log(this.formRegister.value);
    }
  }
}
