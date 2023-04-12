<!-- 独家放送组件 -->
<template>
	<div class="flex-col mt-8">
		<div class="title mb-2 text-xl">独家放送 <icon-right /></div>
		<div class="grid grid-cols-3 gap-x-5 gap-y-5 mr-2">
			<div v-for="i in 3" :key="i">
				<HiImage
					:image-src="images[i % 3]"
					height="200px"
					:show-play-num="false"
					:show-play-icon="true"
					buttom-text="<超级面对面>第254期 keshi:我的音乐永远新鲜"
					:play-icon-style="{
						color: '#fff',
						'font-size': '25px',
					}"
					play-icon-position="tl"
					show-play-icon-type="always"
				>
				</HiImage>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { images } from '~/api/images'
</script>

<style scoped></style>
