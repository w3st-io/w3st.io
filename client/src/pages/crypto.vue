<template>
	<div>
		<MarketOverview
			:options="{
				'colorTheme': 'light',
				'dateRange': '12M',
				'showChart': false,
				'locale': 'en',
				'width': '100%',
				'height': '100%',
				'largeChartUrl': '',
				'isTransparent': true,
				'showSymbolLogo': true,
				'showFloatingTooltip': false,
				'tabs': [
					{
					'title': 'cRYPTO',
					'symbols': [
						{
						's': 'COINBASE:ETHUSD'
						},
						{
						's': 'COINBASE:BTCUSD'
						},
						{
						's': 'COINBASE:MATICUSD'
						},
						{
						's': 'COINBASE:LINKUSD'
						},
						{
						's': 'COINBASE:UNIUSD'
						},
						{
						's': 'COINBASE:CRVUSD'
						},
						{
						's': 'COINBASE:COMPUSD'
						},
						{
						's': 'COINBASE:OPUSD'
						}
					]
					}
				]
			}"
		/>
	</div>
</template>

<script>
import { MarketOverview } from 'vue-tradingview-widgets';

export default {
	components: {
		MarketOverview,
	}
}
</script>