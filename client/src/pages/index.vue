<template>
	<BContainer class="py-6">
		<BRow>
			<BCol cols="12" class="text-center">
				<h1 class="my-4 text-uppercase text-primary text-spread">
					Our Works
				</h1>

				<BRow class="my-5">
					<BCol
						v-for="(cp, i) in clientProjects"
						:key="i"
						cols="12" md="6"
						class="pb-5 px-3"
						data-aos="fade-down"
						data-aos-offset="-10000"
						:data-aos-delay="200 * i"
					>
						<div
							class="border border-primary shadow cp"
							:style="`
								background-image: url(${cp.image});
								background-position: center;
							`"
						>
							<div class="pt-4 h-100 bg-shade2">
								<a :href="cp.link" target="_blank" class="text-decoration-none">
									<h1 class="pt-4 text-uppercase">{{ cp.title }}</h1>
								</a>
							</div>
						</div>
					</BCol>
				</BRow>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import clientProjects from '@/defaults/client-projects'

	export default {
		data() {
			return {
				clientProjects: clientProjects
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/bootstrap-override.scss';

	.cp {
		height: 150px;
		overflow: hidden;

		.bg-shade2 {
			height: 150px;
			background-color: rgba(0, 0, 0, .8) !important;
		}

		&:hover {
			.bg-shade2 {
				background-color: rgba(0, 0, 0, .7) !important;
			}
		}
	}
</style>