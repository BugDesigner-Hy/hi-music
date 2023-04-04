<!-- 热门播客 -->
<template>
	<div class="flex-col mt-8 mb-2">
		<div class="title mb-2 text-xl">热门播客 <icon-right /></div>
		<div class="grid grid-cols-2 gap-y-3 gap-x-5">
			<div
				v-for="i in 6"
				:key="i"
				class="flex rounded-md transition duration-150 ease-in-out"
				:class="{ 'bg-gray-100': hoverIndex == i }"
				@mouseover="hoverIndex = i"
				@mouseout="hoverIndex = -1"
			>
				<div class="relative">
					<a-image
						class="!rounded-md"
						height="80px"
						width="80px"
						src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
					/>
					<i-ic:round-play-circle-outline
						class="absolute bottom-1.5 right-1 text-xl !text-[#de3b3e] transition ease-in-out duration-1000"
					></i-ic:round-play-circle-outline>
				</div>

				<div class="flex-col m-2">
					<div class="mt-1">算了-万妮达</div>
					<div
						class="text-xs text-gray-500 border border-gray-200 p-1 rounded-lg w-max"
					>
						原创demo
					</div>
					<div class="flex justify-center text-gray-500">
						<div class="hover:text-dark-500">Echo NIKI</div>
						<div class="ml-2"><icon-play-arrow />441万</div>
						<div class="ml-2"><icon-schedule />02:14</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const hoverIndex = ref(-1)
</script>

<style scoped></style>
