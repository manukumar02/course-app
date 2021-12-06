import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/shared';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  emailText: string = 'Enter Email';
  isInline: boolean = true;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required],
        },
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Submit');
  }

  onPatchValue() {
    this.form.patchValue({ input: 'test' });
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }
}
