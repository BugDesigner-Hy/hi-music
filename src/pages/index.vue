<template>
	<div>
		<a-tabs
			default-active-key="1"
			lazy-load
			animation
			size="large"
			type="line"
			class="m-2 font-sans tracking-wider"
		>
			<a-tab-pane key="1" title="个性推荐">
				<personal-recommend />
			</a-tab-pane>
			<a-tab-pane key="2" title="专属定制"> <my-customization /> </a-tab-pane>
			<a-tab-pane key="3" title="歌单"> <song-list /> </a-tab-pane>
			<a-tab-pane key="4" title="排行榜"> <ranking-list /> </a-tab-pane>
			<a-tab-pane key="5" title="歌手"> <singer-list /> </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script setup lang="ts">
import PersonalRecommend from './personal-recommend/index.vue'
import MyCustomization from './my-customization/my-customization.vue'
import SongList from './song-list.vue'
import RankingList from './ranking-list.vue'
import SingerList from './singer-list.vue'
</script>

<style scoped>
:deep(.arco-tabs-tab-active) {
	@apply !text-xl text-dark-200;
}
:deep(.arco-tabs-nav-ink) {
	@apply bg-[#de3b3e];
}
</style>
