const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  appPath: resolveApp('src/'),
  appIndex: resolveApp('src/index.ts'),
  appPublic: resolveApp('public/'),
  appHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  buildPath: resolveApp('../build'),
};
