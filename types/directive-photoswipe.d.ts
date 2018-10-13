import { PluginFunction,  } from 'vue';
import { Options } from 'photoswipe';
declare const DirectivePhotoswipe: DirectivePhotoswipe;
export default DirectivePhotoswipe;
interface DirectivePhotoswipe {
  install: PluginFunction<Options>;
}
