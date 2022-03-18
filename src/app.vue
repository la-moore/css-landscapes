<template>
  <SceneHero />
  <SceneSahara />
  <SceneFootpath />
  <SceneMountains />
  <SceneWaterfall />
  <SceneCanyon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SceneHero from '/~/components/hero.vue'
import SceneSahara from '/~/components/sahara.vue'
import SceneFootpath from '/~/components/footpath.vue'
import SceneMountains from '/~/components/mountains.vue'
import SceneWaterfall from '/~/components/waterfall.vue'
import SceneCanyon from '/~/components/canyon.vue'

export default defineComponent({
  name: 'App',
  components: {
    SceneHero,
    SceneSahara,
    SceneFootpath,
    SceneMountains,
    SceneWaterfall,
    SceneCanyon,
  },
  created() {
    // document.body.classList.add('dark')
  }
})
</script>
