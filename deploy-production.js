const { execSync } = require('child_process');

try {
  console.log('Deploying to production...');

  exec('git checkout production');
  exec('git reset --hard develop');
  exec('git push origin production --force');
  exec('git checkout develop');

  console.log('\nDeployed successfully 🚀✅');
  console.log(
    `- https://github.com/dev-pisapizza/pisa-pizza/actions?query=branch%3Apisa-pizza%2Fproduction++`,
  );
} catch (error) {
  clearInterval(loadingAnimation); // Stop the loading animation
  console.error('\nError:', error.message);
  console.error('Deployment to production failed.');
}

function exec(cmd, quiet = true) {
  if (quiet) {
    execSync(`${cmd} > /dev/null 2>&1 || true`);
  } else {
    execSync(cmd);
  }
}
