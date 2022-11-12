<template>
	<div class="w-100 py-6 text-light border-top border-secondary bg-svg-dark">
		<BContainer>
			<BRow>
				<BCol cols="12" sm="6" class="text-center" data-aos="fade-up" data-aos-once="true">
					<h4>Company</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/contact">
								Home
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/contact">
								Contact
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/code">
								Code
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/blog">
								Blog
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="6" class="text-center" data-aos="fade-up" data-aos-once="true">
					<h4>Legal</h4>
					<ul class="list-unstyled text-small">
						<li>
							<a href="https://www.freeprivacypolicy.com/live/8c02deff-f1b1-4643-aabb-f4ca6e3e3a54">
								Privacy & Policy Statement
							</a>
						</li>

						<li>
							<RouterLink to="/privacy-policy">
								Privacy & Policy Statement
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" class="my-3 text-center text-secondary">
					<h6>© w3st.io {{ new Date().getFullYear() }}</h6>
					<br><br><br>

					<!-- [CREDIATION] -->
					<a href="https://icons8.com/icon/82749/menu">
						Menu icon by Icons8
					</a>
				</BCol>

				
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo
			}
		},
	}
</script>