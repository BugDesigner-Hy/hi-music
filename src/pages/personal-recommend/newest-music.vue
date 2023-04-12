<!-- 最新音乐组件 -->
<template>
	<div class="flex-col mt-8 mb-2">
		<div class="title mb-2 text-xl">最新音乐 <icon-right /></div>
		<div class="grid grid-cols-3 gap-y-3 gap-x-5">
			<div v-for="i in 11" :key="i">
				<hi-image-bar
					:image-src="squareImages[i % 3]"
					primary-text="我的战争"
					width="60px"
					height="60px"
					:show-play-icon="true"
					play-icon-position="center"
					show-play-icon-type="always"
				>
					<template #second>
						<div>
							<span
								class="border rounded-sm border-[#de3b3e] text-xs text-[#de3b3e] pl-0.2 pr-0.2 mr-1"
								>Hi-Res</span
							>
							<span>陈若萱</span>
						</div>
					</template>
					<!-- <template #third>
						<div class="flex justify-center text-gray-500 mt-1">
							<div class="hover:text-dark-500">Echo NIKI</div>
							<div class="ml-2"><icon-play-arrow />441万</div>
							<div class="ml-2"><icon-schedule />02:14</div>
						</div>
					</template> -->
				</hi-image-bar>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { squareImages } from '~/api/images'
</script>

<style scoped></style>
