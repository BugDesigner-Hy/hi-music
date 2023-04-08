<template>
	<div>
		<div
			ref="hiImageRef"
			class="relative overflow-hidden rounded-lg"
			:style="imageStyle"
		>
			<img
				:src="imageSrc"
				:style="imageStyle"
				class="rounded-lg w-full transition duration-900"
				:class="{ 'transform scale-108': isHovered && imageScale }"
			/>
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
				class="play-icon absolute text-3xl text-[#de3b3e] transition ease-in-out duration-1000"
				:class="[
					playIconPosition ? `play-icon--${playIconPosition}` : 'play-icon--br',
					{ 'opacity-100': isHovered },
				]"
			></i-ic:round-play-circle-outline>
			<div
				v-if="showDrawer"
				class="top-drawer absolute opacity-0 -top-8 text-center p-2 w-full rounded-t-lg bg-dark-100 text-white transition delay-150 duration-500 ease-in-out"
				:class="{ '!opacity-90 !block transform translate-y-8': isHovered }"
			>
				{{ topDrawerText }}
			</div>
		</div>

		<div v-if="buttomText" :style="{ width }" class="buttom-title mt-2">
			<div class="inline-block"><slot></slot></div>
			{{ buttomText }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { Props } from './props'

const props = withDefaults(defineProps<Props>(), {
	showPlayIcon: false,
	showPlayIconType: 'always',
	showDrawer: false,
	showPlayNum: false,
	playIconPosition: 'br',
	imageScale: false,
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

<style scoped>
.play-icon--tl {
	@apply top-1 left-1;
}

.play-icon--tr {
	@apply top-1 right-1;
}

.play-icon--bl {
	@apply bottom-1 left-1;
}

.play-icon--br {
	@apply bottom-1 right-1;
}

.play-icon--center {
	@apply top-1/2 left-1/2;
	transform: translate(-50%, -50%);
}
</style>
