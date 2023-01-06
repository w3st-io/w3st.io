<template>
	<BContainer class="py-5 text-center">
		<h6 class="mb-4 text-uppercase text-light text-spread text-backlit">
			Our Works
		</h6>

		<BRow class="my-5">
			<BCol
				v-for="(cp, i) in clientProjects"
				:key="i"
				cols="12" md="6"
				class="px-4"
				data-aos="fade-down"
				data-aos-offset="-10000"
				:data-aos-delay="200 * i"
			>
				<a :href="cp.link" target="_blank" class="text-decoration-none">
					<!-- the-box -->
					<div
						class="mb-2 rounded backlit the-box"
						:style="`
							background-image: url(${cp.image});
							background-position: center;
						`"
					>
						<!-- the-box-content -->
						<div class="h-100 the-box-content text-holder">
							<!-- Website Names -->
							<h3
								class="
									text-white
									text-uppercase
									text-backlit
								"
							>{{ cp.title }}</h3>
						</div>
					</div>
				</a>

				<a :href="cp.source" target="_blank">
					<BButton variant="outline-light" pill class="mb-3">Source Code</BButton>
				</a>
			</BCol>

			<BCol cols="12">
				<a href="https://www.w3st.io/fun" target="_blank">
					<BButton variant="outline-light" pill>Bored?</BButton>
				</a>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT]
	import axios from 'axios'

	// [IMPORT] Personal //
	import clientProjects from '@/defaults/client-projects'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages',
				}),

				clientProjects: clientProjects
			}
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
	@import '../assets/styles/bootstrap-override.scss';

	.the-box {
		height: 200px;
		overflow: hidden;

		.the-box-content {
			height: 200px;
			backdrop-filter: blur(4px)!important;
			background-color: rgba(0, 0, 0, 60%) !important;
		}

		&:hover {
			.the-box-content {
				background-color: rgba(0, 0, 0, 50%) !important;
			}
			@extend .border-light;
		}

		.text-holder {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>