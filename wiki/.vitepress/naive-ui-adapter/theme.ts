/**
 * 接入 Naive UI 并同步主题
 * https://www.naiveui.com/zh-CN/os-theme/docs/vitepress
 */

import { setup } from '@css-render/vue3-ssr'
import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui'
import { useData, useRoute } from 'vitepress'
import { defineComponent, reactive, inject, h, watchEffect } from 'vue'

import Layout from '../theme/Layout.vue'

const CssRenderStyle = defineComponent({
  setup() {
    const collect = inject('css-render-collect') as () => any
    return {
      style: collect(),
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style,
    })
  },
})

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  },
})

const NaiveUIProvider = defineComponent({
  // 同步主题
  // https://github.com/07akioni/naive-ui-vitepress-demo/issues/2
  // https://github.com/tusen-ai/naive-ui/pull/6057
  setup() {
    const isDark = useData().isDark
    const providerProps = reactive({
      abstract: true,
      inlineThemeDisabled: true,
      theme: isDark ? darkTheme : lightTheme, // set on SSR
    })

    return {
      isDark,
      providerProps,
    }
  },
  mounted() {
    watchEffect(() => {
      // set on client
      this.providerProps.theme = this.isDark ? darkTheme : lightTheme
    })
  },
  render() {
    return h(NConfigProvider, this.providerProps, {
      default: () => [
        h(Layout, null, { default: this.$slots.default?.() }),
        // @ts-ignore 没有识别 vite 的`import.meta.env`
        import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null,
      ],
    })
  },
})
export { NaiveUIProvider as Layout }

export function enhanceApp({ app }) {
  // @ts-ignore 没有识别 vite 的`import.meta.env`
  if (import.meta.env.SSR) {
    const { collect } = setup(app)
    app.provide('css-render-collect', collect)
  }
}
