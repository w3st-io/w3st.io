<template>
	<BContainer class="my-5" style="height: 100vh;">
		<BCard bg-variant="dark" text-variant="light" class="m-auto text-light" style="max-width: 600px;">
			<h1 class="text-center text-primary">Services We Provide</h1>
			<ul>
				<li>Web Development</li>
				<li>Hosting and Maintaining</li>
				<li>Payment Proccessing</li>
				<li>Functional Application</li>
				<li>E-Commerce Integration</li>
			</ul>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import defaultData from '@/defaults/pages/about'


	export default {
		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>