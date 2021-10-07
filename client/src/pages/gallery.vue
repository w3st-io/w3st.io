<template>
	<BContainer class="my-5">
		<BCard bg-variant="dark" text-variant="primary" class="shadow">
			<!-- [R1] -->
			<BRow>
				<BCol cols="12">
					<h1 class="mb-5 text-center font-weight-bold">
						{{ defaultData.r1.c1.title }}
					</h1>
				</BCol>
			</BRow>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }">
				<!-- [R3] -->
				<BRow class="mb-3">
					<BCol
						v-for="(col, index) in defaultData.r3.cx"
						:key="index"
						cols="12" sm="6" md="4" lg="3" xl="3"
						class="mb-3"
						data-aos="fade-up"
					>
						<img
							:src="col.image"
							alt="No Photo"
							class="w-100 rounded shadow"
							style="height: 300px; object-fit: cover;"
						>
					
						<a :href="col.link" target="blank">
							<h4 class="text-center my-4">
								Visit {{ col.title }}
							</h4>
						</a>
					</BCol>
				</BRow>
			</viewer>

			<!-- [R4] -->
			<BRow v-if="defaultData.r5.cx.length > 0" class="mb-3">
				<BCol cols="12">
					<h3 class="m-0 text-primary" data-aos="fade-right">
						{{ defaultData.r4.c1.title }}
					</h3>
				</BCol>
			</BRow>

			<BRow class="mb-3">
				<BCol
					v-for="(col, index) in defaultData.r5.cx"
					:key="index"
					cols="12" sm="6"
					class="mb-3 p-3"
					data-aos="fade-up"
				>
					<youtube
						:video-id="getIdFromURL(col.youtubeURL)"
						player-width="100%"
						style="max-width: 700px;"
					/>
				</BCol>
			</BRow>
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