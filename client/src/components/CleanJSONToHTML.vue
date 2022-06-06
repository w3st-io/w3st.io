<template>
	<div class="cleanJSON">
		<div v-for="(b, i) in cleanJSON.blocks" :key="i">
			<!-- Code -->
			<code v-if="b.type == 'code'">
				{{ b.data.code }}
			</code>

			<!-- Delimiter -->
			<hr v-if="b.type == 'delimiter'" class="w-100 border-light">

			<!-- Embed -->
			<div v-if="b.type == 'embed' && b.data.service == 'youtube'">
				<youtube
					:video-id="getIdFromURL(b.data.embed)"
					player-width="100%"
					class="mx-auto"
					style="max-width: 700px;"
				/>
				<p v-html="b.data.caption" />
			</div>

			<!-- Headers -->
			<h1
				v-if="b.type == 'header' && b.data.level == 1"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<h2
				v-if="b.type == 'header' && b.data.level == 2"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<h3
				v-if="b.type == 'header' && b.data.level == 3"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<h4
				v-if="b.type == 'header' && b.data.level == 4"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<h5
				v-if="b.type == 'header' && b.data.level == 5"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<h6
				v-if="b.type == 'header' && b.data.level == 6"
				v-html="b.data.text"
				class="font-weight-bold text-primary"
			/>

			<!-- Image -->
				<viewer
					v-if="b.type == 'image'"
					:options="{ title: false, transition: false, }"
				>
					<div
						class="
							mx-auto
							mt-4
							mb-3
							rounded
							img-container
							border
							border-primary
						"
						style="max-width: 600px; border-width: 3px !important;"
					>
						<img
							:src="b.data.url"
							v-lazy="b.data.url"
							alt=""
							class="w-100"
						>
					</div>
					<p v-html="b.data.caption" class="text-center font-weight-bold" />
				</viewer>

			<!-- List Unordered -->
			<ul v-if="b.type == 'list' && b.data.style == 'unordered'" class="my-3">
				<li
					v-for="(li, ii) in b.data.items"
					:key="ii"
					v-html="li"
					class="mb-2"
				/>
			</ul>

			<!-- List Ordered -->
			<ol v-if="b.type == 'list' && b.data.style == 'ordered'" class="my-3">
				<li
					v-for="(li, ii) in b.data.items"
					:key="ii"
					v-html="li"
					class="mb-2"
				/>
			</ol>

			<!-- Paragraph -->
			<p v-if="b.type == 'paragraph'" v-html="b.data.text" class="mb-2" />

			<!-- Quote -->
			<figure v-if="b.type == 'quote'" class="mx-auto" style="max-width: 800px;">
				<blockquote>
					<i v-html="b.data.text" />
				</blockquote>
				<figcaption v-html="b.data.caption" />
			</figure>

			<!-- Table -->
			<table v-if="b.type == 'table'" class="table table-striped table-dark">
				<tr v-for="(row, index) in b.data.content" :key="index">
					<td v-for="(col, index) in row" :key="index" v-html="col" />
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import { getIdFromURL } from 'vue-youtube-embed'

	export default {
		props: {
			cleanJSON: {
				type: Object,
				required: true,
			}
		},

		methods: {
			getIdFromURL(url) { return getIdFromURL(url) }
		},
	}
</script>

<style lang="scss" scoped>
	h1,h2,h3,h4,h5,h6 {
		margin: 25px 0 !important;
		text-transform: uppercase;
	}

	.img-container {
		max-height: 600px;
		overflow: hidden;
	}
</style>