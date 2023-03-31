<template>
	<div class="sider-wrapper flex-col max-h-42rem">
		<div class="feature-list-wrapper flex-col items-center pt-2">
			<div
				v-for="(feature, index) in basicFeatures"
				:key="index"
				class="h-3rem p-2 text-xl mb-1 ml-2 mr-2 font-sans tracking-wider pl-4 rounded-xl cursor-pointer hover:(text-2xl bg-gray-200) transition duration-100 ease-in-out delay-20"
				:class="{ active: index == 0 }"
			>
				{{ feature }}
			</div>
		</div>
		<div class="my-collection-wrapper flex-col items-center font-sans">
			<div
				v-for="(item, index) in myCollections"
				:key="index"
				class="collection-item-wrapper mt-2"
			>
				<div
					class="title p-2 text-basic text-gray-500 cursor-pointer"
					@click="collapse(index)"
				>
					{{ item.title }} <icon-caret-down />
				</div>
				<div
					v-for="(childItem, childIndex) in item.items"
					:key="childIndex"
					class="my-feature flex-col items-center transition duration-400 ease-in-out cursor-pointer"
					:class="{ hidden: isCollapse(index) }"
				>
					<div
						class="child-item-wrapper h-2rem flex items-center mt-1 mb-1 tracking-wider rounded-lg mr-2 ml-2 hover:(bg-gray-200)"
						:class="{ 'bg-gray-200': childIndex == 2 }"
					>
						<component
							:is="childItem.icon"
							v-if="childItem.icon != ''"
							class="text-2xl m-1 ml-2"
						/>
						<icon-unordered-list v-else class="text-2xl m-1 ml-2" />
						<div class="text-lg">
							{{ childItem.title }}
						</div>
						<component
							:is="childItem.rightIcon"
							v-if="childItem.rightIcon != ''"
							class="text-3xl ml-2 rounded-lg bg-gray-100 mr-2 pl-2 pr-2"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
console.log(`output->sider`, 'sider')
const basicFeatures = ref([
	'发现音乐',
	'播客',
	'视频',
	'关注',
	'直播',
	'私人FM',
])

const myCollections = reactive([
	{
		title: '我的音乐',
		items: [
			{
				icon: 'icon-heart',
				title: '我喜欢的音乐',
				rightIcon: 'icon-subscribed',
			},
			{
				icon: 'icon-to-bottom',
				title: '本地与下载',
				rightIcon: '',
			},
			{
				icon: 'icon-file-audio',
				title: '最近播放',
				rightIcon: '',
			},
			{
				icon: 'icon-cloud',
				title: '我的音乐云盘',
				rightIcon: '',
			},
			{
				icon: 'icon-music',
				title: '我的播客',
				rightIcon: '',
			},
			{
				icon: 'icon-star',
				title: '我的收藏',
				rightIcon: '',
			},
		],
	},
	{
		title: '创建的歌单',
		items: [
			{
				icon: '',
				title: '邓丽君',
				rightIcon: '',
			},
			{
				icon: '',
				title: '张国荣精选',
				rightIcon: '',
			},
			{
				icon: '',
				title: '抖音热歌',
				rightIcon: '',
			},
		],
	},
	{
		title: '收藏的歌单',
		items: [
			{
				icon: '',
				title: '2023年翻唱精选',
				rightIcon: '',
			},
			{
				icon: '',
				title: '2022年翻唱精选',
				rightIcon: '',
			},
			{
				icon: '',
				title: '2021年翻唱精选',
				rightIcon: '',
			},
		],
	},
])

const collapseList = ref([false, false, false])

const collapse = (index: number) => {
	collapseList.value[index] = !collapseList.value[index]
}

const isCollapse = (index: number) => {
	return collapseList.value[index]
}
</script>

<style scoped>
.active {
	@apply text-2xl bg-gray-200;
}
.shrink {
	@apply hidden;
}
</style>
