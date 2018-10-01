import { VueConstructor } from 'vue';
import { Options } from 'photoswipe';

interface Install {
  (Vue: VueConstructor, Options?: Options): void;
}

interface DirectivePhotoswipe {
  install: Install;
}

declare const directivePhotoswipe: DirectivePhotoswipe;

export default directivePhotoswipe;
