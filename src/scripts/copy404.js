// scripts/copy404.js
const fs = require('fs')
const path = require('path')

const distIndex = path.join(__dirname, '..', 'dist', 'index.html')
const dist404 = path.join(__dirname, '..', 'dist', '404.html')

if (!fs.existsSync(distIndex)) {
  console.error('dist/index.html no existe. Ejecuta "npm run build" antes.')
  process.exit(1)
}

fs.copyFileSync(distIndex, dist404)
console.log('copied dist/index.html -> dist/404.html')
