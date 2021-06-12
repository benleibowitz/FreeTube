import Vue from 'vue'
import { mapActions } from 'vuex'
import FtCard from '../ft-card/ft-card.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
import FtButton from '../ft-button/ft-button.vue'
import FtSelect from '../ft-select/ft-select.vue'
import FtFlexBox from '../ft-flex-box/ft-flex-box.vue'
import FtInput from '../ft-input/ft-input.vue'

export default Vue.extend({
  name: 'SubscriptionSettings',
  components: {
    'ft-card': FtCard,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-button': FtButton,
    'ft-select': FtSelect,
    'ft-flex-box': FtFlexBox,
    'ft-input': FtInput
  },
  data: function () {
    return {
      title: 'Subscription Settings',
      viewNames: [
        'Basic',
        'Modern'
      ],
      viewValues: [
        'basic',
        'modern'
      ]
    }
  },
  computed: {
    hideWatchedSubs: function () {
      return this.$store.getters.getHideWatchedSubs
    },
    useRssFeeds: function () {
      return this.$store.getters.getUseRssFeeds
    },
    blockedChannelNames: function () {
      return this.$store.getters.getBlockedChannelNames
    }
  },
  methods: {
    handleUpdateBlockedChannelNames: function (value) {
      this.updateBlockedChannelNames(value)
    },

    ...mapActions([
      'updateHideWatchedSubs',
      'updateUseRssFeeds',
      'updateBlockedChannelNames'
    ])
  }
})
