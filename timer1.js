const timer = function(timeTo) {
  let countdown = timeTo * 1000;
  if (countdown > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, countdown);
  }
};

for (let j = 0; j < process.argv.length; j++) {
  timer(process.argv[j]);
}