<template>
	<BContainer class="my-5" style="height: 100vh;">
		<BCard bg-variant="dark" text-variant="light" class="m-auto text-light" style="max-width: 600px;">
			<h1 class="text-center text-primary">About W3ST.IO</h1>
			<p>
				Based in Teaneck NJ W3ST.IO is a web development company providing businesses the websites that cater to their needs! We take pride in what we make and are only satisfied when our customers are as well. Applications are coded and maintained by our fantastic hard working team so we can provide a highly customizable service for any of our clients! Nothing is impossible in the W3ST..

				<br><br>
				W3ST.IO was founded by Aleem Ahmed in 2021
			</p>
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