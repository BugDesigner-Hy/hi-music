<!-- 推荐歌单组件 -->
<template>
	<div class="flex-col mt-8">
		<div class="title mb-2 text-xl">推荐歌单 <icon-right /></div>
		<div class="grid grid-cols-5 gap-x-7 gap-y-5 mr-2">
			<div v-for="i in 10" :key="i">
				<HiImage
					:image-src="src"
					width="190px"
					height="190px"
					:show-play-num="i != 1"
					play-num="256万"
					:show-play-icon="true"
					:show-drawer="i == 1"
					top-drawer-text="根据您的音乐口味生成每日更新"
					buttom-text="每日歌曲推荐"
					:play-icon-style="{}"
					:play-num-style="{}"
					show-play-icon-type="hover"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const src =
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
</script>

<style scoped></style>
