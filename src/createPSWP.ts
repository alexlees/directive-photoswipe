export function createPSWP() {
  if (document.getElementById("pswp")) {
    console.error("DirectivePhotoSwipe 使用id为pswp的元素展示PhotoSwipe,请勿占用该ID");
  }
  const el = window.document.createElement("div");
  el.id = "pswp";
  el.tabIndex = -1;
  el.setAttribute("role", "dialog");
  el.classList.add("pswp");
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = `<div class="pswp__bg"></div>
  <div class="pswp__scroll-wrap">
    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>
    <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <button class="pswp__button pswp__button--share" title="Share"></button>
          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>
        <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>`;
  window.document.body.appendChild(el);
  return el;
}
