import commander from 'commander';

commander
  .version('1.0.0')
  .command('hello [name]')
  .description('Say hello')
  .action((name) => {
    console.log(`Hello, ${name || 'world'}!`);
  });

commander.parse(process.argv);
