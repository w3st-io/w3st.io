<template>
	<BContainer>
		<BRow class="my-5">
			<BCol cols="12" class="text-center">
				<h1 class="mb-4 text-light">A Few of Our Sites</h1>

				<BRow class="mx-1">
					<BCol
						v-for="(cp, i) in clientProjects"
						:key="i"
						cols="12" md="6"
						class="p-0 border border-primary shadow cp"
						:style="`
							background-image: url(${cp.image});
							background-position: center;
						`"
						data-aos="fade-down"
						data-aos-offset="-10000"
						:data-aos-delay="200 * i"
					>
						<div class="h-100 py-5 bg-shade">
							<a :href="cp.link" target="blank" class="text-decoration-none">
								<h1 class="text-light">{{ cp.title }}</h1>
							</a>
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
		min-height: 140px;
		overflow: hidden;

		&:hover {
			
			h1 {
				@extend .text-primary;
			}

			.bg-shade {
				background-color: rgba(0, 0, 0, .45) !important;
			}
		}
	}
</style>