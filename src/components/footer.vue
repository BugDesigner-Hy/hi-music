<template>
	<div class="grid grid-cols-3 h-80px cursor-pointer">
		<div class="song-content flex items-center">
			<a-avatar trigger-type="mask" shape="square" class="m-4">
				<img
					alt="avatar"
					src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
				/>
				<template #trigger-icon>
					<icon-up />
				</template>
			</a-avatar>
			<div class="flex-col items-center justify-center cursor-pointer">
				<div class="song-name text-lg font-sans">
					我记得
					<icon-heart class="text-xl !text-gray-600 !hover:text-dark-900" />
				</div>
				<div class="singer font-sans">赵雷</div>
			</div>
		</div>
		<div class="control flex-col justify-center items-center">
			<div
				class="control-icon-wrapper mb-1 mt-2 flex items-center justify-center"
			>
				<icon-redo class="control-icon" />
				<icon-skip-previous-fill class="control-icon" />
				<icon-play-arrow class="!text-4xl control-icon" />
				<icon-skip-next-fill class="control-icon" />
				<icon-language class="control-icon" />
			</div>
			<div class="control-progress-wrapper flex items-center w-30rem">
				<div class="mr-2 text-xs font-sans">00:49</div>
				<a-progress :percent="percent" :show-text="false" color="#de3b3e" />
			</div>
		</div>
		<div class="option-tool-wrapper h-80px flex justify-end items-center pr-2">
			<div
				class="text-[#de3b3e] text-base border border-[#de3b3e] rounded-sm pr-2px pl-2px font-sans tracking-wider"
			>
				无损
			</div>
			<a-badge :count="1" dot :offset="[-12, 0]">
				<icon-experiment class="control-tool-icon" />
			</a-badge>
			<i-mingcute:voice-line class="control-tool-icon"></i-mingcute:voice-line>
			<icon-user-group class="control-tool-icon" />
			<icon-unordered-list class="control-tool-icon" />
		</div>
	</div>
</template>

<script setup lang="ts">
const songProgress = ref(20)
// setInterval(() => {
// 	songProgress.value = songProgress.value + 1
// 	if (songProgress.value > 120) {
// 		songProgress.value = 0
// 	}
// }, 100)

const percent = computed(() => {
	return songProgress.value / 100
})
</script>

<style scoped>
.control-icon {
	@apply text-3xl ml-3 mr-3 hover:text-[#de3b3e];
}
.control-tool-icon {
	@apply text-3xl ml-3 mr-3 hover:text-[#de3b3e];
}
</style>
