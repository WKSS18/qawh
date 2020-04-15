<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-scroll" ref="slide">
        <div class="slide-banner-wrapper">
          <div class="slide-item">
            <img src="//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg" alt />
          </div>
          <div class="slide-item">
            <img src="//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg" alt />
          </div>
          <div class="slide-item">
            <img src="//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg" alt />
          </div>
          <div class="slide-item"></div>
        </div>
      </div>
      <div class="docs-wrapper">
        <span
          class="doc"
          v-for="(item, index) in 4"
          :key="index"
          :class="{'active': currentPageIndex === index}"
        ></span>
      </div>
    </div>
  </div>
</template>