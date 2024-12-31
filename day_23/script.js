//+++++++++++++++++++++==> Jokes as question answer on website <==++++++++++++++++++++++++++++
//exercise 3

const ask = [
    "What did one snowman say to the other snowman?",
    "Why did Beethoven get rid of his chickens?",
    "What did 20 do when it was hungry?",
    "Why is grass so dangerous?",
    "Why are mountains so funny?",
    "Why wasn’t the cactus invited to hang out with the mushrooms?",
    "Why shouldn’t you fundraise for marathons?",
    "Why did the crab cross the road?",
    "Why does it take pirates a long time to learn the alphabet?",
    "Why can't a nose be 12 inches long?",
    "Why can’t you put two half-dollars in your pocket?",
    "Why does a moon rock taste better than an Earth rock?",
    "How much do rainbows weigh?",
    "What is the most popular fish in the ocean?",
    "A slice of apple pie costs $2.50 in Jamaica, $3.75 in Bermuda, and $3 in the Bahamas. What are those?",
    "Why did the football coach yell at the vending machine?",
    "I had a joke about paper today, but what happened?",
    "What kind of job can you get at a bicycle factory?",
    "What does a condiment wizard perform?",
    "What's the difference in an alligator and a crocodile?",
    "What’s the difference between the bird flu and the swine flu?",
    "What’s the difference between ducks and dine-and-dashers?",
    "What's the difference between spring rolls and summer rolls?",
    "What’s the difference between Iron Man and Aluminum Man?",
    "What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle?",
    "What’s the difference between a $20 steak and a $55 steak?",
    "What's the best thing about Switzerland?",
    "I went to the aquarium this weekend, but what happened?",
    "I found a lion in my closet the other day! What did it say?",
    "What's a cat's favorite instrument?",
    "Why did the snail paint a giant S on his car?",
    "What do you call a happy cowboy?",
    "What subject do cats like best in school?",
    "Humpty Dumpty had a great fall. What did he say about summer?",
    "My boss said 'dress for the job you want, not for the job you have.' What did I do?",
    "How do you make holy water?",
    "Justice is a dish best served cold. Otherwise, what is it?",
    "Why should you never throw grandpa's false teeth at a vehicle?",
    "Why are Christmas trees bad at knitting?",
    "What did the lunch box say to the refrigerator?"
];

const answers = [
    "It smells like carrots over here!",
    "All they ever said was, 'Bach, Bach, Bach!'",
    "Twenty-eight.",
    "Because it's full of blades!",
    "They’re hill areas.",
    "He wasn’t a fungi.",
    "They just take the money and run.",
    "It didn’t—it used the sidewalk.",
    "Because they can spend years at C!",
    "Because then it would be a foot.",
    "Because two halves make a hole, and your money will fall out!",
    "It’s a little meteor.",
    "Not much. They’re actually pretty light.",
    "The starfish.",
    "The pie-rates of the Caribbean.",
    "He wanted his quarter back!",
    "It was tearable.",
    "A spokesperson.",
    "Saucery.",
    "You’ll see one later and one in a while.",
    "One requires tweetment and the other an oinkment.",
    "Ducks take care of their bills.",
    "Their seasoning.",
    "Iron Man stops the bad guy. Aluminum Man foils their plans.",
    "Attire.",
    "February 14th.",
    "The flag is a big plus.",
    "There’s something fishy about that place.",
    "Narnia business.",
    "Purr-cussion.",
    "So when he drove by, people could say: 'Look at that S car go!'",
    "A jolly rancher.",
    "Hiss-tory.",
    "He said his summer was pretty good too.",
    "So I went in as Batman.",
    "You boil the hell out of it.",
    "It's just water.",
    "You might denture car.",
    "They always drop their needles.",
    "Don't hate me because I'm a little cooler."
];


let i = Math.floor(Math.random()*(ask.length+1))


document.getElementById("jokedis").innerHTML = ask[i]

document.getElementById("clickButton").addEventListener("click", function() {
    // String ko output div mein print karna
    document.getElementById("ans").innerHTML = answers[i];});