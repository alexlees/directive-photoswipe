import DirectivePhotoSwipe from './install';

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = (window as any).Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = (global as any).Vue;
}
if (GlobalVue) {
	GlobalVue.use(DirectivePhotoSwipe);
}
export default DirectivePhotoSwipe;
