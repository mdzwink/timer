let timers = process.argv.slice(2);


const timer = (inputTimers) => {
  for (let time of inputTimers) {
    setTimeout(() =>{
      process.stdout.write('\x07')
      // console.log('BEEP!')
    }, time * 1000);
  }
}
timer(timers);