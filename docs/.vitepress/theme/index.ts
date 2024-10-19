import './style/var.css'

import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NavVisitor from './components/NavVisitor.vue'

export default   {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout,null,{
      'nav-bar-title-after': () => h(NavVisitor),
    })
  },
}
