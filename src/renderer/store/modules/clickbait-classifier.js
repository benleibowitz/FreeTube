import Vue from 'vue'
var natural = require('natural')

const HAM = 'ham'
const SPAM = 'spam'

var classifier = new natural.BayesClassifier()
classifier.events.on('trainedWithDocument', function (obj) {
   console.log(obj);
});

train()

const clickbaitClassifier = {
  trainNotClickbait: function (title) {
    console.log('Training as not clickbait: ' + title)
    classifier.addDocument(title.toLowerCase(), HAM)
    classifier.train()
  },
  trainClickbait: function (title) {
    console.log('Training as clickbait: ' + title)
    classifier.addDocument(title.toLowerCase(), SPAM)
    classifier.train()
  },
  isClickbait: function(title) {
    return classifier.classify(title.toLowerCase())
  }
}

function train() {

}

export default clickbaitClassifier
