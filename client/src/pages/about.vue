<template>
	<BContainer class="my-5">
		<BCard bg-variant="dark" text-variant="light" class="m-auto text-light" style="max-width: 600px;">
			<h1 class="text-center font-weight-bold text-primary">About {{ companyInfo.name }}</h1>
			<p>{{ companyInfo.description }}</p>
			<h6 class="small">{{ companyInfo.caption }}</h6>
		</BCard>
	</BContainer>
</template>

<script>
import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo: companyInfo
		}
	},
}
</script>