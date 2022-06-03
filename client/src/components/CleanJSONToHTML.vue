<template>
	<div>
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
				<p>{{ b.data.caption }}</p>
			</div>

			<!-- Headers -->
			<h1 v-if="b.type == 'header' && b.data.level == 1">
				{{ b.data.text }}
			</h1>

			<h2 v-if="b.type == 'header' && b.data.level == 2">
				{{ b.data.text }}
			</h2>

			<h3 v-if="b.type == 'header' && b.data.level == 3">
				{{ b.data.text }}
			</h3>

			<h4 v-if="b.type == 'header' && b.data.level == 4">
				{{ b.data.text }}
			</h4>

			<h5 v-if="b.type == 'header' && b.data.level == 5">
				{{ b.data.text }}
			</h5>

			<h6 v-if="b.type == 'header' && b.data.level == 6">
				{{ b.data.text }}
			</h6>

			<!-- Image -->
			<viewer
				v-if="b.type == 'image'"
				:options="{ title: false, transition: false, }"
				class="text-center"
			>
				<img :src="b.data.url" alt="">
				<p>{{ b.data.caption }}</p>
			</viewer>

			<!-- List Unordered -->
			<ul v-if="b.type == 'list' && b.data.style == 'unordered'" class="my-2">
				<li v-for="(li, index) in b.data.items" :key="index">
					{{ li }}
				</li>
			</ul>

			<!-- List Ordered -->
			<ol v-if="b.type == 'list' && b.data.style == 'ordered'" class="my-2">
				<li v-for="(li, index) in b.data.items" :key="index">
					{{ li }}
				</li>
			</ol>

			<!-- Paragraph -->
			<p v-if="b.type == 'paragraph'" class="mb-2">{{ b.data.text }}</p>

			<!-- Quote -->
			<figure v-if="b.type == 'quote'">
				<blockquote>
					<i>{{ b.data.text }}</i>
				</blockquote>
				<figcaption>{{ b.data.caption }}</figcaption>
			</figure>

			<!-- Table -->
			<table v-if="b.type == 'table'" class="table table-striped table-dark">
				<tr v-for="(row, index) in b.data.content" :key="index">
					<td v-for="(col, index) in row" :key="index">{{ col }}</td>
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