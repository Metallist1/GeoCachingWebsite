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
