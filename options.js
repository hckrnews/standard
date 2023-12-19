import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import eslint from 'eslint'
import stdOpts from 'standard/lib/options.js'

const stdVersion = stdOpts.version
const pkgUrl = new URL('./package.json', import.meta.url)
const pkg = JSON.parse(readFileSync(pkgUrl, 'utf-8'))
const configFile = fileURLToPath(new URL('eslintrc.json', import.meta.url))

export default ({
  bugs: pkg.bugs.url,
  cmd: 'hckrstandard',
  eslint,
  eslintConfig: {
    configFile,
    useEslintrc: true
  },
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (tweaked by Hckr.News)',
  version: `${pkg.version} (standard ${stdVersion})`
})
