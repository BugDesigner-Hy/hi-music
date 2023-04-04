import { StyleValue } from 'vue'

export interface Props {
	imageSrc: string
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
	playNumStyle?: StyleValue
}
