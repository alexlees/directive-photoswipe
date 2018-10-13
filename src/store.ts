import { Item } from 'photoswipe';
interface ImgaeItem extends Item {
  id?: number;
}
class Store {
  private index = 0;
  private items: ImgaeItem[][] = [];
  private readonly INDEX_ATTR = 'data-index';
  private setIndexAttr(el: Element, value: string | number) {
    el.setAttribute(this.INDEX_ATTR, `${value}`);
  }
  private getIndexAttr(el: Element) {
    try {
      return parseInt(el.getAttribute(this.INDEX_ATTR), 10);
    } catch (error) {
      console.log(error);
      return -1;
    }
  }
  private checkIndexAttr(el: Element) {
    try {
      if (el.hasAttribute(this.INDEX_ATTR)) {
        parseInt(el.getAttribute(this.INDEX_ATTR), 10);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private setItem(el: Element) {
    const index = this.getIndexAttr(el);
    if (index !== -1) {
      this.items[index] = this.elementMapToItems(el);
    } else {
      console.error('setItem fail');
    }
    this.showItems();
  }
  private elementMapToItems(el: Element) {
    const imgs: HTMLImageElement[] = Array.prototype.slice.call(el.querySelectorAll('img'));
    return imgs.map((img, index) => {
      this.setIndexAttr(img, index);
      return {
        id: index,
        src: img.src,
        w: img.naturalWidth,
        h: img.naturalHeight,
      } as ImgaeItem;
    });
  }
  private removeItem(el: Element) {
    const index = this.getIndexAttr(el);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.showItems();
  }
  private showItems() {
    console.log(this.items);
  }
  public init(el: Element) {
    this.setIndexAttr(el, this.index++);
  }
  public update(el: Element) {
    console.log('update');
    this.setItem(el);
  }
  public getItems(el: Element) {
    return this.items[this.getIndexAttr(el)] || [];
  }
  public destroy(el: Element) {
    this.removeItem(el);
  }
  public getImageIndex(root: Element, img: HTMLImageElement) {

    return this.getItems(root).findIndex((item) => item.id === this.getIndexAttr(img));
  }
}

export default new Store();
