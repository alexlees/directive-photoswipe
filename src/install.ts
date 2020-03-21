import PhotoSwipe, { Options } from 'photoswipe'
import ui from 'photoswipe/dist/photoswipe-ui-default'
import { PluginObject, VueConstructor } from 'vue'
import { createPSWP } from './createPSWP'
import store from './store'
import './style.css'

class DirectivePhotoSwipe implements PluginObject<Options> {
  private readonly pswpElement = createPSWP()
  public install(Vue: VueConstructor, globalOption: Options = {}) {
    Vue.directive('photoswipe', {
      bind: (el: HTMLElement) => {
        store.init(el)
        el.addEventListener('click', e => {
          this.click(e, el, globalOption)
        })
      },
      unbind: el => {
        store.destroy(el)
      },
      update: el => {
        store.update(el)
      }
    })
  }
  private click(e: Event, el: Element, globalOption: Options) {
    if (e.target instanceof HTMLImageElement) {
      store.update(el)
      const options: Options = {}
      Object.assign(options, globalOption)
      options.index = store.getImageIndex(el, e.target)
      const items = store.getItems(el)
      const gallery = new PhotoSwipe(this.pswpElement, ui, items, options)
      gallery.init()
    }
  }
}

export default new DirectivePhotoSwipe()
