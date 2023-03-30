<template>
	<div class="flex items-center">
		<img src="/logo.png" alt="Hi-Music" class="h-70px pl-1.3rem p-1rem" />
		<div
			class="text-center text-white text-2xl mr-2.5rem font-light tracking-wide font-sans"
		>
			嗨音乐 Hi~
		</div>
		<icon-left
			class="ml-10 mr-2 p-1 text-3xl rounded-full bg-secondary !text-white"
		/>
		<icon-right
			class="mr-2 p-1 text-3xl rounded-full bg-secondary !text-gray-300"
		/>
		<a-input-search
			:style="{ width: '200px', color: 'white' }"
			placeholder="毛不易"
			class="!rounded-3xl !bg-secondary opacity-90 ml-2 !border-none"
		/>
		<i-mingcute:microphone-line
			class="text-white text-3xl m-2 rounded-full p-2 bg-secondary"
		></i-mingcute:microphone-line>
		<div class="flex items-center ml-auto mr-1rem">
			<a-avatar class="ml-8rem">
				<img alt="avatar" src="/avatar.jpg" />
			</a-avatar>
			<div class="personal-center flex ml-2 items-center">
				<div
					class="text-white text-center text-base font-sans font tracking-wide m-1"
				>
					莎士比亚别生气
				</div>
				<div
					class="rounded-lg bg-[#3d3332] text-xs text-white ml-1 p-1 font-sans tracking-wider"
				>
					VIP6
				</div>
				<icon-caret-down class="text-xl text-center !text-white ml-1" />
			</div>
			<icon-skin class="header-icon" />
			<icon-settings class="header-icon" />
			<icon-email class="header-icon" />
			<a-divider direction="vertical" />
			<icon-shrink class="header-icon" />
			<icon-minus class="header-icon" />
			<icon-fullscreen class="header-icon" />
			<icon-poweroff class="header-icon" />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-icon {
	@apply !text-gray-200 !hover:text-white text-2xl m-2;
}
</style>
