import {Category} from "./category.model";

export class User {
  first_name: string;
  last_name: string;
  avatar: string;
  categories: Category[];

  constructor(first_name: string, last_name: string, avatar: string, categories: Category[]) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
    this.categories = categories;
  }
}
