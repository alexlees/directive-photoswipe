import DirectivePhotoSwipe from './install'

let GlobalVue = null
if (window) {
  GlobalVue = (window as any).Vue
} else if (global) {
  GlobalVue = (global as any).Vue
}
if (GlobalVue) {
  GlobalVue.use(DirectivePhotoSwipe)
}
export default DirectivePhotoSwipe
