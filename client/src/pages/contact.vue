<template>
	<!-- Content -->
	<BContainer>
		<BCard bg-variant="dark" class="mx-auto my-5" style="max-width: 600px;">
			<!-- [R1] -->
			<BRow class="">
				<!-- Get a Quote -->
				<BCol cols="12">
					<h2 class="mb-5 text-center text-primary">Contact Us</h2>

					<a href="mailto:w3st.io2021@gmail.com">
						<h3 class="text-center text-light">
							Email: w3st.io2021@gmail.com
						</h3>
					</a>
					<br>

					<a href="tel:2013626859">
						<h3 class="mb-4 text-center text-light">
							Cell: 201-362-6859
						</h3>
					</a>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import defaultData from '@/defaults/pages/contact'

	export default {
		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>