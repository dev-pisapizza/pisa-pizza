const { execSync } = require('child_process');
const os = require('os');

try {
  console.log('Deploying to production...');

  exec('git push origin develop --force-with-lease');
  exec('git checkout production');
  exec('git reset --hard develop');
  exec('git push origin production --force-with-lease');
  exec('git checkout develop');

  console.log('\nDeployed successfully 🚀✅');
  console.log(`- https://github.com/dev-pisapizza/pisa-pizza/actions?query=branch%3Aproduction++`);
} catch (error) {
  console.error('\nError:', error.message);
  console.error('Deployment to production failed.');
}

function exec(cmd, quiet = true) {
  const isWindows = os.platform() === 'win32';
  if (quiet) {
    const redirect = isWindows ? '> NUL 2>&1' : '> /dev/null 2>&1';
    execSync(`${cmd} ${redirect}`, { stdio: 'ignore', shell: isWindows ? 'cmd.exe' : '/bin/sh' });
  } else {
    execSync(cmd, { stdio: 'inherit', shell: isWindows ? 'cmd.exe' : '/bin/sh' });
  }
}
