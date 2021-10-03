const quotes = [
    {
      quote: "You only live once, but if you do it right, once is enough",
      author: "Mae West",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall ",
      author: "Nelson Mandela",
    },
    {
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
      author: "James Cameron",
    },
    {
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier",
      author: "Mother Teresa",
    },
    {
      quote:
        "Always remember that you are absolutely unique. Just like everyone else",
      author: "Margaret Mead",
    },
    {
      quote:
        "Don't judge each day by the harvest you reap but by the seeds that you plant ",
      author: "Robert Louis Stevenson",
    },
    {
      quote:
        "Tell me and I forget. Teach me and I remember. Involve me and I learn",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched_they must be felt with the heart",
      author: "Helen Keller",
    },
    {
      quote:
        "It is during our darkest moments that we must focus to see the light",
      author: "Aristotle",
    },
  ];

const quote = document.querySelector("span.quote");
const author = document.querySelector("span.author");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author}`;
