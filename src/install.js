import { createPSWP } from './createPSWP';
import { add, get, set, remove, findIndex } from './store';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';
import ui from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/default-skin/default-skin.css';

export function install (Vue, Options = {loop: true}) {
  const pswpElement = window.document.querySelector('#pswp') || createPSWP()
  Vue.directive('photoswipe', {
    bind(el) {
      add(el, [...el.querySelectorAll('img')]);
      const options = {};
      // TODO 合并指令配置
      Object.assign(options, Options)

      el.addEventListener('click', (e) => {
        const target = e.target
        if (target instanceof HTMLImageElement) {
          options.index = findIndex(el, target);
          const gallery = new PhotoSwipe( pswpElement, ui, get(el), options);
          gallery.init();
        }
      }, {passive: true});
    },
    inserted(el) {
      set(el);
    },
    update(el) {
      set(el);
    },
    componentUpdated(el) {
      set(el);
    },
    unbind(el) {
      remove(el);
      el.removeEventListener('click');
    }
  })
}
