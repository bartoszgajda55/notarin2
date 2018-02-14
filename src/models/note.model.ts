import {Category} from "./category.model";
import {ListItem} from "./list-item.model";
import {Image} from "./image.model";

export class Note {
  title: string;
  text: string;
  category: Category;
  list: ListItem[];
  images: Image[];
}
