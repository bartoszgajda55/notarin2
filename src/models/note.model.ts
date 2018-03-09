import {Category} from "./category.model";
import {ListItem} from "./list-item.model";
import {Image} from "./image.model";

export class Note {
  id: string;
  title: string;
  text: string;
  category: Category;
  list: ListItem[];
  images: Image[];

  constructor() {
    this.id = "";
    this.title = "";
    this.text = "";
    this.category = null;
    this.list = [];
    this.images = [];
  }
}
