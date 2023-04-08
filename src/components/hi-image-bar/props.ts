import { StyleValue } from 'vue'

export interface Props {
	imageSrc: string
	width?: string
	height?: string
	showPlayIcon?: boolean
	showPlayIconType: 'hover' | 'always'
	primaryText: string
	playIconStyle?: StyleValue
	playIconPosition?: 'tl' | 'tr' | 'bl' | 'br' | 'center'
}
