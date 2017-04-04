import {
  NativeModules,
} from 'react-native';

const { SegmentAnalytics } = NativeModules;

export default {
  setup(configKey: string) {
    SegmentAnalytics.setup(configKey);
  },

  identify(userId: string, traits: Object) {
    SegmentAnalytics.identify(userId, traits);
  },

  track(trackText: string, properties: Object) {
    SegmentAnalytics.track(trackText, properties);
  },

  screen(screenName: string, properties: Object) {
    SegmentAnalytics.screen(screenName, properties);
  },

  alias(newId: string) {
    SegmentAnalytics.alias(newId);
  },

  group(groupName: string, properties: Object) {
    SegmentAnalytics.group(groupName, properties);
  },

  reset() {
    SegmentAnalytics.reset();
  },
};
