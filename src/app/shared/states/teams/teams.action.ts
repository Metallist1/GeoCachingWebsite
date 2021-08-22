export class CreateTeam {
  static readonly type = '[Auth] CreateTeam';
  constructor(public name: string, public specialToken: string) {}
}
