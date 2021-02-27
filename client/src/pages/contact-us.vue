<template>
	<!-- Content -->
	<BContainer>
		<BCard bg-variant="white" class="mx-auto my-4" style="max-width: 500px;">
			<!-- [R1] -->
			<BRow class="mb-4">
				<!-- Get a Quote -->
				<BCol cols="12">
					<h3 class="text-center text-primary">
						<GetQuote :title="defaultData.cnt1.r2.c1.r2.c1.title" />
					</h3>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import GetQuote from '@/components/company/GetQuote'
	import defaultData from '@/defaults/pages/contact-us'

	export default {
		components: {
			GetQuote,
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>