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
						Find Our Code
					</h1>
				</BCol>
			</BCardHeader>

			<BCardHeader class="py-5 text-center">
				<BRow>
					<BCol cols="12" md="6" xl="4">
						<h5 class="description">Projects By W3ST.IO LLC</h5>

						<a href="https://www.github.com/w3st-io" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								pill
								class="w-100 github-link"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Main
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" md="6" xl="4">
						<h5 class="description">Projects Under JJ VINYLS LLC</h5>

						<a href="https://github.com/jjvinyls" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								pill
								class="w-100 github-link"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									JJ Vinyls
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" md="6" xl="4">
						<h5 class="description">Non-Profit Work</h5>

						<a href="https://www.github.com/w3st-io-foundation" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								pill
								class="w-100 github-link"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Foundational
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" md="6" xl="4" class="mx-auto">
						<h5 class="description">References & Code Practice</h5>

						<a href="https://www.github.com/aleem-ahmed" target="_blank">
							<BButton
								variant="dark"
								size="lg"
								pill
								class="w-100 github-link"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Personal
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

<style lang="scss" scoped>
	.description {
		font-weight: bold;
		margin-bottom: 1em;
	}
	
	.github-link {
		margin-bottom: 1em;
	}
</style>