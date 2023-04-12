<!-- 专属定制组件 -->
<template>
	<div ref="myCustom" class="my-custom ml-10 mr-8">
		<div class="title mb-2 text-xl">
			莎士比亚别生气的雷达歌单
			<div class="text-xs text-gray-500">
				根据你的红心收藏为你推荐更多宝藏歌单
			</div>
		</div>
		<div ref="itemWrapper" class="relative overflow-hidden relative">
			<div
				class="flex justify-start relative transition-all duration-500 ease-in-out"
				:style="{ left: `${offSet}px` }"
			>
				<div v-for="i in 10" :key="i" class="mr-4 mt-1">
					<HiImage
						:image-src="images[i % 3]"
						:image-scale="true"
						:width="`${imageWidth}px`"
						:height="`${imageWidth}px`"
						:show-play-num="true"
						play-num="256万"
						:show-play-icon="true"
						:show-drawer="false"
						:buttom-text="`每日歌曲推荐${i}-${bottom}`"
						:play-icon-style="{}"
						play-icon-position="br"
						:play-num-style="{}"
						show-play-icon-type="hover"
					>
					</HiImage>
				</div>
			</div>
			<div
				v-show="isHovered"
				class="left w-min text-gray-600 hover:text-[#de3b3e]"
			>
				<icon-left-circle size="30" @click="leftMove()" />
			</div>
			<div
				v-show="isHovered"
				class="right w-min text-gray-600 transition-all duration-75 hover:text-[#de3b3e]"
			>
				<icon-right-circle size="30" @click="rightMove()" />
			</div>
		</div>
		<div class="title mb-2 text-xl">美妙音乐假日~ {{ bottom }}</div>
		<div class="grid grid-cols-5 gap-x-7 gap-y-5 mr-2">
			<div v-for="i in secondImageNum" :key="i">
				<HiImage
					:image-src="images[i % 3]"
					:image-scale="true"
					width="190px"
					height="190px"
					:show-play-num="true"
					play-num="4193万"
					:show-play-icon="true"
					:show-drawer="false"
					:buttom-text="`[假日放轻松]你的假日音乐随身听-${bottom}-${y}`"
					:play-icon-style="{}"
					play-icon-position="br"
					:play-num-style="{}"
					show-play-icon-type="hover"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { images } from '~/api/images'
// const images = [
// 	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
// 	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
// 	'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
// ]
const mr = 16
const imageNum = ref(10)
const secondImageNum = ref(15)
const imageWidth = ref(190)
const minOffSet = ref(imageWidth.value + mr)
const moveNum = ref(0)
const itemWrapper = ref<HTMLDivElement | null>(null)
const itemContent = ref<HTMLDivElement | null>(null)
const maxOffWidth = ref(imageNum.value * (imageWidth.value + mr))
const offSet = computed(() => {
	return minOffSet.value * moveNum.value
})

const isHovered = useElementHover(itemWrapper)
const myCustom = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState } = useScroll(myCustom)
const { bottom } = toRefs(arrivedState)

watch(y, (newValue, oldValue) => {
	console.log(`output->x,y,isScrolling,bottom`, x, y, isScrolling, bottom)
	console.log(`bottom->`, newValue, oldValue)
})

console.log(`output->bottom,secondImageNum`, bottom.value, secondImageNum.value)

if (bottom.value) {
	secondImageNum.value = secondImageNum.value + 10
}

const leftMove = () => {
	if (
		Math.abs(itemContent.value!.offsetLeft) +
			itemWrapper.value!.offsetWidth +
			imageWidth.value >=
		maxOffWidth.value
	) {
		return
	}
	moveNum.value--
}

const rightMove = () => {
	if (Math.abs(itemContent.value!.offsetLeft) == 0) {
		return
	}

	moveNum.value++
}
</script>

<style scoped>
.left {
	position: absolute;
	top: 50%;
	left: 22px;
	transform: translate(-50%, -50%);
}
.right {
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translate(-50%, -50%);
}
.title {
	@apply mt-5;
}
</style>
