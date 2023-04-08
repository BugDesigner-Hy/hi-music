import { StyleValue } from 'vue'

export interface Props {
	imageSrc: string
	imageScale: boolean
	width?: string
	height?: string
	showPlayNum?: boolean
	playNum?: string
	showPlayIcon?: boolean
	showPlayIconType: 'hover' | 'always'
	showDrawer?: boolean
	topDrawerText?: string
	buttomText?: string
	playIconStyle?: StyleValue
	playIconPosition?: 'tl' | 'tr' | 'bl' | 'br' | 'center'
	playNumStyle?: StyleValue
}
