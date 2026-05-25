const { spawn } = require('child_process');

console.log('Starting mock:vision and mock:core concurrently...');

const spawnOptions = { shell: true, stdio: 'inherit' };
const vision = spawn('npm', ['run', 'mock:vision'], spawnOptions);
const core = spawn('npm', ['run', 'mock:core'], spawnOptions);

process.on('SIGINT', () => {
  vision.kill();
  core.kill();
  process.exit(0);
});

process.on('exit', () => {
  vision.kill();
  core.kill();
});
