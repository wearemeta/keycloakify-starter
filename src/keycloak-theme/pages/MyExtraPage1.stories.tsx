import { ComponentMeta } from '@storybook/react';
import KcApp from '../KcApp';

import { useKcStoryData } from '../../../.storybook/data'

export default {
  title: 'My Extra Page 1',
  component: KcApp,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof KcApp>;

const pageId = 'my-extra-page-1.ftl'

export const Default = () => {
  const { kcContext } = useKcStoryData({ pageId })
  return <KcApp kcContext={kcContext} />
}

export const InFrench = () => {
  const { kcContext } = useKcStoryData({ pageId, locale: { currentLanguageTag: 'fr' } })
  return <KcApp kcContext={kcContext} />
}
