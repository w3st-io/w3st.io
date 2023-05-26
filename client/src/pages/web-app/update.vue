<template>
	<BContainer class="py-5">
		<Update
			:webApp_id="$route.params.webapp_id"
			class="mx-auto"
			style="max-width: 800px;"
		/>
	</BContainer>
</template>

<script>
	import Update from '../../components/webApps/CUpdate'

	export default {
		name: "WebAppUpdate",
		components: {
			Update
		},
	}
</script>
