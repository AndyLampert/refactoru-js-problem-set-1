$(document).on('ready', function() {

  /**
   * [letterCapitalize description]
   * @param  {string} inputStr
   * @return {string}
   */
    var letterCapitalize = function(inputStr){
    var words = inputStr.split(' ');
    var newResult = [];
    for(var i=0; i < words.length; i++) {
      // words[i] = (words[i])[0].toUpperCase();
      newResult.push( (words[i])[0].toUpperCase() + words[i].substring(1).toLowerCase() );
      // words[i] = (words[i])[0].toUpperCase() + words[i].substring(1).toLowerCase();
    }

    // console.log(words);
    return newResult.join(' ');

  };

  var wordCount = function(inputStr) {
    var words = inputStr.split(' ');
    return words.length;    

  };
  console.log(letterCapitalize('This is a test string'));
  console.log(wordCount('This is another test string with more words'));
  console.log(wordCount('asdf asdf adsf This is another test string with even more words omggggg soo cool!'));

});


// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.

// Bonus:
// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.