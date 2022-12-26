export default class ItemModel {
  id = "";
  name = "";
  category = "";
  color = "";
  size = "";
  imgUrl = "";
  price = 0;
  note = "";

  constructor(id, name, category, color, size, imgUrl, price, note) {
    this.id = id,
    this.name = name;
    this.category = category;
    this.color = color;
    this.size = size;
    this.imgUrl = imgUrl;
    this.price = price;
    this.note = note;
  }
}
