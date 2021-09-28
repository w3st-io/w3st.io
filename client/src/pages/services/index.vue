<template>
	<BContainer class="my-5">
		<BRow>
			<BCol
				v-for="(s, i) in pageData.services"
				:key="i"
				cols="12" md="6" lg="4"
				class="d-flex align-items-stretch"
			>
				<!-- [WEB-APP-HOSTING] -->
				<BCard
					bg-variant="dark"
					text-variant="light"
					no-body
					class="mb-5 shadow"
					style="min-height: 462px;"
				>
					<BCardHeader>
						<h3 class="m-0 text-center text-primary">
							{{ s.name }}
						</h3>
						<h6 v-if="s.disclaimer" class="my-2 text-center text-muted">
							{{ s.disclaimer }}
						</h6>
					</BCardHeader>

					<BCardBody>
						<p>{{ s.descriptions[0] }}</p>
					</BCardBody>
					
					<BCardFooter>
						<RouterLink :to="`/services/${s.id}`">
							<BButton
								variant="primary"
								class="w-100"
								size="lg"
							>See Pricing</BButton>
						</RouterLink>
					</BCardFooter>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import pageData from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				pageData: pageData
			}
		},
	}
</script>