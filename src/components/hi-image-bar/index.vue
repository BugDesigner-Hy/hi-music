<template>
	<div ref="hiImageBarRef" class="flex">
		<div class="relative">
			<a-image :style="imageStyle" :src="props.imageSrc" class="!rounded-md" />
			<i-ic:round-play-circle-outline
				v-if="
					showPlayIcon &&
					(showPlayIconType == 'always' ||
						(showPlayIconType == 'hover' && isHovered))
				"
				:style="playIconStyle"
				class="absolute bottom-2.5 right-1 text-xl !text-[#de3b3e] transition ease-in-out duration-1000"
			></i-ic:round-play-circle-outline>
		</div>

		<div
			:style="{ height: props.height }"
			class="flex-col justify-center m-1 ml-2 h-auto"
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

<style scoped></style>
