const store = [];
let INDEXES = 0;
const indexAttributeName = 'data-index';
const imgAttributeName = 'data-img';
const imgDataSrcAttributeName = 'data-src';
function getImgItems(el) {
  return [...el.querySelectorAll('img')].map((img) => {
    const id = `${img.src}+${Math.random()}`;
    const w = window.screen.width;
    img.setAttribute(imgAttributeName, id);
    return {
      id,
      src: img.src || img.getAttribute(imgDataSrcAttributeName),
      w,
      h: img.height * (w / img.width)
    }
  });
}
export function add(el) {
  store[INDEXES] = getImgItems(el);
  el.setAttribute(indexAttributeName, INDEXES++);
}
export function set(el) {
  store[el.getAttribute(indexAttributeName)] = getImgItems(el);
}
export function remove(el) {
  store.splice(el.getAttribute(indexAttributeName), 1);
}
export function get(el) {
  return store[el.getAttribute(indexAttributeName)];
}
export function findIndex(el, img) {
  const id = img.getAttribute(imgAttributeName);
  const index = get(el).findIndex((item) => item.id === id)
  return index === -1 ? 0 : index;
}
