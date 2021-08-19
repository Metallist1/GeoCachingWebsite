export class CreateTeam {
  static readonly type = '[Auth] CreateTeam';
  constructor(public specialToken: string, public name: string) {}
}
