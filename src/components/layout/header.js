
import { remote } from 'electron'

import logoImg from '@/assets/logo.png'

export default {
  data() {
    return {
      logoImg: logoImg,
      isMaximize: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      remote.BrowserWindow.getFocusedWindow().addListener('maximize', (val) => {
        console.log(val)
        this.isMaximize = false
      })
      remote.BrowserWindow.getFocusedWindow().addListener('unmaximize', (val) => {
        console.log(val)
        this.isMaximize = true
      })
    })
  },
  methods: {
    minimize() {
      remote.BrowserWindow.getFocusedWindow().minimize()
    },
    maximize() {
      if (this.isMaximize) {
        remote.BrowserWindow.getFocusedWindow().maximize()
      }
      else {
        remote.BrowserWindow.getFocusedWindow().unmaximize()
      }
      this.isMaximize = !this.isMaximize
    },
    close() {
      remote.BrowserWindow.getFocusedWindow().close()
    }
  },
}
