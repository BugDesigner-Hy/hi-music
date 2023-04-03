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
			<a-tab-pane key="1" title="个性推荐"> <PersonalRecommend /> </a-tab-pane>
			<a-tab-pane key="2" title="专属定制"> <MyCustomization /> </a-tab-pane>
			<a-tab-pane key="3" title="歌单"> <SongList /> </a-tab-pane>
			<a-tab-pane key="4" title="排行榜"> <RankingList /> </a-tab-pane>
			<a-tab-pane key="5" title="歌手"> <SingerList /> </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.arco-tabs-tab-active) {
	@apply !text-xl text-dark-200;
}
:deep(.arco-tabs-nav-ink) {
	@apply bg-[#de3b3e];
}
</style>
