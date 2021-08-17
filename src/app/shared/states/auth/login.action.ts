export class LoginAdmin {
  static readonly type = '[Auth] Login Admin';
  constructor(public username: string, public password: string) {}
}
