import {Category} from "./category.model";
import {ListItem} from "./list-item.model";
import {Image} from "./image.model";

export class Note {
  id?: string;
  title: string;
  text: string;
  category: Category;
  list: ListItem[];
  images: Image[];

  constructor(title: string, text: string, category: Category, list: ListItem[], images: Image[]) {
    this.title = title;
    this.text = text;
    this.category = category;
    this.list = list;
    this.images = images;
  }
}
