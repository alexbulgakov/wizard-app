import type { UseAdaptivity } from '@vkontakte/vk-bridge-react';

import {
  getViewHeightByViewportHeight,
  getViewWidthByViewportWidth,
  type AdaptivityProps,
  ViewWidth,
  SizeType,
} from '@vkontakte/vkui';

export const transformVKBridgeAdaptivity = ({
  viewportHeight,
  viewportWidth,
  type,
}: UseAdaptivity): AdaptivityProps => {
  switch (type) {
    case 'adaptive':
      return {
        viewHeight: getViewHeightByViewportHeight(viewportHeight),
        viewWidth: getViewWidthByViewportWidth(viewportWidth),
      };
    case 'force_mobile':
    case 'force_mobile_compact':
      return {
        sizeY:
          type === 'force_mobile_compact' ? SizeType.COMPACT : SizeType.REGULAR,
        viewWidth: ViewWidth.MOBILE,
        sizeX: SizeType.COMPACT,
      };
    default:
      return {};
  }
};
