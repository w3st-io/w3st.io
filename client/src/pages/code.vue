<template>
	<BContainer class="py-6">
		<BCard
			bg-variant="primary"
			text-variant="light"
			border-variant="dark"
			no-body
			class="w-100 mx-auto shadow"
		>
			<BCardHeader class="border-dark bg-dark">
				<BCol cols="12">
					<h1 class="my-2 text-center text-primary font-weight-bold text-spread-sm">
						Find out Code On Our GitHub
					</h1>
				</BCol>
			</BCardHeader>

			<BCardHeader class="py-5 text-center">
				<BRow>
					<BCol cols="12" sm="6" md="4">
						<a href="https://www.github.com/w3st-io" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								class="w-100"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Main
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" sm="6" md="4">
						<a href="https://www.github.com/aleem-ahmed" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								class="w-100"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Personal
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" sm="6" md="4">
						<a href="https://www.github.com/w3st-io-foundation" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								class="w-100"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Foundational
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>
				</BRow>
			</BCardHeader>
		</BCard>
	</BContainer>
</template>

<script>
import { GithubIcon, ExternalLinkIcon } from 'vue-feather-icons'

export default {
	components: {
		GithubIcon,
		ExternalLinkIcon,
	}
}
</script>