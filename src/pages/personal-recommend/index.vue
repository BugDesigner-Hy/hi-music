<!-- 个性推荐组件 -->
<template>
	<div class="flex-col justify-start m-2">
		<carousel />
		<RecommendPlaylist />
		<HotPodcast />
		<!-- <ListenBook />
		<ExclusivePost />
		<NewestMusic />
		<RecommendMv /> -->
	</div>
</template>

<script setup lang="ts">
import carousel from './carousel.vue'
import RecommendPlaylist from './recommend-playlist.vue'
import HotPodcast from './hot-podcast.vue'
</script>

<style scoped></style>
