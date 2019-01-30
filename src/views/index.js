import fs from 'fs'
import pngjs from 'pngjs'
import pixelmatch from 'pixelmatch'
import { shell } from 'electron'

import loading from '@/components/common/loading/index.vue'

export default {
  name: 'homePage',
  data() {
    return {
      list: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '深圳' }
      ],
      userAgent: navigator.userAgent
    }
  },
  computed: {

  },
  components: {
    loading
  },
  mounted() {
    this.$nextTick(() => {

    })
  },
  methods: {
    openExternal(e) {
      shell.openExternal(e.target.href)
    },
    pixelmatchImg() {
      let PNG = pngjs.PNG
      let img1 = fs.createReadStream('src/assets/4a.png').pipe(new PNG()).on('parsed', doneReading)
      let img2 = fs.createReadStream('src/assets/4b.png').pipe(new PNG()).on('parsed', doneReading)
      let filesRead = 0

      function doneReading() {
        if (++filesRead < 2) return
        let diff = new PNG({ width: img1.width, height: img1.height })

        pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, { threshold: 0.1 })

        diff.pack().pipe(fs.createWriteStream('src/assets/diff.png'))
      }
    }
  }
}