<template>
	<BContainer class="my-5">
		<BCard
			bg-variant="dark"
			text-variant="light"
			no-body
			class="m-auto text-light"
			style="max-width: 600px;"
		>
			<BCardHeader>
				<BCol cols="12">
					<h1 class="m-0 text-center font-weight-bold text-primary">
						About {{ companyInfo.name }}
					</h1>
				</BCol>
			</BCardHeader>

			<BCardBody>
				<p>{{ companyInfo.description }}</p>
				<h6 class="small">{{ companyInfo.caption }}</h6>
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