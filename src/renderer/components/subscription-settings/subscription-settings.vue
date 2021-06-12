<template>
<<<<<<< HEAD
  <ft-settings-section
    :title="$t('Settings.Subscription Settings.Subscription Settings')"
  >
    <div class="switchColumnGrid">
      <div class="switchColumn">
        <ft-toggle-switch
          :label="$t('Settings.Subscription Settings.Fetch Automatically')"
          :default-value="fetchSubscriptionsAutomatically"
          :tooltip="$t('Tooltips.Subscription Settings.Fetch Automatically')"
          :compact="true"
          @change="updateFetchSubscriptionsAutomatically"
        />
        <ft-toggle-switch
          :label="$t('Settings.Subscription Settings.Fetch Feeds from RSS')"
          :default-value="useRssFeeds"
          :tooltip="$t('Tooltips.Subscription Settings.Fetch Feeds from RSS')"
          :compact="true"
          @change="updateUseRssFeeds"
        />
      </div>
      <div class="switchColumn">
        <ft-toggle-switch
          :label="$t('Settings.Subscription Settings.Hide Videos on Watch')"
          :default-value="hideWatchedSubs"
          :compact="true"
          @change="updateHideWatchedSubs"
        />
      </div>
    </div>
  </ft-settings-section>
=======
  <details>
    <summary>
      <h3>
        {{ $t("Settings.Subscription Settings.Subscription Settings") }}
      </h3>
    </summary>
    <hr>
    <ft-flex-box class="subscriptionSettingsFlexBox">
      <ft-toggle-switch
        :label="$t('Settings.Subscription Settings.Hide Videos on Watch')"
        :default-value="hideWatchedSubs"
        @change="updateHideWatchedSubs"
      />
      <ft-toggle-switch
        :label="$t('Settings.Subscription Settings.Fetch Feeds from RSS')"
        :default-value="useRssFeeds"
        :tooltip="$t('Tooltips.Subscription Settings.Fetch Feeds from RSS')"
        @change="updateUseRssFeeds"
      />
      <ft-input
        placeholder="Blocked Channel Names (comma-separated)"
        :show-arrow="false"
        :show-label="true"
        :value="blockedChannelNames"
        @input="handleUpdateBlockedChannelNames"
      />
    </ft-flex-box>
    <br>
    <ft-flex-box>
      <ft-select
        v-if="false"
        placeholder="Subscription View Type"
        :value="viewValues[0]"
        :select-names="viewNames"
        :select-values="viewValues"
      />
    </ft-flex-box>
    <br>
    <ft-flex-box>
      <ft-button
        v-if="false"
        label="Manage My Subscriptions"
      />
    </ft-flex-box>
  </details>
>>>>>>> 1ab549ca (Blocked channels)
</template>

<script src="./subscription-settings.js" />
