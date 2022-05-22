declare interface IProvider {
  children: JSX.Element;
}
declare interface IContext {
  counter: number;
  addCounter(): void;
  decCounter(): void;
}
