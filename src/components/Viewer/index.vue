<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script>
export default {
  name: 'Viewer',
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new Cesium.Viewer('viewer-container')
      viewer.imageryLayers.removeAll()
      this.$emit('on-viewer-completed', viewer)
    }
  },
  mounted() {
    this.initViewer()
  }
}
</script>

<style lang="scss" scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
