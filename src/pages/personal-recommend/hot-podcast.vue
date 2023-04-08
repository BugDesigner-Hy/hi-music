<!-- 热门播客 -->
<template>
	<div class="flex-col mt-8 mb-2">
		<div class="title mb-2 text-xl">热门播客 <icon-right /></div>
		<div class="grid grid-cols-2 gap-y-3 gap-x-5">
			<div v-for="i in 6" :key="i">
				<hi-image-bar
					:image-src="src"
					primary-text="算了-万妮达"
					width="80px"
					height="80px"
					:show-play-icon="true"
					play-icon-position="br"
					show-play-icon-type="hover"
				>
					<template #second>
						<div
							class="text-xs text-gray-500 border border-gray-200 p-1 rounded-lg w-max mt-1"
						>
							原创demo
						</div>
					</template>
					<template #third>
						<div class="flex justify-center text-gray-500 mt-1">
							<div class="hover:text-dark-500">Echo NIKI</div>
							<div class="ml-2"><icon-play-arrow />441万</div>
							<div class="ml-2"><icon-schedule />02:14</div>
						</div>
					</template>
				</hi-image-bar>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const src =
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
</script>

<style scoped></style>
