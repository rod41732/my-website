const ghpages = require('gh-pages')
const ArgumentParser = require('argparse').ArgumentParser;
const parser = ArgumentParser({
  version: "0.0.1",
  addHelp: true,
  description: "push gatsby build to github",
});
parser.addArgument(
  ["-m", "--message"], 
  {
    help: "commit message",
  }
);
const args = parser.parseArgs();
console.dir(args);

const message = args.message;
if (!message || message.trim() === "") {
  console.log(message);
  console.error("Please specify commit message (see npm run deploy -h)");
} else {
  ghpages.publish(
    'public',
    {
      branch: 'master',
      repo: 'https://github.com/rod41732/rod41732.github.io.git',
      message: process.argv[1],
    },
    () => {
      console.log('Deploy Complete!')
    },
    (err) => {
      console.log("Error deploying")
      console.error(err)
    }
  )
}