<template>
	<div>
		<table
			v-if="service.features.length > 0"
			class="m-0 table table-dark bg-shade-less"
		>
			<thead>
				<tr class="text-center font-weight-bold">
					<td></td>

					<!-- Features -->
					<td
						v-for="(f, i) in service.features"
						:key="i"
						style="min-width: 100px;"
					>{{ f }}</td>

					<td>Pricing</td>
				</tr>
			</thead>

			<tbody>
				<tr
					v-for="(v, i) in service.variants"
					:key="i"
				>
					<!-- Variant Name -->
					<td class="text-center font-weight-bold">
						{{ v.name }}
					</td>

					<!-- Feature Availability -->
					<td
						v-for="(f, ii) in service.features"
						:key="ii"
						class="text-center font-weight-bold"
					>
						<span
							v-if="ii <= v.featureLimit - 1"
						>✓</span>
					</td>

					<!-- Variant Name -->
					<td class="text-center">
						<BBadge variant="success">
							<h6 class="m-0 font-weight-bold">
								{{ v.price }}
							</h6>
						</BBadge>
					</td>
				</tr>
			</tbody>
		</table>

		<div v-else class="text-center">
			<h4>
				<span>
					<!-- Variant Name -->
					<BBadge variant="success">
						<h6 class="m-0 font-weight-bold">
							{{ service.variants[0].price }}
						</h6>
					</BBadge>
				</span>
			</h4>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			service: {
				type: Object,
				required: true,
			}
		}
	}
</script>