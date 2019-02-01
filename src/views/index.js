import { shell } from 'electron'

export default {
  name: 'homePage',
  data() {
    return {
      userAgent: navigator.userAgent
    }
  },
  computed: {

  },
  components: {
  },
  mounted() {
    this.$nextTick(() => {

    })
  },
  methods: {
    openExternal(e) {
      shell.openExternal(e.target.href)
    }
  }
}