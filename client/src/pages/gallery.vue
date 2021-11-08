<template>
	<BContainer class="py-6">
		<BCard
			bg-variant="dark"
			text-variant="light"
			border-variant="primary"
			no-body
			class="shadow bg-transparent"
		>
			<BCardHeader class="border-primary">
				<h1 class="my-4 text-center font-weight-bold text-primary text-uppercase">
					{{ defaultData.r1.c1.title }}
				</h1>
			</BCardHeader>

			<BCardHeader class="py-5">
				<!-- viewer -->
				<viewer :options="{ title: false, transition: false, }">
					<!-- [R3] -->
					<BRow class="mb-3">
						<BCol
							v-for="(col, i) in defaultData.r3.cx"
							:key="i"
							cols="12" sm="6" md="4" lg="3" xl="3"
							class=""
						>
							<img
								:src="col.image"
								alt="No Photo"
								class="w-100 rounded"
								style="height: 300px; object-fit: cover;"
							>
						
							<a :href="col.link" target="blank">
								<h4 class="text-center my-4 font-weight-bold">
									Visit {{ col.title }}
								</h4>
							</a>
						</BCol>
					</BRow>
				</viewer>

				<!-- [R4] -->
				<BRow v-if="defaultData.r5.cx.length > 0" class="mb-3">
					<BCol cols="12">
						<h3 class="m-0 text-light" data-aos="fade-right">
							{{ defaultData.r4.c1.title }}
						</h3>
					</BCol>
				</BRow>
			</BCardHeader>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] //
	import { getIdFromURL } from 'vue-youtube-embed'

	// [IMPORT] Personal //
	import defaultData from '../defaults/pages/gallery'

	export default {
		data() {
			return {
				defaultData: defaultData,
			}
		},

		methods: {
			getIdFromURL(url) { return getIdFromURL(url) }
		},
	}
</script>