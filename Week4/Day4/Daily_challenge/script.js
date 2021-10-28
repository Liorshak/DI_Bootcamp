// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

let painKiller = new Video("painkiller", "Yamamoto", 120);
painKiller.watch();

let videoArr = [
  ["SG", "SqueedGames", "some Korean", 300],
  ["FG", "Family Guy", "an American", 500],
  ["UD", "Under Dark", "John Smith", 600],
  ["StinkVid", "So Stink in Here", "Tuna my Dog", 1000],
  ["NI", "No idea", "unknown", 400],
];

videoArr.forEach((el) => let el[0] = new Video(el[1], el[2], el[3]));

videoArr.forEach((el) => console.log(el[0]));
