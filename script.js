var happyQuotes = [
  "Happiness is when what you think, what you say, and what you do are in harmony.",

  "There is only one happiness in this life, to love and be loved.",

  "Be happy for this moment. This moment is your life.",

  "Cherish all your happy moments; they make a fine cushion for old age.",

  "If you want a happy ending, that depends, of course, on where you stop your story.", 

  "Smile from your heart; nothing is more beautiful than a person is happy to be themselves.", 
  
  "Being Happy Never Goes Out of Style.",
  
  "Don't let the silly little things steal your happiness.",
  
  "Be so happy that when others look at you, they become happy too.",
  
  "Spread love everywhere you go. Let no one ever come to you without leaving happier."];

var plainQuotes = [
  "Don't worry. Be happy.",
  
  "A smile is the shortest distance between two people.",
  
  "With the new day comes new strength and new thoughts",

  "You are stronger than you think.",

  "One of the greatest mentalfreedoms is truly not caring what anyone else thinks of you.",

  "Be yourself no matter what. Some will adore you and some will hate eveything about you. But who cares? It's your life. Make the most out of it",
  
  "If you change your mindset, you have the ability to change your whole word.",

  "Happiness is a journey, not a destination.",

  "Being happy is the truest form of sucess.",

  "Adopt the pace of nature: Her secret is patience."];

var sadQuotes = [
  "It will never rain roses: when we want to have more roses, we must plant more roses.", 

  "It's so hard to forget pain, but it's even harder to remember sweetness.",
  
  "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",

  "The only thing that will make you happy is being happy with yourself.",
  
  "You are somebody's reason to smile.",

  "Be true. Be Happy. Be wild.",
  
  "Don't focus on the things that steal your joy. Count all the many reasons you have to be happy.",
  
  "Focus on what makes you happy.",

  "Life is way to short to be a grump.",

  "Every day is a new day."];

var quote = $(".quote");

function pickHappyQuote() {
  var randomIndex = Math.floor(Math.random() * happyQuotes.length);
  quote.text(`${happyQuotes[randomIndex]}`);
}

function pickPlainQuote() {
  var randomIndex = Math.floor(Math.random() * plainQuotes.length);
  quote.text(`${plainQuotes[randomIndex]}`);
}

function pickSadQuote() {
  var randomIndex = Math.floor(Math.random() * sadQuotes.length);
  quote.text(`${sadQuotes[randomIndex]}`);
}