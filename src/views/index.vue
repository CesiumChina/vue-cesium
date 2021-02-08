<template>
  <div class="index">
    <viewer @on-viewer-completed="viewerCompletedHandler"></viewer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer
      viewer.imageryLayers.addImageryProvider(
        new Cesium.AmapImageryProvider({
          style: 'img',
          crs: 'WGS84'
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
