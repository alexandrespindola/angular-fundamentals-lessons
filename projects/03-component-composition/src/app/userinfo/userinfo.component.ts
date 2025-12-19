import { Component } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [],
  template: ` <p>Este é o documento!</p> `,
  styles: `
    :host {
      display: block;
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
`,
})
export class UserInfoComponent {
  title = 'User Information';
}
