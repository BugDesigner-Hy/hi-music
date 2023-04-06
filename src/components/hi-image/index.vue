<template>
	<div>
		<div ref="hiImageRef" class="relative" :style="imageStyle">
			<img :src="imageSrc" :style="imageStyle" class="rounded-lg w-20%" />
			<div
				v-if="showPlayNum"
				:style="playNumStyle"
				class="play-num absolute top-1.5 right-1 text-white"
			>
				<icon-play-arrow /> {{ playNum }}
			</div>
			<i-ic:round-play-circle-outline
				v-if="
					showPlayIcon &&
					(showPlayIconType == 'always' ||
						(showPlayIconType == 'hover' && isHovered))
				"
				:style="playIconStyle"
				class="play-icon absolute bottom-1.5 right-1.5 text-gray-100 text-3xl !text-[#de3b3e] transition ease-in-out duration-1000"
			></i-ic:round-play-circle-outline>
			<div
				v-if="showDrawer"
				class="top-drawer absolute opacity-0 -top-8 text-center p-2 w-full rounded-t-lg bg-dark-100 text-white transition delay-150 duration-500 ease-in-out"
				:class="{ '!opacity-90 !block transform translate-y-8': isHovered }"
			>
				{{ topDrawerText }}
			</div>
		</div>

		<div v-if="buttomText" class="buttom-title mt-1">{{ buttomText }}</div>
	</div>
</template>

<script setup lang="ts">
import { Props } from './props'

const props = withDefaults(defineProps<Props>(), {
	showPlayIcon: false,
	showPlayIconType: 'always',
	showDrawer: false,
	showPlayNum: false,
})

const imageStyle = computed(() => {
	return {
		width: props.width,
		height: props.height,
	}
})

const hiImageRef = ref()
const isHovered = useElementHover(hiImageRef)
</script>

<style scoped></style>
