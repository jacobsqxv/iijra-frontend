import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../styles/form.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  isLoading = false;
  loginError = false;

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = false;

      this.authService
        .login(this.loginForm.value)
        .subscribe({
          next: async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.isLoading = false;
            this.router.navigate(['']).then(r => {
            });
          },
          error: async (err) => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.isLoading = false;
            this.loginError = true;
            console.log('Login error: ', err);
          }
        });
    }
  }
}
