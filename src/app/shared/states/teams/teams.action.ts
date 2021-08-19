export class CreateTeam {
  static readonly type = '[Auth] CreateTeam';
  constructor(public name: string, public specialToken: string) {}
}

export class AnswerQuestion {
  static readonly type = '[Auth] AnswerQuestion';
  constructor(public group: string, public answer: string, public specialToken: string, public questionID: string ) {}
}
