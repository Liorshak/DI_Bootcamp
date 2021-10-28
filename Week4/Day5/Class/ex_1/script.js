// // Exercise
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  increase(value = 1) {
    if (this.volume < 100) {
      this.volume += Math.min(value, 100 - this.volume);
    }
    console.log(this.volume);
  }
  decrease(value = 1) {
    if (this.volume > 0) {
      this.volume -= Math.min(value, this.volume - 0);
    }
    console.log(this.volume);
  }
  setChannel(value) {
    this.channel = Math.max(Math.min(value, 50), 0);
    console.log("setting the channel to: " + this.channel);
  }
  resetTV() {
    this.channel = 1;
    this.volume = 50;
    console.log(
      "TV has been resets the channel: " +
        this.channel +
        " and the volume: " +
        this.volume
    );
  }
  info() {
    console.log(
      "TV status: you are on channel: " +
        this.channel +
        " and your volume is: " +
        this.volume
    );
  }
}

const LG = new TV("LG");
LG.increase();

class SmartTV extends TV {
  constructor(brand, channel, volume, netflix = true) {
    super(brand, channel, volume);
    this.netflix = netflix;
  }
  increase() {
    super.increase(10);
  }
  decrease() {
    super.decrease(10);
  }
}

const Hisenses = new SmartTV("Hisenses");
Hisenses.increase();
Hisenses.setChannel(70);
Hisenses.info();
Hisenses.resetTV();

// 1. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 2. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 3. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 4. It's useful to create that shows the status. It should return info about the TV status like: "Panasonic at channel 8, volume 75".
