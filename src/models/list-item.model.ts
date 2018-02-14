export class ListItem {
  title: string;
  is_completed: boolean;

  constructor(text: string, is_completed: boolean) {
    this.title = text;
    this.is_completed = is_completed;
  }
}
