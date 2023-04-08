<!-- 听见好书组件 -->
<template>
	<div class="flex-col mt-8">
		<div class="title mb-2 text-xl">听见好书-新用户免费听 <icon-right /></div>
		<div class="grid grid-cols-5 gap-x-7 gap-y-5 mr-2">
			<div v-for="i in 5" :key="i">
				<HiImage
					:image-src="src"
					width="190px"
					height="190px"
					:show-play-num="i != 1"
					play-num="1354万"
					:show-play-icon="true"
					:show-drawer="i != 1"
					top-drawer-text="村上春树连续两遍的'魔书''"
					buttom-text="月亮与六便士|毛姆经典作品|免费有声书"
					:play-icon-style="{}"
					:play-num-style="{}"
					show-play-icon-type="hover"
				>
					<p
						class="text-xs text-gray-500 border border-gray-200 p-1 rounded-lg w-max"
					>
						畅销书
					</p>
				</HiImage>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const src =
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
</script>

<style scoped></style>
