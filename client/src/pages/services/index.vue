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
				>
					<BCardHeader>
						<h4 class="m-0 text-center font-weight-bold text-primary">
							{{ s.name }}
						</h4>
					</BCardHeader>

					<BCardBody>
						<lottie-player
							:src="s.lottiefilesLink"
							class="w-100 mx-auto my-2 text-center"
							style="height: 300px; min-height: 300px;"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>

						<p class="font-weight-bold">{{ s.descriptions[0] }}</p>

						<h6 v-if="s.disclaimer" class="my-2 text-center font-weight-bold text-muted">
							{{ s.disclaimer }}
						</h6>
					</BCardBody>
					
					<BCardFooter>
						<RouterLink :to="`/services/${s.id}`">
							<BButton
								variant="primary"
								class="w-100 font-weight-bold"
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