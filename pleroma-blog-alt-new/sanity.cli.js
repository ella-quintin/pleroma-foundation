import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8cbp73ti',
    dataset: 'production'
  },
 studioHost: 'pleroma-blog-alt-new',
  autoUpdates: true,
})
