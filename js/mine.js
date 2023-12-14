function qoutes()
{
    var Qoutes = ["'' Be yourself; everyone else is already taken.''",
    "''I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best''",
    "''Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.''",
    "''So many books, so little time.''",
    "''A room without books is like a body without a soul.''",
    "''You only live once, but if you do it right, once is enough.''",
    "''Be the change that you wish to see in the world.''"]
    var name = [" - Oscar Wilde","- Marilyn Monroe","- Albert Einstein","- Frank Zappa","- Marcus Tullius Cicero","- Mae West","- Mahatma Gandhi"]

    var num = Math.floor(Math.random() * Qoutes.length)
    document.getElementById("qoute").innerHTML= Qoutes[num]
    document.getElementById("author").innerHTML= name[num]
}