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
          style: 'img'
        })
      )

      // const terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
      //   url:
      //     'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
      //   token:
      //     'KED1aF_I4UzXOHy3BnhwyBHU4l5oY6rO6walkmHoYqGp4XyIWUd5YZUC1ZrLAzvV40pR6gBXQayh0eFA8m6vPg..'
      // })
      // viewer.terrainProvider = terrainProvider
      // viewer.extend(Cesium.CesiumWidgetMixin)
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
