<!-- 推荐歌单组件 -->
<template>
	<div class="flex-col">
		<div class="title mb-2">推荐歌单 <icon-right /></div>
		<div class="grid grid-cols-5 gap-x-7 gap-y-5 mr-2">
			<div v-for="i in 10" :key="i" class="relative rounded-lg">
				<a-image
					class="!rounded-lg"
					description="每日歌曲推荐"
					footer-position="outer"
					src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
					@mouseover="hoverIndex = i"
					@mouseout="hoverIndex = -1"
				/>
				<div class="absolute top-1 right-1.5 text-white font-thin opacity-90">
					<icon-play-arrow /> 269万
				</div>
				<i-ic:round-play-circle-outline
					v-if="i == hoverIndex"
					class="absolute bottom-7 right-2 text-gray-100 text-3xl !text-[#de3b3e] transition ease-in-out duration-150"
				></i-ic:round-play-circle-outline>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const hoverIndex = ref(-1)
</script>

<style scoped></style>
