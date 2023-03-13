<template>
	<BContainer class="py-6">
		<BCard
			bg-variant="primary"
			text-variant="light"
			border-variant="secondary"
			no-body
			class="w-100 mx-auto backlit"
		>
			<BCardHeader class="border-dark bg-dark">
				<BCol cols="12">
					<h1 class="my-2 text-center text-primary text-spread-sm">
						Code
					</h1>
				</BCol>
			</BCardHeader>

			<BCardHeader class="py-5 text-center bg-light text-dark">
				<BRow>
					<BCol cols="12" md="6" xl="4" class="mx-auto">
						<h5 class="description">Projects By W3ST.IO LLC</h5>

						<a href="https://www.github.com/w3st-io" target="_blank">
							<BButton
								variant="secondary"
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

					<BCol cols="12" md="6" xl="4" class="mx-auto">
						<h5 class="description">Projects Under JJ VINYLS LLC</h5>

						<a href="https://github.com/jjvinyls" target="_blank">
							<BButton
								variant="secondary"
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

					<BCol cols="12" md="6" xl="4" class="mx-auto">
						<h5 class="description">Projects Under Yield Sync</h5>

						<a href="https://www.github.com/yield-sync" target="_blank">
							<BButton
								variant="secondary"
								size="lg"
								pill
								class="w-100 github-link"
							>
								<span class="h3">
									<GithubIcon stroke-width="1px" />
									Yield Sync
									<ExternalLinkIcon stroke-width="1px" />
								</span>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" md="6" xl="4" class="mx-auto">
						<h5 class="description">Non-Profit Work</h5>

						<a href="https://github.com/aleem-ahmed-contributions" target="_blank">
							<BButton
								variant="secondary"
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
				</BRow>
			</BCardHeader>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT]
	import axios from 'axios'

	// [IMPORT] Personal //
	import { GithubIcon, ExternalLinkIcon } from 'vue-feather-icons'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/code',
				}),
			}
		},

		components: {
			GithubIcon,
			ExternalLinkIcon,
		},

		methods: {
			async getPageData() {
				try {
					this.resData = await this.authAxios.get('/')
				}
				catch (err) {
					this.error = err
				}
			},
		},

		async created() {
			await this.getPageData()
		},
	}
</script>

<style lang="scss" scoped>
	.github-link {
		margin-bottom: 1em;
	}
</style>
