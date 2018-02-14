export class ListItem {
  text: string;
  is_completed: boolean;

  constructor(text: string, is_completed: boolean) {
    this.text = text;
    this.is_completed = is_completed;
  }
}
