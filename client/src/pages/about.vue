<template>
	<BContainer class="my-5">
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="m-auto text-light"
			style="max-width: 600px;"
		>
			<BCardHeader>
				<BCol cols="12">
					<h3 class="m-0 text-center font-weight-bold text-light">
						About {{ companyInfo.name }}
					</h3>
				</BCol>
			</BCardHeader>

			<BCardBody>
				<p class="font-weight-bold text-dark">{{ companyInfo.description }}</p>
				<p class="font-weight-bold text-dark">{{ companyInfo.caption }}</p>
			</BCardBody>
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