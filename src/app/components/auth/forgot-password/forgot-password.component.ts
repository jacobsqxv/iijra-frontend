import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../../../../styles/form.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) return;
    this.loading = true;
    this.authService.resetPasswordRequest(
      {"email": this.email?.value}
    ).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (error) => {
        // Handle error appropriately
        this.loading = false;
      }
    });
  }
}
