<template>
	<a-layout
		class="w-80vw h-90vh center border border-gray-200 min-w-78rem min-h-40rem cursor-pointer h-max"
	>
		<a-layout-header class="h-70px w-100% bg-primary rounded-t">
			<Header />
		</a-layout-header>
		<a-layout>
			<a-layout-sider :width="200">
				<Sider />
			</a-layout-sider>
			<a-layout-content class="max-h-46rem">
				<router-view />
			</a-layout-content>
		</a-layout>
		<a-layout-footer class="h-80px w-100% rounded-b border-t border-t-gray-200">
			<Footer />
		</a-layout-footer>
	</a-layout>
</template>

<style lang="css" scoped>
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
