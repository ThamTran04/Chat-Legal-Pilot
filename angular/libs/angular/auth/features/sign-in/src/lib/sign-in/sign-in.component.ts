import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent{
  message = '';

  loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private readonly _formBuilder: FormBuilder,
    // private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  // userLoginSub: Subscription;
  // ngOnDestroy(): void {
  //   if (this.userLoginSub != undefined) this.userLoginSub.unsubscribe();
  // }

  onSubmit(): void {
    // if (!this.loginForm.valid)
    //   this.message = 'Veuillez saisir votre email et votre mots de passe';
    // else {
    //   const userAuth: User = this.loginForm.value;
    //   this._authService.login(userAuth).subscribe(
    //     (res) => {
    //       const result = JSON.parse(res);
    //       const token = result.token;
    //       const user = result.user;
    //       localStorage.clear();
    //       localStorage.setItem('access-token', token);
    //       localStorage.setItem('user', JSON.stringify(user));
    //       this._router.navigate(['/']);
    //     },
    //     (err) =>
    //       (this.message = "Adresse d'email ou mots de passe sont incorrects")
    //   );
    // }
  }
}
