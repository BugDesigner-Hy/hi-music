<template>
	<div
		ref="hiImageBarRef"
		class="flex rounded-md"
		:class="{ 'bg-gray-200': isHovered }"
	>
		<div class="relative">
			<a-image
				:style="imageStyle"
				:src="props.imageSrc"
				class="!rounded-md w-full"
			/>
			<i-ic:round-play-circle-outline
				v-if="
					showPlayIcon &&
					(showPlayIconType == 'always' ||
						(showPlayIconType == 'hover' && isHovered))
				"
				:style="playIconStyle"
				class="absolute text-2xl text-[#de3b3e] transition ease-in-out duration-1000"
				:class="
					playIconPosition ? `play-icon--${playIconPosition}` : 'play-icon--br'
				"
			></i-ic:round-play-circle-outline>
		</div>

		<div
			:style="{ height: imageStyle.height }"
			class="flex flex-col justify-around ml-2"
		>
			<div>{{ props.primaryText }}</div>
			<slot name="second"></slot>
			<slot name="third"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Props } from './props'

const props = withDefaults(defineProps<Props>(), {
	showPlayIcon: false,
	showPlayIconType: 'always',
	playIconPosition: 'br',
})
const imageStyle = computed(() => {
	return {
		width: props.width,
		height: props.height,
	}
})

const hiImageBarRef = ref()
const isHovered = useElementHover(hiImageBarRef)
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
