// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://wilfriedago.me',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700, 800],
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500],
      fallbacks: ['ui-monospace', 'monospace']
    }
  ]
})
