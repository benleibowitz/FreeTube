import Vue from 'vue'
import { mapActions } from 'vuex'
import FtSettingsSection from '../ft-settings-section/ft-settings-section.vue'
import FtToggleSwitch from '../ft-toggle-switch/ft-toggle-switch.vue'
<<<<<<< HEAD
=======
import FtButton from '../ft-button/ft-button.vue'
import FtSelect from '../ft-select/ft-select.vue'
import FtFlexBox from '../ft-flex-box/ft-flex-box.vue'
import FtInput from '../ft-input/ft-input.vue'
>>>>>>> 1ab549ca (Blocked channels)

export default Vue.extend({
  name: 'SubscriptionSettings',
  components: {
<<<<<<< HEAD
    'ft-settings-section': FtSettingsSection,
    'ft-toggle-switch': FtToggleSwitch
=======
    'ft-card': FtCard,
    'ft-toggle-switch': FtToggleSwitch,
    'ft-button': FtButton,
    'ft-select': FtSelect,
    'ft-flex-box': FtFlexBox,
    'ft-input': FtInput
>>>>>>> 1ab549ca (Blocked channels)
  },
  data: function () {
    return {
      title: 'Subscription Settings'
    }
  },
  computed: {
    hideWatchedSubs: function () {
      return this.$store.getters.getHideWatchedSubs
    },
    useRssFeeds: function () {
      return this.$store.getters.getUseRssFeeds
    },
<<<<<<< HEAD
    fetchSubscriptionsAutomatically: function () {
      return this.$store.getters.getFetchSubscriptionsAutomatically
=======
    blockedChannelNames: function () {
      return this.$store.getters.getBlockedChannelNames
>>>>>>> 1ab549ca (Blocked channels)
    }
  },
  methods: {
    handleUpdateBlockedChannelNames: function (value) {
      this.updateBlockedChannelNames(value)
    },

    ...mapActions([
      'updateHideWatchedSubs',
      'updateUseRssFeeds',
<<<<<<< HEAD
      'updateFetchSubscriptionsAutomatically'
=======
      'updateBlockedChannelNames'
>>>>>>> 1ab549ca (Blocked channels)
    ])
  }
})
