
import loading from '@/components/common/loading/index.vue'

export default {
  name: 'homePage',
  data() {
    return {
      list: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '深圳' }
      ]
    }
  },
  computed: {

  },
  components: {
    loading
  },
  mounted() {

  },
  methods: {
  }
}