<template>
	<BContainer class="mx-auto py-5" style="max-width: 800px;">
		<!-- Pinned Posts -->
		<div v-if="!loading && pinnedWebContents.length != 0" class="">
			<h6
				class="mb-4 text-center text-uppercase text-spread-sm text-light text-backlit"
			>Pinned Posts</h6>

			<BRow v-if="!loading" class="my-5">
				<BCol
					v-for="(w, i) in pinnedWebContents"
					:key="i"
					cols="12"
					class="mx-auto"
				>
					<RouterLink :to="`/blog/read/${w._id}`" class="">
						<BCard bg-variant="primary" border-variant="dark" class="mb-4 hover-card backlit">
							<h5 class="m-0 text-center text-uppercase text-spread-sm text-dark">
								{{ w.name }}
							</h5>

							<h6 class="m-0 text-center text-spread-sm text-muted small">
								{{ new Date(w.createdTimeStamp).toLocaleString() }}
							</h6>
						</BCard>
					</RouterLink>
				</BCol>
			</BRow>
		</div>

		<!-- Posts -->
		<div v-if="!loading && webContents.length != 0" class="">
			<h6
				class="mb-4 text-center text-uppercase text-spread-sm text-light text-backlit"
			>Posts</h6>

			<BRow class="my-5">
				<BCol
					v-for="(w, i) in webContents"
					:key="i"
					cols="12"
					class="mx-auto"
				>
					<RouterLink :to="`/blog/read/${w._id}`" class="">
						<BCard bg-variant="light" border-variant="dark" class="mb-4 backlit">
							<h5 class="m-0 text-center text-uppercase text-spread-sm text-secondary">
								{{ w.name }}
							</h5>

							<h6 class="m-0 text-center text-spread-sm text-muted small">
								{{ new Date(w.createdTimeStamp).toLocaleString() }}
							</h6>
						</BCard>
					</RouterLink>
				</BCol>

				<BCol v-if="webContents.length == 0 && pinnedWebContents.length == 0">
					<h3 class="text-center text-light ">
						No Blog Posts Yet
					</h3>
					<h6 class="text-center text-dark ">
						Check Back Soon!
					</h6>
				</BCol>
			</BRow>
		</div>

	</BContainer>
</template>

<script>
	import axios from 'axios'

	export default {
		name: "p-blog",

		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/blog',
				}),

				loading: true,
				resData: {},
				error: '',

				pinnedWebContents: [],
				webContents: [],
			}
		},

		methods: {
			async getPageData() {
				try {
					this.error = ''

					this.resData = await this.authAxios.get('/')

					// Pinned Web Contents
					this.pinnedWebContents = this.resData.data.pinnedWebContents

					// Web Contents
					this.webContents = this.resData.data.webContents


					this.loading = false
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
