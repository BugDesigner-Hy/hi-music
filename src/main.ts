import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import App from './App.vue'

const app = createApp(App)
app.use(ArcoVueIcon)

app.mount('#app')
