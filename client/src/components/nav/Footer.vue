<template>
	<div class="w-100 py-6 text-light border-top border-secondary bg-svg-dark">
		<BContainer>
			<BRow>
				<BCol cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-light">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-light">Hours</h4>
					<ul class="list-unstyled text-small text-primary">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-light">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4>Company</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/contact">
								Home
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/services">
								Services
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/contact">
								Contact
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/about">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/gallery">
								Gallery
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
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