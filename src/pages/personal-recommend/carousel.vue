<!-- 轮播图 -->
<template>
	<div>
		<a-carousel
			:auto-play="false"
			animation-name="card"
			show-arrow="hover"
			indicator-position="outer"
			indicator-type="line"
			:style="{
				width: '100%',
				height: '13rem',
			}"
			indicator-class="bg-[#de3b3e]"
		>
			<a-carousel-item
				v-for="(image, index) in images"
				:key="index"
				:style="{ width: '60%' }"
				class="rounded-xl"
			>
				<img
					:src="image"
					:style="{
						width: '100%',
					}"
				/>
			</a-carousel-item>
		</a-carousel>
	</div>
</template>

<script setup lang="ts">
const images = ref([
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
])
</script>

<style scoped>
:deep(.arco-carousel-arrow-right),
:deep(.arco-carousel-arrow-left) {
	@apply !bg-dark-100;
}
:deep(.arco-carousel-arrow-right:hover),
:deep(.arco-carousel-arrow-left:hover) {
	@apply !bg-dark-300;
}
:deep(.arco-carousel-indicator-item-active) {
	@apply bg-primary;
}
:deep(.arco-carousel-indicator-item) {
	@apply transition duration-100 ease-in-out;
}
</style>
