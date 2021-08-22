export class GetNextLocation {
  static readonly type = '[Auth] GetNextLocation';
  constructor(public string: string) {}
}
export class GetNextQuestion {
  static readonly type = '[Auth] GetNextQuestion';
  constructor(public string: string) {}
}
export class DeleteQuestion {
  static readonly type = '[Auth] DeleteQuestion';
}

export class AnswerQuestion {
  static readonly type = '[Auth] AnswerQuestion';
  constructor(public specialToken: string, public answer: string, public questionID: number ) {}
}

export class CheckIfQuestionIsAnswered {
  static readonly type = '[Auth] AnswerQuestion';
  constructor(public specialToken: string, public questionID: number ) {}
}

