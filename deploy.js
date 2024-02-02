const { execSync } = require('child_process');

execSync('git checkout production');

// Reset the production branch to the tagged commit
execSync(`git reset --hard develop`);

// Push the updated production branch to the remote repository
execSync('git push origin production --force');

console.log('Deployed to production successfully 🚀!');
