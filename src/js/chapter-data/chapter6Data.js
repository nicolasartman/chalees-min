import demoData from './demoData'

const chapter6Data = [{
  id: '1',
  title: 'Food: Where Does It Come From?',
  description: 'Watch videos, try quizzes and view solutions to learn from Chapter 1, Food: Where Does It Come From, in the Class 6 NCERT science book.',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  items: [{
    id: 'where-does-food-come-from',
    kind: 'video',
    time: 4,
    title: 'Where does food come from?',
    instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
    videoId: 'zHeWx_AifLs',
    // @kunal: here's how to add a different start and end time
    // startTime: 10,
    // endTime: 15,
  }, {
    id: 'our-foods-journey',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Our food\'s journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![a bunch of apples](/learning-items/food-apples.jpeg)

      The food that we eat goes through all of the following places, except for one.

      Select the odd one out.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Farm'
      },
      {
        id: 'opt2',
        text: 'Bank'
      },
      {
        id: 'opt3',
        text: 'Subzi Mandi'
      },
      {
        id: 'opt4',
        text: 'Market'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'As we saw in the video, the food\'s journey begins in the farm.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Our food does not go through the bank. It would be weird if it did.'
      },
      {
        answerSet: ['opt3'],
        response: 'The Subzi Mandi or the Big Vegetable Market is where food is sold in bulk.'
      },
      {
        answerSet: ['opt4'],
        response: 'Local markets are places where we most often buy our food.'
      }
    ]
  },  {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Use a _pen and paper_ to draw a picture that shows what you have learned from the video above.

    Then take a picture of the drawing from your phone and share it here.`,
    // @NICK: This needs to be tested
    hacks: {
      afterBody: {
        //show: 'ifResponse',
        show: 'locked',
        preface: 'The picture below was made and uploaded by Krishvi, a student of Class 6 at Ahlcon International School.',
        feedbackImagePath: '/image-response-feedback/krishvi-where-food-comes-from.jpg'
      }
    }
  }, {
    id: 'herbivore-carnivore-omnivore',
    kind: 'video',
    time: 2,
    title: 'Herbivore, Carnivore, Omnivore',
    instructions: 'Really silly song that will get stuck in your head.',
    videoId: 'wjkqIt_H-ko',
  }, {
    id: 'what-does-edible-mean',
    time: 2,
    kind: 'image',
    title: 'What does edible mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Edible simply means something that is eatable.

    In Thailand, some insects are considered edible (or eatable).

    Now please do not eat some insects after reading this and get me into trouble.`,
    imagePath: '/learning-items/edible-eatable-insects.jpeg'
  }, {
    id: 'pick-a-question-to-investigate',
    kind: 'textResponse',
    time: 6,
    short: true,
    title: 'Pick a question to investigate',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      At the end of the _Where Does Food Come From_ video, we present a few questions. Here they are again:
      - Where does __water__ come from?
      - Where does __petrol__ come from?
      - Where does __snot__ come from?

      Select a question you like. You can pick from the list above or think of a new question of your own.

      Then write that question in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here are some thoughts your fellow students have shared',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'Where does TV come from?'
          },
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Where does cheese come from?'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'Where do books come from?'
          }
        ]
      }
    }
  }, {
    id: 'plan-your-own-research',
    kind: 'textResponse',
    time: 10,
    title: 'Plan your own research',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Now that you have selected a question, spend a few minutes creating a plan for the things you will do to answer that question.

    Think about who you plan to talk to, what websites you plan to visit.

    Write your plan in the box below.`,
    hacks: {
      afterBody: {
        preface: 'The image below contains the common words other students used to describe their plans.',
        show: 'locked',
        feedbackImagePath: '/prefab-word-clouds/research-wordcloud5.png',
      }
    }
  }, {
    id: 'nectar-flowers',
    time: 1,
    kind: 'image',
    title: 'What does nectar look like?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Nectar is the sweet juice of flowers. Bees love it and make honey from it.

    Here is a honeysuckle flower and a drop of nectar falling from it.`,
    imagePath: '/learning-items/nectar-flower.jpeg'
  }, {
    id: 'grade6-chapter1-song',
    kind: 'video',
    time: 3,
    title: 'Chapter Revision',
    instructions: 'This song will help you revise the entire chapter.',
    videoId: 'geHAaWbqz_Q',
    locked: true
  }]
}, {
  id: '2',
  thumbnailImagePath: '/chapter-thumbnails/chapter-2.jpg',
  title: 'Components Of Food',
  description: 'Watch videos to learn Chapter 2, Components Of Food, from the NCERT science book in Class 6. Try questions and answers on topics like Carbohydrates, Fats and more.',
  items: [{
    id: 'carbohydrates',
    kind: 'video',
    time: 4,
    title: 'Carbohydrates',
    instructions: 'Watch this video to learn more about carbohydrates, sugars and roughage.',
    videoId: '8-A37Y4KuN0'
  }, {
    id: 'the-purpose-of-carbohydrates',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'The purpose of carbohydrates',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![pizza carbohydrates energy](/learning-items/pizza-carbohydrates-energy.jpeg)

    Why do we need carbohydrates? `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'To lose weight'
      },
      {
        id: 'opt2',
        text: 'For Energy'
      },
      {
        id: 'opt3',
        text: 'To make friends'
      },
      {
        id: 'opt4',
        text: 'To get good marks'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Ummm. Nowhere in this video or chapter have we spoken about losing weight.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ Carbohydrates are one of the most important sources of energy in our food.'
      },
      {
        answerSet: ['opt3'],
        response: 'You need kindness (and not carbohydrates) to make new friends.'
      },
      {
        answerSet: ['opt4'],
        response: 'Even though you need to study Carbohydrates to score well in your exams, this is not the correct reason for needing carbohydrates.'
      }
    ]
  }, {
    id: 'tweet-what-youve-learned',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tweet what you\'ve learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Summarize what you have learned in the video above in 140 characters; then tweet it with #chapter2',
    hacks: {
      afterBody: {
        preface: 'Here are some tweets from your fellow learners!',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Carbs give energy. they are in bread, beans, fruits and veggies. can of soda has 39g; love nimbu pani; dietary fibre eases poop #chapter2'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'Ceres is goddess of grain. Grains have carbohydrates. Carbohydrates provide energy. Energy is good. Love the dance at the end #chapter2'
          }
        ]
      }
    }
  }, {
    id: 'balanced-diet',
    kind: 'video',
    time: 10,
    title: 'Balanced Diet',
    instructions: 'Which foods should we eat more of, and which should we eat less?',
    videoId: 'n-q8-f2unHY'
  }, , {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    From your textbook, read the section 2.2, _What Do Various Nutrients Do For Our Body?_

    Then use a pencil and paper to draw a cartoons of what you have learned from that section. Take a picture of that cartoon and upload it here.`,
    // @NICK: This needs to be tested
    hacks: {
      afterBody: {
        preface: 'The image below was made and uploaded by Prabsimar, a student of class 6 at Ahlcon International School.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-components-of-food.jpeg',
      }
    }
  }, {
    id: 'and-finally',
    kind: 'video',
    time: 1,
    title: 'A Song on Chapter 2',
    instructions: 'Here is a song about Chapter 2, that you can sing on your way to school',
    videoId: '4hHYX2qUJ9U',
    locked: true
  }]
}, {
  id: '3',
  thumbnailImagePath: '/chapter-thumbnails/chapter-3.jpg',
  title: 'Fibre To Fabric',
  description: 'Watch videos to learn Chapter 3, Fibre To Fabric, from the NCERT science book in Class 6. Try questions and answers on knitting, spinning and weaving.',
  items: [{
    id: 'how-i-learned-to-knit',
    kind: 'video',
    time: 4,
    title: 'How I Learned To Knit',
    instructions: dedent`
    The video below tells a story of how I learned to knit a scarf.

    And while doing so, I learned something about life itself.`,
    videoId: '0EL7M44_Ey0',
  }, {
    id: 'tell-us-your-learning-story',
    kind: 'textResponse',
    time: 10,
    short: true,
    title: 'Tell Us Your Learning Story',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Have you ever gone from knowing nothing about a subject to knowing a lot.

      Tell us about that time. What were you learning? What was difficult about that time? Who helped you?`,
    hacks: {
      afterBody: {
        preface: 'Here is a story one of your fellow learners shared:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Dance was really difficult for me at first. I knew I liked it, but I was concerned about how people would judge me. But after a few times of dancing on stage, I realized that I really loved it. I am glad I am still dancing today. It is so much fun.'
          }
        ],
      }
    }
  }, {
    id: 'cottons-journey',
    time: 2,
    kind: 'image',
    title: 'Cotton\'s Journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Cotton is a plant that grows in the farm. Cotton fibres from the plant are collected and seeds are removed from it.

    These cotton fibres are then twisted or spun, and are turned into yarn or thread.

    The thread is then weaved into cotton fabric which can be used to make things like shirts.
    `,
    imagePath: '/learning-items/cotton-journey-field-fibre-yarn-fabric.jpeg'
  }, {
    id: 'yarn-made-from-fibre',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'True or False',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Yarn is made from fibres.

      True or False?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'True'
      },
      {
        id: 'opt2',
        text: 'False'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. Fibre is twisted or spun together to create yarn or thread. In the next part of this chapter we will see how cotton fibres are converted to yarn.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, this is not correct. Yarn is actually made from fibres. In the next part of this chapter we will see how cotton fibres are converted to yarn.'
      }
    ]
  }, {
    id: 'cotton-from-farm',
    kind: 'video',
    time: 1,
    title: 'Getting Cotton Fibres From Plants',
    instructions: dedent`
    India is one of the largest producers of cotton in the world.

    Cotton is a plant that grows in farms. In the video below, you can see farmers picking cotton fibres from plants. In many farms this work is also done by machines.

    _Note:_ If you are curious about how a cotton T-shirt is made from cotton fibres, you can check out [this video](https://youtu.be/FIA3wWj35Yw?t=5s) also.
      `,
    videoId: '_4ku4blO8eQ',
  },  {
    id: 'spinning-cotton-fibre-to-yarn',
    kind: 'video',
    time: 3,
    title: 'Spinning Cotton Fibres To Make Yarn',
    instructions: dedent`
      Once cotton fibres have been picked from plants they are converted to yarn (or thread).

      Watch this video to see how cotton fibres are spun (or twisted) to create yarn.
      `,
    videoId: 'uslx0Mxn-E8',
    endTime: 175,
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw What You Have Learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Use a _pencil and paper_ to draw a picture that shows what you have learned about how cotton fabric is made from cotton fibres.

    Then take a photo of that drawing and upload it here.`,
    hacks: {
      afterBody: {
        preface: 'Here is a comic that another student submitted.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-fibre-to-fabric.png'
      }
    }
  }, {
    id: 'getting-jute-from-plants',
    kind: 'video',
    time: 2,
    title: 'Getting Jute From Plants',
    instructions: dedent`
      Jute is used to make ropes and bags like the one shown in this image.
      ![jute rope](/learning-items/jute-rope.jpeg)

      Jute fibres come from the Jute plant which is grown in farms in India. Here is a picture of a Jute farm in India.
      ![jute rope](/learning-items/jute-plant-farm.jpeg)

      The video below shows how Jute fibres are removed from Jute plants. The plant is immersed in water for a few days. The stem rots and the Jute fibres are separated by hand.
      `,
    videoId: 'sNlILhEjbNw',
  }, {
    id: 'jute-from-coconut',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'True or False',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Jute is obtained from the outer covering of coconuts.

      True or False?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'True'
      },
      {
        id: 'opt2',
        text: 'False'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. We get Jute fibres from the Jute plant and __not__ from coconut.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Jute is __not__ obtained from the outer covering of coconuts. We get Jute fibres from the Jute plant.'
      }
    ]
  }, {
    id: 'natural-synthetic-fibres',
    time: 2,
    kind: 'image',
    title: 'Natural And Synthetic Fibres',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Fibres that are obtained from plants and animals are called __natural fibres__.

    For example cotton and jute fibres are obtained from plants, and wool is obtained from sheep. Thus, cotton, jute and wool are natural fibres.
    ![cotton wool natural fibres](/learning-items/natural-fibres-cotton-wool.jpeg)

    Fibres that are obtained from chemicals are called __synthetic fibres__.

    Examples include fibres like Nylon and Polyester. Let us learn about them next.
    `,
  imagePath: '/learning-items/white-space-2.jpeg',
  },  {
    id: 'how-is-nylon-made',
    kind: 'video',
    time: 4,
    title: 'How Is Nylon Made?',
    instructions: dedent`
    Nylon is a synthetic fibre. Two different chemicals are mixed to make Nylon.

    These chemicals have confusing names. If you are curious, their names are 1,6-diaminohexane and sebacoyl chloride.

    This video shows how mixing these two chemicals makes Nylon in the lab.
      `,
    videoId: 'c7ihpZhCj6k',
    endTime: 193,
  }, {
    id: 'cotton-natural-or-synthetic',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Natural Or Synthetic Fibre',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
     ![cotton natural fibres](/learning-items/cotton-fibre.jpeg)

      Is cotton a natural fibre or synthetic fibre?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Natural Fibre'
      },
      {
        id: 'opt2',
        text: 'Synthetic Fibre'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. Cotton is grown in a farm and comes from a plant. Thus it is a natural fibre.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, this is not correct. Cotton is a natural fibre as it grows on a plant.'
      }
    ]
  },  {
    id: 'polyester-natural-or-synthetic',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Natural Or Synthetic Fibre',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
     ![polyester natural fibres](/learning-items/polyester-fabric.jpeg)

      Is polyester a natural fibre or synthetic fibre?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Natural Fibre'
      },
      {
        id: 'opt2',
        text: 'Synthetic Fibre'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. Polyester is a synthetic fibre made using plastic bottles. [Here is a video](https://www.youtube.com/watch?v=zyF9MxlcItw) that shows the process of making polyester from plastic bottles.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Polyester is made from plastics, and thus it is a synthetic fibre.'
      }
    ]
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing The Chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: '1u2uRhDeQOI',
    locked: true
  }]
}, {
  id: '4',
  thumbnailImagePath: '/chapter-thumbnails/chapter-4.png',
  title: 'Sorting Materials Into Groups',
  description: 'Learn Chapter 4, Sorting Materials Into Groups, in the Class 6 NCERT science book by answering questions, viewing solutions and watching videos.',
    items: [{
    id: 'sorting-materials-into-groups',
    kind: 'video',
    time: 2,
    title: 'Sorting Materials Into Groups',
    instructions: 'We found this chapter to be incredibly boring. Watch to see if you agree.',
    videoId: 'irfJePkITGM',
  }, {
    id: 'suggest-an-idea-for-a-video',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Suggest an idea for a video',
    presenterImagePath: '/instructors/kunal2.jpg',
    maxSelected: 1,
    instructions: dedent`
    Tell us a topic from this chapter that is interesting to you.

    We will collect responses from all students taking this quiz, and then make a video on one of those topics.`,
    choices: [
      {
        id: 'opt1',
        text: 'Appearance'
      },
      {
        id: 'opt2',
        text: 'Hardness'
      },
      {
        id: 'opt3',
        text: 'Solubility'
      },
      {
        id: 'opt4',
        text: 'Transparency'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Thank you. We will collect all student responses and make a video on the most popular choice.'
      },
      {
        answerSet: ['opt2'],
        response: 'Thank you. We will collect all student responses and make a video on the most popular choice.'
      },
      {
        answerSet: ['opt3'],
        response: 'Thank you. We will collect all student responses and make a video on the most popular choice.'
      },
      {
        answerSet: ['opt4'],
        response: 'Thank you. We will collect all student responses and make a video on the most popular choice.'
      }
    ]
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    From your textbook, read the section on _Transparency._

    Then use a pen and paper to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.`,
    // @NICK: This needs to be tested
    hacks: {
      afterBody: {
        preface: 'Here is a cartoon that shows transparency in a funny way.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-sorting-materials.jpg'        ,
      }
    }
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 2,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rgNpbH_4en4',
  }]
}, {
  id: '5',
  thumbnailImagePath: '/chapter-thumbnails/chapter-5.jpg',
  title: 'Separation of Substances',
  description: 'Watch videos, answer questions and view solutions from Chapter 5, Separation Of Substances, in the Class 6 NCERT science book.',
  items: [{
    id: 'how-does-salt-dissolve-in-water',
    kind: 'video',
    time: 6,
    title: 'How does salt dissolve in water',
    instructions: 'This video highlights how salt is made and how it dissolves in water',
    videoId: 'mBoJ3Y3S4VE',
  }, {
    id: 'process-to-separate-salt-water',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Separating Salt and Water',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which of the following processes is used to separate salt that is dissolved in water?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Threshing'
      },
      {
        id: 'opt2',
        text: 'Winnowing'
      },
      {
        id: 'opt3',
        text: 'Evaporation'
      },
      {
        id: 'opt4',
        text: 'Filtration'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Are you thinking of separating grains of wheat from its stalk (or stem)? That is Threshing.'
      },
      {
        answerSet: ['opt2'],
        response: 'Think of the phrase Winnowing in the Wind. While that process will separate two mixtures of different weights, it won\'t separate salt that is dissolved in water.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. When water evaporates, it leaves the dissolved salt behind.'
      },
      {
        answerSet: ['opt4'],
        response: 'So this option can be confusing. Think about it — salt that is dissolved in water will go right through a sieve or a filter. Thus this option will not work.'
      }
    ]
  }, {
    id: 'summarize-what-you-have-learned',
    kind: 'textResponse',
    time: 10,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Summarize the Video',
    instructions: dedent`
    You have watched the _How Does Salt Dissolve in Water_ video above.

    Now, summarize what you have learned by watching that video in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is what Koushiki, one of your fellow students, shared:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: dedent`
            Oh there were so many things to think about here. The first thing I saw was a salt farm. It looks really pretty, and I want to visit it some day. The salt looks like snow from a distance. I also learned that salt is left behind when seawater evaporates.

            We zoomed into water, which is H2O. We also looked at salt which is NaCl. I think when we mix salt and water, we Na and Cl are separated by H and O and that causes salt to dissolve.

            I want to Google to see what happens when we heat up salt and water.

            Also, sardar maine apka namak khaya hai - totally funny.`
          }
        ],
      }
    }
  }, {
    id: 'sedimentation',
    time: 2,
    kind: 'image',
    title: 'Sedimentation',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Our science book defines sedimentation as the following: _When the heavier component in a mixture settles after water is added to it._

    To me, that sounds a lot like Marriage. See the comparison below.`,
    imagePath: '/learning-items/sedimentation-marriage.jpeg'
  }, {
    id: 'decantation-movie',
    time: 2,
    kind: 'image',
    title: 'Decantation (through Jab We Met)',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    If you saw the movie _Jab We Met_, you probably remember __Hotel Decent__.

    Change one letter in that hotel name, and you get __Decant__.

    Decant (or its noun Decantation), means to remove water or liquid without disturbing the sediment.

    Hopefully this image below will help you remember the definition of Decantation.`,
    imagePath: '/learning-items/decantation-jabwemet2.jpeg'
  }, {
    id: 'Sieving',
    time: 2,
    kind: 'image',
    title: 'Sieving',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Sieving is the process of separating mixtures of different sizes. For instance, sand and stones.

    I made the image below, as a joke, but I think it can help you remember the definition of Sieving. At the risk of making the joke unfunny, here is the meaning of the image below: 

    _When a goalkeeper prevents a goal, we call it a good Save. That sounds a lot like the word Sieve. So this goalkeeper below, uses Sieves to separate footballs from nets._`,
    imagePath: '/learning-items/sieving1.jpeg'
  },{
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 10,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Read and Draw',
    instructions: dedent`
    From your science book, read the following sections
    - Threshing
    - Winnowing
    - Filteration

    Then use a pen and paper to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it below.`,
    hacks: {
      afterBody: {
        show: 'locked',
        preface: 'Here is how Koushiki, another student, answered this quiz.',
        feedbackImagePath: '/image-response-feedback/threshing-winnowing-filtration.jpeg'
      }
    }
  }, {
    id: 'singing-chapter-5-class6',
    kind: 'video',
    time: 3,
    title: 'Revising the chapter',
    instructions: 'Here is a song that will help you revise the chapter.',
    videoId: 'mXs7LJga60c',
    locked: true
  }]
}, {
  id: '6',
  thumbnailImagePath: '/chapter-thumbnails/chapter-6.jpg',
  title: 'Changes Around Us',
  description: 'Learn Chapter 6, Changes Around Us, in the Class 6 NCERT science book by answering questions, viewing solutions and watching videos.',
  items: [{
    id: 'the-train-track-behind-facebooks-office',
    kind: 'video',
    time: 3,
    title: 'The train track behind facebook\'s office',
    instructions: 'This video highlights how _expansion_ causes train tracks to bend.',
    videoId: 'ceJivu4wlM0',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    short: true,
    time: 5,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
    hacks: {
      afterBody: {
        preface: 'Here are some thoughts your fellow learners shared',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'Metals expand on heating. Not just in the lab but also in our world. #chapter6'
          },
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Bridges and train tracks are made of metals which expand on heating. That is reversible. #chapter 6'
          }
        ]
      }
    }
  }, {
    id: 'reversible-or-not-1',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Reversible or Irreversible',
    instructions: dedent`
    Burning a Page. Is it reversible or irreversible?

    ![burning page](/learning-items/page-burning.jpg)
    `,
    presenterImagePath: '/instructors/kunal2.jpg',
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Reversible'
      },
      {
        id: 'opt2',
        text: 'Irreversible'
      }
    ],
        automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'I am not sure how you would reverse this. Once a page is burnt, it is burnt.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. This is an irreversible reaction.'
      }
    ]
  }, {
    id: 'reversible-or-not-2',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Reversible or Irreversible',
    instructions: dedent`
    Mixing salt in water. Is it reversible or irreversible?

    ![salt and water](/learning-items/salt-and-water.png)
    `,
    presenterImagePath: '/instructors/kunal2.jpg',
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Reversible'
      },
      {
        id: 'opt2',
        text: 'Irreversible'
      }
    ],
        automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. You can heat the mixture of salt and water. The water will evaporate leaving the salt behind.'
      },
      {
        answerSet: ['opt2'],
        response: 'I think you can reverse this reaction by heating the mixture and evaporating the water.'
      }
    ]
  }, {
    id: 'reversible-or-not-3',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Reversible or Irreversible',
    instructions: dedent`
    Salman making a commitment. Is it reversible or irreversible?

    ![salman khan commitment](/learning-items/salman-khan.jpeg)
    `,
    presenterImagePath: '/instructors/kunal2.jpg',
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Reversible'
      },
      {
        id: 'opt2',
        text: 'Irreversible'
      }
    ],
        automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Clearly this question is a joke. But then again, once Salman makes a commitment, then that is irreversible.'
      },
      {
        answerSet: ['opt2'],
        response: 'This question is still a joke. But then again, once Salman makes a commitment, then that is irreversible.'
      }
    ],
  }, {
    id: 'metals-expand',
    kind: 'video',
    time: 3,
    title: 'Expansion and Contraction',
    instructions: 'Watch how a metal expands on heating and contracts on cooling.',
    videoId: 'tPJLFDekxZA',
    startTime: 7,
    endTime: 40,
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
    locked: true
  }]
}, {
  id: '7',
  thumbnailImagePath: '/chapter-thumbnails/chapter-7-flower.jpg',
  title: 'Getting To Know Plants',
  description: 'Watch videos to learn about Chapter 7, Getting To Know Plants, from the NCERT science book in Class 6. Answer quiz questions while learning about plants.',
  items: [{
    id: 'why-do-plants-produce-flowers',
    time: 6,
    kind: 'video',
    title: 'Why do plants produce flowers?',
    instructions: 'Why do plants produce flowers? Watch this video to find out.',
    videoId: 'EArZXsRXsj4'
  }, {
    id: 'parts-of-flower',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Parts of a flower',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Select the option that is __not__ a part of Stamen in a flower`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Anther'
      },
      {
        id: 'opt2',
        text: 'Pollen'
      },
      {
        id: 'opt3',
        text: 'Filament'
      },
      {
        id: 'opt4',
        text: 'Ovary'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Anther is a part of Stamen. Watch the video above at 2 minute 30 seconds to review.'
      },
      {
        answerSet: ['opt2'],
        response: 'Pollen is also a part of Stamen. Pollination occurs when pollen from male part of one flower travels to the female part of another flower.'
      },
      {
        answerSet: ['opt3'],
        response: 'Ahh... Filament is a part of Stamen. I know it can be annoying for me to say in the video that, _"the names of parts of flower do not matter,"_ and for me to quiz you on those names now. Sorry.'
      },
      {
        answerSet: ['opt4'],
        response: '__Correct__. Ovary is a part of Pistil, which is the female part of the flower.'
      }
    ]
  }, {
    id: 'herbs',
    time: 1,
    kind: 'image',
    title: 'What are Herbs?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The poster below is from a movie made in 1978. While the movie is older than both you and me, it still can teach us something about Herbs.

    Herbs are usually short plants with green and tender stems.`,
    imagePath: '/learning-items/what-are-herbs.jpeg'
  }, {
    id: 'shrubs-and-trees',
    time: 1,
    kind: 'image',
    title: 'The difference between Shrubs and Trees',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Lemons grow on a Shrub. __Shrubs__ generally have branches near the base of the stem

    ![shrubs are trees with low branches](/learning-items/shrubs-low-branches.jpeg)

    __Trees__, however, have branches in the upper part of the stem. They are also taller than Shrubs.
    `,
    imagePath: '/learning-items/trees-high-branches.jpeg'
  }, {
    id: 'creepers',
    time: 2,
    kind: 'image',
    title: 'What are Climbers?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Plants that take support on neighbouring structures and climb up are called Climbers.

    [Click here](http://www.pbslearningmedia.org/asset/lsps07_int_plantmovies/) and then on Video 3 to see them in action.`,
    imagePath: '/learning-items/climber2.png'
  }, {
    id: 'reflect-herbs-shrubs-trees-creepers',
    time: 4,
    kind: 'textResponse',
    title: 'Teaching what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine you had to teach everything you have learned thus far in this chapter to a friend. That includes everything you have learned about _flowers, herbs, shrubs, trees, and climbers._

    What would you say to your friend while teaching them? Write your response in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is what Sid had to say about this quiz.',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`Herbs are small and tender. Now I am singing the song, main tulsi tere aangan ki.

            Shrubs have low branches. Trees are tall with high branches. Those were nice pictures.

            Flowers are amazing. Plants make flowers to make more of themselves. Pollen is necessary to turn flowers into fruits. I loved the video of the flower turning to pear.`
          }
        ]
      }
    }
  }, {
    id: 'function-of-stem',
    time: 1,
    kind: 'video',
    title: 'Stems: What do they do?',
    instructions: dedent`
    One of the major functions of the stem is to carry water from the roots to the leaves. The leaves need water to make food for the plant.

    Here is a video that proves that the stem carries water.`,
    videoId: 'AMvEVnAFCNA'
  }, {
    id: 'path-of-water-in-stem',
    time: 2,
    kind: 'video',
    title: 'How does water get up the stem',
    instructions: dedent`
    This video offers a great view of how the water moves up the stem of a plant.`,
    videoId: '9-dicqNoODg'
  }, {
    id: 'tweet-function-of-stem',
    time: 2,
    kind: 'textResponse',
    short: true,
    title: 'Tweeting about stem',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    What is the function of stem? Write it in the box below and then tweet it with #stemtastic `,
    hacks: {
      afterBody: {
        preface: 'Here is what Prabsimar tweeted.',
        //show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`Like a truck, stem transports water. Horn Ok Please. Use dipper at night. #stemtastic`
          }
        ]
      }
    }
  }, {
    id: 'leaf-petiole',
    time: 1,
    kind: 'image',
    title: 'What is Petiole?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Petiole is a part of the leaf that is attached to the stem.

    Here is a great way to remember that: Petiole comes from the prefix _Ped_. _Ped_ is used in words like Pedestrian or Pedicure. It has to do with the feet.

    You can think of the Petiole as the foot or the base of the leaf that connects to the stem.`,
    imagePath: '/learning-items/petiole-pedestrian.jpeg'
  }, {
    id: 'leaf-veins',
    time: 1,
    kind: 'image',
    title: 'What are Veins?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Veins help carry water and nutrients in a leaf.

    This is similar to veins in the human body, which help carry blood throughout the body.`,
    imagePath: '/learning-items/veins-leaf.jpeg'
  }, {
    id: 'venation-reticulate-and-parallel',
    time: 2,
    kind: 'image',
    title: 'What does Venation mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The word _Venation_ comes from the word _Veins_. You can think of Venation as the design or pattern created by veins in a leaf.

    In the image below, you will see examples of both Reticulate Venation (on the left of image) and Parallel Venation (on the right of image).

    ![leaf venation](/learning-items/venation2.jpeg)

    Now __Parallel Venation__ is easy to understand. It happens when the pattern created by the veins is parallel to each other. This happens in coconut and banana leaves.

    Let us think about __Reticulate Venation__.

    Reticulate just means a pattern or design that looks like a network or net. We can find these patterns in Giraffes, Leaves and Pythons.
    `,
    imagePath: '/learning-items/reticulate-venation.jpeg'
  }, {
    id: 'transpiration',
    time: 1,
    kind: 'image',
    title: 'What is Transpiration?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Now you probably know that Transpiration is the process by which plants lose water from their leaves. This water is lost in the form of vapour.

    The amazing thing about this is that plants like the Corn Plant, lose about 2 litres of water every day.
    `,
    imagePath: '/learning-items/transpiration-water-loss.jpeg'
  }, {
    id: 'photosynthesis-picture',
    time: 7,
    kind: 'imageResponse',
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Photosynthesis ',
    instructions: dedent`
    We know that you have been taught the concept of photosynthesis several times. So we will not bore you with another lecture on it. Here is a chance to be creative, however.

    Draw a picture, using a _pen and paper_, that you think describes the process of photosynthesis.

    Then take a photo of that drawing with your phone and upload it here. `,
    hacks: {
      afterBody: {
        preface: 'This image was made by a student of Class 6 at Ahlcon International School. It shows that plants use sunlight and carbon dioxide (and water), to make food and release oxygen.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/photosynthesis.jpg',
      }
    }
  }, {
    id: 'how-much-sugar',
    time: 2,
    kind: 'video',
    title: 'How much sugar do plants make?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Plants make food through the process of Photosynthesis. We know that.

    But how much food (or sugar/carbohydrates) do they make in a day? Let us find out.
    `,
    videoId: '2PL-T9Cuj84',
    startTime: 19,
  }, {
    id: 'roots-function',
    time: 1,
    kind: 'image',
    title: 'Roots: What is their function?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Roots anchor a plant. That means they keep the plant steady in one place.

    They also absorb water and nutrients from the soil. Plants needs both water and nutrients to make food.

    There are two main types of roots: Fibrous and Tap roots. The image below features Fibrous Roots, where all roots seem similar to each other.
    `,
    imagePath: '/learning-items/roots-anchor.jpeg'
  }, {
    id: 'parallel-venation-fibrous-roots',
    time: 1,
    kind: 'image',
    title: 'Parallel Venation and Fibrous Roots',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The science book says the following on page-64.

    _"plants having leaves with parallel venation have fibrous roots."_

    We can understand this with the help of coconut trees. The leaves of coconut trees have parallel venation. That means that if you look at them really closely, you will see that the veins are mostly parallel to each other.

    The coconut trees also have fibrous roots.
    `,
    imagePath: '/learning-items/parallel-venation-fibrous-roots2.jpeg'
  }, {
    id: 'parallel-venation-fibrous-roots-rememeber',
    time: 1,
    kind: 'image',
    title: 'An easy way to remember',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    I find the following sentence really hard to remember.

    _"plants having leaves with parallel venation have fibrous roots."_

    To remember this sentence, I think of the movie Barfi.
    `,
    imagePath: '/learning-items/reticulate-venation-tap-roots-barfi2.jpeg'
  }, {
    id: 'reticulate-venation-tap-roots',
    time: 1,
    kind: 'image',
    title: 'Reticulate Venation and Tap Roots',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Carrots have tap roots. That means they have only one primary root.

    The leaves of a Carrot Plants have reticulate venation. That means that if we look at them really closely, we will see that their veins make a net-like pattern.
    `,
    imagePath: '/learning-items/reticulate-venation-tap-roots.jpeg'
  }, {
    id: 'revising-the-chapter',
    time: 2,
    kind: 'video',
    title: 'Revising the chapter',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is a song that will help you revise this chapter.
    `,
    videoId: 'EqOAK8Y7RoE',
    locked: true,
  },
  ]
}, {
  id: '8',
  thumbnailImagePath: '/chapter-thumbnails/chapter-8.png',
  title: 'Body Movements',
  description: 'Watch videos to learn about Chapter 8, Body Movement, in the Class 6 NCERT science book. Answer questions and view solutions on topics like Joints and Muscles.',
  items: [{
    id: 'what-keeps-our-bones-together',
    kind: 'video',
    time: 7,
    title: 'What keeps our bones together',
    instructions: 'Watch to learn more about the hinge joint, the ball and socket joint, ligaments and humility.',
    videoId: 'x4k1JP8LsNY',
  }, {
    id: 'which-joint-is-it-one',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Identify the joint',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Read the following description:

      _360 degree movement; found in shoulders and hips; similar to shower heads_

      This description is talking about which joint?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Hinge Joint'
      },
      {
        id: 'opt2',
        text: 'Fevicol Joint'
      },
      {
        id: 'opt3',
        text: 'Ball and Socket Joint'
      },
      {
        id: 'opt4',
        text: 'Immovable Joint'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Hinge joint only has 180 degree movement. This response is incorrect.'
      },
      {
        answerSet: ['opt2'],
        response: 'Clearly this option was an attempt at a joke. Keep thinking.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. A Ball and Socket Joint has 360 degree movement. Both shoulder and hip are examples of this joint.'
      },
      {
        answerSet: ['opt4'],
        response: 'If a joint is immovable, how can it have 360 degree movement. Keep thinking.'
      }
    ]
  }, {
    id: 'which-joint-is-it-two',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Identify the joint (again)',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which joint is in motion in the image below?

      ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/bicep-curl-2.gif)`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Hinge Joint'
      },
      {
        id: 'opt2',
        text: 'Immovable Joint'
      },
      {
        id: 'opt3',
        text: 'Ball and Socket Joint'
      },
      {
        id: 'opt4',
        text: 'Fevicol Joint'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. The body builder is moving his right elbow. Elbows are classified as Hinge joints.'
      },
      {
        answerSet: ['opt2'],
        response: 'The body builder is moving his right elbow. It is not immovable. Keep thinking '
      },
      {
        answerSet: ['opt3'],
        response: 'Examples of Ball and Socket Joint include hips and shoulders. It seems to me that the body builder is moving his right elbow. '
      },
      {
        answerSet: ['opt4'],
        response: 'Clearly this answer was an attempt at a joke. I wonder if you thought it was correct or if you just wanted to see the feedback.'
      }
    ]
  }, {
    id: 'no-bones',
    time: 1,
    kind: 'image',
    title: 'What would happen if we had no bones?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is an attempt at the question: _What would happen if we had no bones?_

    Bones give framework and shape to our body.
    `,
    imagePath: '/learning-items/no-skeleton-5.jpeg'
  }, {
    id: 'broken-bone',
    kind: 'textResponse',
    time: 3,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Have you ever broken a bone?',
    instructions: dedent`
    ![broken bone](/learning-items/have-you-broken-bone-2.jpeg)

    Have you ever suffered a broken bone? What was that like? Did it hurt? Tell us in the box below.
    `,
  }, {
    id: 'making-ball-and-socket-joint',
    kind: 'video',
    time: 5,
    title: 'Making a model of Ball and Socket Joint',
    instructions: 'Here are step by step instructions on how to construct a model of ball and socket joint. (There is no sound in this video.)',
    videoId: 'myJh2Zc9tnk',
    startTime: 20,
  }, {
    id: 'pivot-meaning',
    kind: 'video',
    time: 3,
    title: 'What does the word Pivot mean?',
    instructions: dedent`
    Before we learn about Pivotal Joints. Let us think about the word Pivot.

    The word _Pivot_ means to turn around a central point.

    Many basketball players master a move called the Pivot. Watch this video to find out more.`,
    videoId: 'erx6kfO6tfw',
    startTime: 35,
    endTime: 53,
  }, {
    id: 'pivotal-joints',
    time: 1,
    kind: 'image',
    title: 'Pivotal Joints',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The place where our neck joins our head is a _Pivotal Joint_.

    You and President Obama are able to say no because of that Pivotal Joint.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/obama-pivot.gif)
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'fixed-joints',
    time: 1,
    kind: 'image',
    title: 'Fixed or Immovable Joints',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Immovable joints, as the name suggests, do not move. We can find them in the skull.
    `,
    imagePath: '/learning-items/immovable-joints-skull-2.jpeg'
  }, {
    id: 'pelvic-bones',
    time: 1,
    kind: 'image',
    title: 'Pelvic Bones',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Pelvic bones are the bones we sit on. These bones are also connected to the thigh bones
    `,
    imagePath: '/learning-items/pelvic-bones.jpeg'
  }, {
    id: 'friction',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Friction',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Do you think we experience friction in our joints when our bones rub against each other?

      ![rubbing hands friction](/learning-items/rubbing-our-hands-2.jpeg)`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yes'
      },
      {
        id: 'opt2',
        text: 'No'
      },
      {
        id: 'opt3',
        text: 'I do not know'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. We experience friction when we rub our hands together; we also experience friction when our bones rub against each other.'
      },
      {
        answerSet: ['opt2'],
        response: 'We experience friction when our bones rub against each other. That can cause wear and tear. In the next section, we will see how our body prevents that from happening.'
      },
      {
        answerSet: ['opt3'],
        response: 'It is ok to not know things. We experience friction when our bones rub against each other. In the next section, we will see how our body prevents that from happening. '
      }
    ]
  }, {
    id: 'cartilage',
    time: 2,
    kind: 'image',
    title: 'Cartilage',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Cartilage covers the ends of our bones and reduces friction in our joints.

    It is a little bit like the lubricant that is added in cars to prevent friction between moving parts of an engine.
    `,
    imagePath: '/learning-items/cartilage-lubricant.jpeg'
  }, {
    id: 'muscles',
    time: 2,
    kind: 'image',
    title: 'Muscles — They work in pairs',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When you lift your forearm, the bicep and the tricep work together to make that happen.

    Study the image below to see how that works.
    `,
    imagePath: '/learning-items/muscles.jpeg'
  }, {
    id: 'muscles-animation',
    time: 1,
    kind: 'image',
    title: 'Muscles — An Animation',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    See the bicep and tricep in action when you move your elbow.

    Notice how the _bicep_ contracts (becomes shorter and bigger) when we raise are forearm. And the _tricep_ relaxes.

    Also notice how the _tricep_ contracts when we extend our forearm. And the _bicep_ relaxes.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/muscles-bicep-tricep-animation.gif)

    _Source: Niwadare - Own work, CC BY-SA 4.0_`,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 8,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Read and Draw',
    instructions: dedent`
    From your textbook, read the section 8.2, _“Gait of Animals”_.

    Then use a pen and pencil to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.`,
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 2,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'jkHI2_RN_eY',
    locked: true
  }]
}, {
  id: '9',
  title: 'Living Organisms and Their Surroundings',
  description: 'Learn Chapter 9, Living Organisms And Their Surroundings, in the Class 6 NCERT science book by answering questions, viewing solutions and watching videos.',
  thumbnailImagePath: '/chapter-thumbnails/thumbnail-living-organisms.png',
  items: [{
    id: '5-animals-5-interesting-facts',
    kind: 'video',
    time: 2,
    title: '5 animals, 5 interesting facts, in under 2 minutes',
    instructions: 'This video introduces you to interesting things about animals like a sea horse, turtles and jellyfish.',
    videoId: 'Dl3vQtPry4s',
  }, {
    id: 'tweet-what-youve-learned',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tweet what you\'ve learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Summarize what you have learned in the video above in 140 characters; then tweet it with #chapter9',
    hacks: {
      afterBody: {
        preface: 'Here are some tweets from other students:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Sea horses are amazing. They carry their young and eat all the time. #chapter9'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'Wow I did not think Giant Grouper was that big. 7 1/2 Just Biebers. hehe #chapter9'
          },
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'Turtles cannot breathe under water. They hold their breath for 40 minutes. Amazing! #chapter9'
          }
        ]
      }
    }
  }, {
    id: 'habitat-sweet-habitat',
    time: 1,
    kind: 'image',
    title: 'What does habitat mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Habitat simply means Home.

    Have you ever seen a _Home Sweet Home_ sign on a door before. From now on, when you see that sign, I want you think of _Habitat Sweet Habitat._
    `,
    imagePath: '/learning-items/home-sweet-home-habitat.jpeg'
  }, {
    id: 'adaptation-fish-hyena',
    time: 2,
    kind: 'image',
    title: 'What is Adaptation?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Notice the fish in the image below. It has an eyespot towards its back. This fish is trying to adapt in water by fooling its predator. If a predator comes to attack this fish, they are likely to cause damage to the tail and not the head.

    Notice the Hyena with its cubs in a burrow. A Hyena adapts to the hot environment by living in a burrow during the day; it comes out at night when it is cooler.

    These are both examples of adaptation. Adaptation is the presence of features or habits that enable a plant or animal to live in a particular space.
    `,
    imagePath: '/learning-items/adaptation-fish-hyena.jpeg'
  }, {
    id: 'adaptation-camel-nostrils',
    time: 1,
    kind: 'image',
    title: 'Can you close your nostrils?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Camels can close their nostrils. This is an excellent example of how Camels have adapted to the desert environment.

    By closing their nostrils, Camels can keep the desert sand out of their nose.

    You can learn more about [Camel adaptations here.](http://www.vtaide.com/png/camel-adaptations4.htm)
    `,
    imagePath: '/learning-items/camels-close-nostrils-adaptation.jpeg'
  }, {
    id: 'adaptation-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Fish have streamlined shape. This __________ allows them to move easily under water.

      Select the correct option.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'habitat'
      },
      {
        id: 'opt2',
        text: 'news'
      },
      {
        id: 'opt3',
        text: 'adaptation'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Habitat does not make sense here. This habitat allows them move easily under water? That does not sound right.'
      },
      {
        answerSet: ['opt2'],
        response: 'The news that fish have a streamlined body does nothing for the fish.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct.__ Fish have adapted to have a streamlined body so they can swim easily.'
      }
    ]
  }, {
    id: 'desert-plants',
    time: 5,
    kind: 'image',
    title: 'Adaptation by desert plants',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Click on the link below to see an incredible video about plants in the in desert environment.

    This video includes adaptations made by the cactus plant to survive desert conditions.

    [Click here](http://www.pbslearningmedia.org/asset/tdc02_vid_desert/) to see the video.
    `,
    imagePath: '/learning-items/cactus.jpg'
  }, {
    id: 'biotic',
    time: 1,
    kind: 'image',
    title: 'What does the word biotic mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word Biotic, I think of Bio or Biology. Biology, I know, is the study of life.

    Thus, Biotic simply means living things like plants and animals. The cat and the flower in the image below are biotic components of their habitats.
    `,
    imagePath: '/learning-items/biotic-living-things.jpeg'
  }, {
    id: 'abiotic-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Soil, water and air are the __________ factors of a habitat.

      Select the correct option.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'biotic'
      },
      {
        id: 'opt2',
        text: 'abiotic'
      },
      {
        id: 'opt3',
        text: 'probiotic'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Biotic means living things. Soil, air and water are non-living things.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Abiotic refers to the non-living things that make up a habitat.'
      },
      {
        answerSet: ['opt3'],
        response: 'Ummm, clearly this was an attempt at a joke.'
      }
    ]
  }, {
    id: 'adaptation-in-cold-climates',
    time: 1,
    kind: 'image',
    title: 'Adaptations in cold climates',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is how animals adapt to colder climates. Yaks grow really long hair to help protect themselves from cold.

    Penguins adapt by huddling together. This helps them conserve heat.
    `,
    imagePath: '/learning-items/adaptation-cold-yak-penguins.jpeg'
  }, {
    id: 'whales-blowholes',
    kind: 'video',
    time: 1,
    title: 'Whales breathing through their blowholes',
    instructions: 'Whales do not have gills and cannot breathe under water. They rise to the surface of water and breathe through their blowholes, which is at the top of their head.',
    videoId: 'FzQoTsTS1eQ',
  }, {
    id: 'adaptation-in-ocean',
    time: 2,
    kind: 'image',
    title: 'Adaptations in Oceans',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Whales have adapted to life in the ocean.

    They breathe using their blowholes (or "noses"), which are at the top of their head. But the blowholes did not always use to be there.

    Millions of years ago, their blowholes were in the front of their heads. We know this because scientists have discovered old fossils (or bones) of Whales from millions of years ago.

    Now that the blowhole is at the top of their head, it is easier for the Whales to breathe without rising too far out of water.
    `,
    imagePath: '/learning-items/adaptation-ocean-whales-blowhole.jpeg'
  }, {
    id: 'adaptations-in-grasslands',
    time: 1,
    kind: 'image',
    title: 'Adaptations in Grasslands',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Lions have adapted to their grassy habitats.

    Their light brown colour helps them hide in dry grasslands, which is where they wait and hunt their prey.
    `,
    imagePath: '/learning-items/lion-grassland.jpg'
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Read section 9.4 _Characteristics of the Living Beings_ from your science book.

    Then use a _pen and paper_ to draw a picture that shows what you have learned from that section.

    Take a picture of the drawing from your phone and share it here.`,
  }, {
    id: 'grade6-chapter9-song',
    kind: 'video',
    time: 3,
    title: 'Chapter Revision',
    instructions: 'This song will help you revise the entire chapter.',
    videoId: 'ltBAeITg3wI',
    locked: true
  }]
}, {
  id: '10',
  thumbnailImagePath: '/chapter-thumbnails/thumbnail-measurement.jpg',
  title: 'Motion and Measurement of Distances',
  description: 'Watch videos, answer questions, and view solutions from Chapter 10, Motion And Measurement Of Distances, in the Class 6 NCERT science book.',
  items: [{
    id: 'means-of-transport-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Means of transport',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which of the following means of transportation is __not__ used commonly?

      I know this quiz is easy. But let us begin with an easy question in this chapter.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Airplane'
      },
      {
        id: 'opt2',
        text: 'Bus'
      },
      {
        id: 'opt3',
        text: 'Train'
      },
      {
        id: 'opt4',
        text: 'Cat'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Many people around the world use airplanes as a regular means of transport.'
      },
      {
        answerSet: ['opt2'],
        response: 'Bus is an extremely commonly used means of transport.'
      },
      {
        answerSet: ['opt3'],
        response: 'Millions of people use trains regularly in our country.'
      },
      {
        answerSet: ['opt4'],
        response: '__Correct.__ Clearly people do not use cats as a means of transportation. If they did, it would be considered animal cruelty.'
      }
    ]
  }, {
    id: 'spirit-to-mars',
    kind: 'video',
    time: 6,
    title: 'Getting to Mars',
    instructions: dedent`
    Alright now for some exciting means of transport.

    We do not go to Mars often. But in 2003, NASA, an American space agency, sent a robot to Mars. Its name was Spirit Rover.

    It took Spirit 7 months to get to Mars from Earth. This video is an animation of the journey Spirit took.`,
    videoId: 'XRCIzZHpFtY',
    startTime: 21,
  }, {
    id: 'what-did-spirit-see-on-mars',
    kind: 'video',
    time: 4,
    title: 'What did Spirit see on Mars?',
    instructions: dedent`
    The Spirit Rover operated on Mars for several years.

    This video is a NASA report on what Spirit saw in its first 5 years on Mars.`,
    videoId: 'EIr03Cz-3zc',
  }, {
    id: 'si-units',
    time: 2,
    kind: 'image',
    title: 'International System of Units',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    OK, back to Earth and our science book.

    The book on page 99 talks about the _International System of Units_ which are used all over the world. But it uses the short form as __SI__ and not __IS.__

    Why is that?

    That is because the French invented the International System of Units. And in French that translates to _Système International dunités_. Therefore the abbreviation is __SI__.
    `,
    imagePath: '/learning-items/internationa-system-units.jpeg'
  }, {
    id: 'si-units-metre-kg-sec',
    time: 1,
    kind: 'image',
    title: 'Length, Weight and Time',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The International System of Units (SI) has __3__ main units.

    Length is measured in metres. For instance, the pizza in the image is 1 metre long, which is similar to the length of a guitar.

    The standard unit for weight is kilogram, and time is seconds.
    `,
    imagePath: '/learning-items/one-metre-pizza.jpeg'
  }, {
    id: 'why-not-use-feet',
    kind: 'textResponse',
    time: 5,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Why do we need a standard unit for length?',
    instructions: 'Why don\'t we use our feet to measure length? Why do we need a standard unit like metre to measure length?',
    hacks: {
      afterBody: {
        show: 'locked',
        preface: 'Here is how Koushiki, a student of Class 6 at Ahlcon International School in Delhi answered this question. She says, "People have feet of different sizes. Babies have small feet. Adults have large feet. We need a unit that everyone can agree on."',
        feedbackImagePath: '/learning-items/baby-feet.jpeg'
      }
    }
  }, {
    id: 'one-metre-100-centimetres',
    time: 2,
    kind: 'image',
    title: '1m = 100cm. How can you remember this formula?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    _1 metre = 100 centimetres_.

    One way I try to remember this formula is by thinking of the word _centi_ that can refer to 100. Think of the word _century_ when someone scores a 100 runs in cricket.

    _Centi_, more accurately means 1/100 (or one hundredth). If you take a metre (which is the size of a guitar), and divide it into 100 equal parts, each one of those parts is a centimetre.
    `,
    imagePath: '/learning-items/one-metre-100-centimetres.jpeg'
  }, {
    id: 'millimetres',
    time: 6,
    kind: 'image',
    title: 'Millimetre',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The thickness of a credit card is about 1 millimetre long.

    [Click here](https://www.mathsisfun.com/measure/metric-length.html) to see similar examples that explain the relationship between millimetres, centimetres, metres, and kilometres.
    `,
    imagePath: '/learning-items/one-millimetre-thickness-credit-card.jpeg'
  }, {
    id: 'which-is-greater-1',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Which is greater?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which of the following two values is greater?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: '1 metre'
      },
      {
        id: 'opt2',
        text: '105 centimetres'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '1 metre = 100 centimetres. And 100 centimetres is less than 105 centimetres.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ 105 centimetres is greater than 100 centimetres (or 1 metre).'
      }
    ]
  }, {
    id: 'which-is-greater-2',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Which is greater?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which of the following three values is greatest?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: '2 metres'
      },
      {
        id: 'opt2',
        text: '200 centimetres'
      },
      {
        id: 'opt3',
        text: '2100 millimetres'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '2 metres = 200 centimetres = 2000 millimetres. That is less that 2100 millimetres.'
      },
      {
        answerSet: ['opt2'],
        response: '200 centimetres = 2000 millimetres. That is less than 2100 millimetres.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct.__ 2100 millimetres = 210 centimetres = 2.1 metres. This is the greatest of the three values.'
      }
    ]
  }, {
    id: 'errors-in-measurement',
    time: 2,
    kind: 'image',
    title: 'Errors in Measurement',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here are two main errors in measurement:

    1) In some scales, the ends may be broken. You may not be able to see the zero mark clearly. In such cases, you should avoid taking measurements from the zero mark of the scale. You can begin from any other full mark, like 1 cm.

    2) You should place your eye directly in front of point where the measurement is to be taken.
    `,
    imagePath: '/learning-items/errors-while-taking-measurements-2.jpeg'
  }, {
    id: 'parallax',
    time: 2,
    kind: 'image',
    title: 'Eye placement while taking measurements',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    What happens if you do not place your eye above the point of measurement?

    Check out the image below. If you are at point A, you are likely to see a star with a blue background. But if you are at point B, you are likely to see a star with a red background.

    Where you place your eye changes what you see.
    `,
    imagePath: '/learning-items/parallax.jpeg'
  }, {
    id: 'rectilinear-motion',
    time: 1,
    kind: 'image',
    title: 'What is Rectilinear Motion?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word Rectilinear, I think of the word __linear__. When I think of the word linear, I think of the word __line__.

    Rectilinear motion is motion in a straight line.

    _Recti_, in case you are wondering, simply means straight.
    `,
    imagePath: '/learning-items/rectilinear-motion-marching-army.jpeg'
  }, {
    id: 'circular-motion',
    time: 1,
    kind: 'image',
    title: 'What is Circular Motion?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    In circular motion, an object moves such that its distance from a fixed point remains the same.

    The dog in the image below is in circular motion. Its distance from the center of the swing is always the same.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/circular-motion-3.gif)
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'periodic-motion',
    time: 1,
    kind: 'image',
    title: 'What is Periodic Motion?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    This is the type of motion which repeats itself periodically (or again and again).

    Like the moon revolving around the earth.
    `,
    imagePath: '/learning-items/periodic-motion-moon-earth.jpeg'
  }, {
    id: 'grade6-chapter10-song',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'CHFiPUxpGyk',
    locked: true
  }]
}, {
  id: '11',
  thumbnailImagePath: '/chapter-thumbnails/chapter-11.jpg',
  title: 'Lights, Shadows And Reflections',
  description: 'Learn Chapter 11, Lights Shadows And Reflections, in the Class 6 NCERT science book by answering questions, viewing solutions and watching videos.',
  items: [{
    id: 'can-shadows-be-colourful',
    kind: 'video',
    time: 3,
    title: 'Can Shadows Be Colourful?',
    instructions: dedent`
    We know that shadows are black.

    But can shadows be yellow or red or green? Watch this video to find out.
    `,
    videoId: 'MKW3uUM9xDU',
  },  {
    id: 'create-final-exam',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Imagine You Were Creating An Exam',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine you were creating a final exam on the video above.

    What question would you ask your students in the class? And what would the answer to your question be?`,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz.',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`
            I would ask the following question:

            Imagine you have two light sources - one red and one green. What will be the colour of the shadow on the screen where your hand blocks the red light.

            Here is the answer:
            The colour of the shadow would be green.`
          }
        ]
      }
    }
  },  {
    id: 'what-are-luminous-objects',
    time: 1,
    kind: 'image',
    title: 'What Are Luminous Objects?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Objects like the sun and the electric bulb that emit their own light are called luminous objects.
   `,
    imagePath: '/learning-items/sun-luminous.jpeg',
  }, {
    id: 'luminous-objects-way-to-remember',
    time: 1,
    kind: 'image',
    title: 'Luminous Objects: A Way To Remember',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word _Luminous_, I remember the ad for _Luminous Inverters and Batteries_ with Sachin Tendulkar.

    Now Luminous Inverters and Batteries can light up a home in case of a power cut. This helps me remember that luminous means things that emit or provide light.
   `,
    imagePath: '/learning-items/luminous-meaning-sachin-tendulkar.jpeg',
  }, {
    id: 'moon-lumnious-or-non-luminous',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Luminous Or Non-Luminous?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![moon non luminous](/learning-items/moon-non-luminous.jpeg)

      Is the moon luminous or non-luminous?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Luminous'
      },
      {
        id: 'opt2',
        text: 'Non-Luminous'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Moon is non-luminous. It does not have any light of its own and it only reflects the light from the sun.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Moon is non-luminous as it does not emit any light of its own.'
      }
    ]
  }, {
    id: 'transparent-translucent-opaque',
    kind: 'video',
    time: 4,
    title: 'Transparent, Translucent And Opaque',
    instructions: dedent`
    __Transparent__ objects allow light to pass through them. We are able to see clearly through such objects. Example a glass window.

    __Translucent__ objects allow only some light to pass through them. We can see through these objects, but not very clearly. Example a plastic bag.

    __Opaque__ objects do not allow any light to pass through them. We are unable to see through such objects. Example a piece of wood.

    Let us watch this video to learn more about transparent, translucent and opaque objects.
      `,
    videoId: 'dvMYs5JXjPg',
    startTime: 11,
    endTime: 262,
  }, {
    id: 'is-it-transparent-translucent-opaque',
    kind: 'textResponse',
    time: 5,
    title: 'Transparent Translucent Or Opaque?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Categorize the objects used in the previous video as Transparent, Translucent or Opaque.

    Here is the list of objects one more time:
    - Wood
    - Plastic Bag
    - Tissue Paper
    - Cardboard
    - Tin Foil or Aluminium Foil
    - Glass
    - SunGlasses
    - Paper Bag
    - Plastic Bag
    - Blue Plastic
    - Bubble Wrap
    `,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`
             - Wood: Opaque
             - Plastic Bag: Translucent
             - Tissue Paper: Translucent
             - Cardboard: Opaque
             - Tin Foil or Aluminium Foil: Opaque
             - Glass: Transparent
             - SunGlasses: Translucent
             - Paper Bag: Opaque
             - Plastic Bag: Translucent
             - Blue Plastic: Translucent
             - Bubble Wrap: Translucent
            `
          }
        ]
      }
    }
  }, {
    id: 'why-is-glass-transparent',
    time: 3,
    kind: 'image',
    title: '(Optional) Why Is Glass Transparent?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![glass transparent](/learning-items/glass-transparent.jpeg)
    The answer to this question is really tough for me to describe.

    That is because this answer requires us to understand things like  atoms, electrons, and the fact that electrons carry energy.

    Still interested in the answer?

    If yes, then watch this [YouTube Video](https://www.youtube.com/watch?v=Omr0JNyDBI0), which explains why glass is transparent.
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'what-are-shadows',
    time: 2,
    kind: 'image',
    title: 'What Are Shadows?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Shadows are a dark area or shape produced by an opaque body when it comes between rays of light and a surface.

    For instance here is an shadow of some people on a wall.
    ![shadow people](/learning-items/shadows-people.jpeg)

    And here is the shadow of the moon falling on earth. This event is also called a solar eclipse. It happens when the moon comes in between the sun and the earth.
   `,
    imagePath: '/learning-items/shadow-moon-earth-solar-eclipse.jpeg',
  }, {
    id: 'dark-room-shadow-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Shadow Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![dark room shadow quiz](/learning-items/dark-room-shadow.jpeg)

     Can you see a shadow of yourself in a completely dark room?
     `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yes'
      },
      {
        id: 'opt2',
        text: 'No'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. You will not be able to see a shadow of yourself in a completely dark room. Shadows are formed when an opaque objects blocks the path of light. If there is no light, we will not see a shadow.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. You will not be able to see a shadow of yourself in a completely dark room.'
      }
    ]
  }, {
    id: 'shadow-puppet-film',
    kind: 'video',
    time: 5,
    title: 'Shadow Film',
    instructions: dedent`
    This is a short YouTube film where you will see amazing shadows that were made by using just hands.`,
    videoId: 'us7wAnXfzpk',
    startTime: 5,
  }, {
    id: 'how-to-make-shadow-puppets',
    kind: 'video',
    time: 2,
    title: 'How To Make Shadow Puppets?',
    instructions: dedent`
    This video will teach you how to make shadow puppets using your hands.

    You will learn how to make shadows that look like deer, birds and many other animals.`,
    videoId: 'Uv-MdaBfk8U',
  }, {
    id: 'shadow-quiz',
    kind: 'textResponse',
    time: 2,
    short: true,
    title: 'Shadow Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Can you think of a shape that would give a circular shadow if held in one way and a rectangular shadow if held in another way?`,
    hacks: {
      afterBody: {
        preface: 'This image below describes the answer.',
        show: 'locked',
        feedbackImagePath: '/learning-items/cylinder-circular-rectangular-shadow.jpeg',
      }
    }
  }, {
    id: 'how-to-make-pinhole-camera',
    kind: 'video',
    time: 3,
    title: 'How To Make A Pinhole Camera?',
    instructions: dedent`
    A pinhole camera is a box with a tiny hole. Using this camera you can see an image of the things around you. Although the image produced is upside down.

    We will use simple things found in the house to build this camera. These things include a small box, butter paper, a needle, and black paper.
      `,
    videoId: 'SsGlQMMZZUw',
    endTime: 178,
  }, {
    id: 'why-pinhole-camera-image-inverted',
    time: 2,
    kind: 'image',
    title: 'Why Is The Image Of Pinhole Camera Inverted?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Light travels in a straight line.

    In the image below, light rays that travel from the top of the tree to anywhere on the cardboard box that __does not__ have the hole get blocked.

    ![pinhole camera light ray blocked](/learning-items/pinhole-camera-inverted-image-light-blocked.jpeg)

    The light rays that go through the hole are the only ones that do not get blocked.

    Thus light that travels from the __top__ of the tree and through the hole gets inside the box. This light ray continues to travel in the straight line and lands towards the __bottom__ of the screen inside the box.

    Also, the light ray that travels from the __bottom__ of the tree and through the hole gets inside the box. This light ray continues to travel in the straight line and lands towards the __top__ of the screen inside the box.

    This produces an inverted or upside down image.
   `,
    imagePath: '/learning-items/pinhole-camera-inverted-image.jpeg',
  }, {
    id: 'how-to-make-periscope',
    kind: 'video',
    time: 3,
    title: 'How To Make A Periscope?',
    instructions: dedent`
    A periscope is a device that can help us see things that are otherwise out of sight.

    For example, the girl in the image below can see what is happening on the other side of the wall using a periscope.
    ![periscope](/learning-items/periscope.jpeg)

    In this video we will use simple things found in the house to build a periscope. This includes things like a pencil box, mirrors and glue.
      `,
    videoId: 'Nzwc5zBl5vM',
  }, {
    id: 'classify-objects',
    kind: 'textResponse',
    time: 5,
    title: 'Final Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Classify the materials given below as opaque, transparent or translucent and as luminous or non-luminous:

    _Air, water, a piece of rock, a sheet of aluminium, a mirror, a wooden board, a sheet of polythene, a CD, smoke, a sheet of plane glass, fog, a piece of red hot iron, an umbrella, a lighted fluorescent tube, a wall, a sheet of carbon paper, the flame of a gas burner, a sheet of cardboard, a lighted torch, a sheet of cellophane, a wire mesh, kerosene stove, sun, firefly, candle_

    Write the answers in the box below using the following format: _Air - Transparent, Non-Luminous_
    `,
    hacks: {
      afterBody: {
        preface: 'This image below shows the correct answer.',
        show: 'locked',
        feedbackImagePath: '/learning-items/class6-chapter11-categorize-question.jpeg',
      }
    }
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    locked: true,
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'lo9naFiH778',
  }, ]
}, {
  id: '12',
  thumbnailImagePath: '/chapter-thumbnails/chapter-12.jpg',
  title: 'Electricity and Circuits',
  description: 'Watch videos to learn Chapter 12, Electricity And Circuits, from the Class 6 NCERT science book. Try questions on topics like Circuits, Conductors and Insulators.',
  items: [{
    id: 'what-is-an-electric-cell',
    time: 1,
    kind: 'image',
    title: 'What is an electric cell?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    An electric cell produces electricity from the chemicals inside it.

    This electricity can be used by devices like a TV remote. The reaction between the chemicals in the cell produces electricity. Some cells have chemicals like Zinc and Carbon in them (shown here in the picture of the leaking cell below).

    By the way, people in some countries refer to a cell by other names like a battery.
    `,
    imagePath: '/learning-items/electric-cell-battery.jpeg'
  }, {
    id: 'terminals-of-a-cell',
    time: 1,
    kind: 'image',
    title: 'Terminals of an electric cell',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    An electric cell has two terminals — positive and negative.

    There are several different types of cells in the image below. Each one of them produces a different amount of electric current.

    But they all have a positive terminal — this is generally the end with a tiny bump. They also have a negative terminals.
    `,
    imagePath: '/learning-items/cell-terminals.jpeg'
  }, {
    id: 'short-circuit',
    time: 2,
    kind: 'video',
    title: 'Connecting the terminals of a cell',
    instructions: dedent`
    Please do not repeat this experiment without adult supervision.

    When we connect the two ends of a cell (without using any device like a bulb), excessive current starts moving from the positive to the negative terminal. This makes the wire really hot, and can also burn your hand.

    Within a short duration (generally a few seconds), the cell is completely drained and becomes useless. This situation is called a short circuit.
    `,
    videoId: '_LAunryCu9c',
    startTime: 5,
    endTime: 29,
  }, {
    id: 'electric-bulb-filament',
    time: 1,
    kind: 'image',
    title: 'Filament inside a bulb',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    A filament inside a bulb is a thin wire that gives off light when electric current passes through it.

    If this wire breaks, the path of electric current also breaks, and thus the bulb does not glow; the bulb is said to be fused.`,
    imagePath: '/learning-items/filament-electric-bulb.jpeg'
  }, {
    id: 'what-is-an-electric-circuit',
    time: 1,
    kind: 'image',
    title: 'What is an electric circuit?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Clearly, electric circuit is not Arshad Warsis character from the movie Munnabhai MBBS.

    It instead is a path for electricity to flow through the terminals of the cell.
    `,
    imagePath: '/learning-items/electric-circuit.jpeg'
  }, {
    id: 'draw-a-circuit',
    time: 10,
    kind: 'imageResponse',
    title: 'Draw a circuit',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![electric circuit with cell bulb and wires](/learning-items/draw-circuit-cell-bulb-wires.jpeg)

      Draw an electric circuit with the materials listed in the image above — 2 cells, lots of wires, 1 bulb.

      Then use your phone to take a photo of the circuit you have drawn and upload it in the box below.
      `
  }, {
    id: 'conductors-insulators',
    time: 3,
    kind: 'video',
    title: 'Conductors and Insulators',
    instructions: dedent`
    Materials that allow electricity to pass through them are called conductors. Examples include most metals, you, and graphite (which is found in pencils).

    In this experiment a large amount of current is applied to graphite within the pencil. This current is equal to about 25 cells working together.

    Graphite is a good conductor of electricity, so it lets current flow through it. Since we are applying a lot of current, the pencil starts to burn, and very soon the graphite begins to glow. In the end, the electric current applied is so strong that it breaks the graphite.
    `,
    videoId: 'lnn7Px6XsTA',
    startTime: 0,
    endTime: 142,
  }, {
    id: 'cotton-thread',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Conductor or Insulator?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
     ![cotton yarn](/learning-items/cotton-yarn.jpeg)

      Can cotton threads be used in place of wires in electric circuits?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yes, they can be used'
      },
      {
        id: 'opt2',
        text: 'No, they cannot be used'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Hmm. Cotton threads are insulators. That means they do not let electric current pass through them. Thus they cannot be used in place of wires in a circuit.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ Cotton threads are insulators. That means they do not let electric current flow through them. Thus they cannot replace wires in a circuit.'
      }
    ]
  }, {
    id: 'will-it-glow',
    kind: 'textResponse',
    time: 5,
    title: 'Will the bulb glow?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
   ![circuit screwdriver](/learning-items/circuit-screwdriver.jpeg)

    Will the bulb in the image glow?

    Explain your answer in the box below.`,

  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 1,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'DD524zj0TDw',
    locked: true
  }]
}, {
  id: '13',
  thumbnailImagePath: '/chapter-thumbnails/chapter-13.jpg',
  title: 'Fun With Magnets',
  description: 'Learn Chapter 13, Fun With Magnets, in the Class 6 NCERT science book by watching videos, answering questions, and viewing solutions.',
  items: [{
    id: 'when-do-magnets-misbehave',
    time: 4,
    kind: 'video',
    title: 'When Do Magnets Stop Working?',
    instructions: dedent`
    We have seen that magnets work really well on doors of refrigerators and almirahs. But sometimes magnets stop working.

    _Hint_: Heat has something to do with magnets not behaving as usual. Watch this video to find out more.`,
    videoId: 'yjSNU62kxZo'
  }, {
    id: 'pick-a-question-to-investigate',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Solve A Mystery',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![unsolved science mystery](/learning-items/unsolved-problems-mystery.jpeg)
      At the end of the video on magnets we saw that there are still so many questions science has not answered completely. [Here is a list of questions](http://science.sciencemag.org/content/309/5731/78.2.full) that we as humans know very little about.

      Read through the list and pick a question that is interesting to you. And then write that question in the box below.

      My hope is that you contribute to finding the answer to that question some day in the future.`,
    hacks: {
      afterBody: {
        preface: 'Here are some thoughts your fellow students shared',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'I am interested in finding the answer to this question — Are we alone in the universe?'
          },
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Why were some dinosaurs so large?'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'How do flowers come to be? I really like that question and want to think more about it.'
          }
        ]
      }
    }
  }, {
    id: 'how-were-magnets-discovered',
    kind: 'video',
    time: 3,
    title: 'How Were Magnets Discovered?',
    instructions: dedent`
    ![how magnets were discovered magnes magnesia greece](/learning-items/how-magnets-were-disovered.jpeg)
    Our science textbook tells a story of a shepherd named Magnes who was from Greece and who may have discovered a stone that was magnetic.

    The story says that one day Magnes was walking around with his stick, which had a small piece of iron at its end. The stick was attracted to a rock, and that is how magnetic rocks were discovered.

    The rock came to be known as Magnetite and it is said that the rock was named Magnetite after Magnesia, the place in Greece where it was first discovered.

    ![magnesia greece map](/learning-items/magnesia-greece-magnets-discovered-2.jpeg)

    Although many people think the story of magnets is slightly different.

    Some people believe that it was not the shepherd\'s stick, but the iron nails in his sandals that got attracted to the rock. The video below shows a version of that story.`,
    videoId: 'Ce1P3dJdjIg',
    endTime: 31,
  }, {
    id: 'natural-magnets',
    kind: 'video',
    time: 3,
    title: 'What Are Natural Magnets?',
    instructions: dedent`
    ![natural magnet lodestone magnetite](/learning-items/natural-magnet-lodestone-magnetite.jpeg)
    Some rocks are naturally magnetic. They attract metallic things like paper clips, coins and nails. This is a picture of one such rock.

    The video below shows a really large rock that is a natural magnet. This rock contains a lot magnetite, which is mineral and a form of iron.`,
    videoId: 'Vw91JOoKUBI',
  },   {
    id: 'artificial-magnets',
    time: 4,
    kind: 'image',
    title: 'What Are Artificial Magnets?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![artificial magnet bar](/learning-items/artificial-magnet-bar.jpeg)
    The magnets we see in our daily lives, like bar magnets, are made in a factory. Thus they are called artificial magnets.

    In case you are curious, [here is a detailed video](https://www.youtube.com/watch?v=noGGcyPHtdI) on how artificial magnets are made. Do not worry if you do not understand all the details in this video. Watch it to follow some of steps necessary to make magnets in a factory.
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 8,
    title: 'Table 13.1 - Magnetic and Non-Magnetic Materials',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    __Magnetic Materials__ - Now this may seem obvious, but materials that are attracted to magnets are magnetic materials. Examples include iron nails, metallic bangles.

    __Non-Magnetic Materials__ - Materials that are not attracted to magnets are called non-magnetic. Examples include a piece of wood, clothes.

    Based on this information, let us fill in _table 13.1 from page 127_ of your science book.

    Find materials around you — like shoes, soil, iron balls etc. — and test to see if they are magnetic or non-magnetic. Then use a pen and paper to draw a table like the one shown in this image below and write down the results of your experiment in that table.
    ![table 13.1 magnetic non magnetic materials](/learning-items/table-13-1-magnetic-nonmagnetic-materials.jpeg)

    Finally take a picture of that table from your phone and upload it below.`,
    hacks: {
      afterBody: {
        show: 'locked',
        preface: 'The picture below was made and uploaded a student of Class 6 at Ahlcon International School.',
        feedbackImagePath: '/learning-items/table-13-1-magnetic-nonmagnetic-materials-solution.jpeg'
      }
    }
  },   {
    id: 'recovering-needle-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Quiz - Finding A Needle',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![needle on floor magnet](/learning-items/needle-on-floor.jpeg)
    A needle has slipped and fallen down on the floor. How would you find it?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'use a magnifying lens'
      },
      {
        id: 'opt2',
        text: 'use a magnet'
      },
      {
        id: 'opt3',
        text: 'use your eyes to search'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. It can take a long time to scan the entire floor with a small magnifying lens. And you may still miss spots on the floor and thus not find the needle.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. As you move the magnet over the floor, the needle will get attracted to the magnet and will stick to it. This is one of the fastest ways of finding the needle.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is not the best method as it can take a really long time. Also, it can be hard to spot a needle on the floor with just our eyes.'
      }
    ]
  },  {
    id: 'pencil-sharpener-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Quiz - Pencil Sharpener',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![pencil sharpener magnet quiz](/learning-items/pencil-sharpener-magnet-quiz.jpeg)
    It was observed that a pencil sharpener gets attracted by a magnet although its body is made of plastic.

    Name the material that might have been used to make some part of pencil sharpener that caused the attraction.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'plastic body'
      },
      {
        id: 'opt2',
        text: 'blade'
      },
      {
        id: 'opt3',
        text: 'hole in the sharpener'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Plastic is non-magnetic. That means plastic is not attracted by a magnet.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. The blade in the pencil sharpener is made of metal like stainless steel. This blade causes the sharpener to be attracted to the magnet.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is not correct. The empty space in the hole of the pencil sharpener is neither magnetic nor non-magnetic.'
      }
    ]
  },  {
    id: 'poles-of-magnets',
    kind: 'video',
    time: 2,
    title: 'Poles Of A Magnet',
    instructions: dedent`
    The region on a magnet where it is strongest is called the pole of a magnet.

    Each magnet has two poles — the north pole and the south pole.  In a bar magnet, these poles exist at the two ends of the magnet.

    When we bring a bar magnet close to small iron particles (or iron filings), we find that most of these iron filings get attracted to the ends of the magnet. This suggests that the bar magnet is strongest at its ends or its poles.`,
    videoId: '8llkHQtaOlg',
  },  {
    id: 'cylindrical-magnet-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'True Or False',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![cylindrical magnet poles quiz](/learning-items/cylindrical-magnet-poles-quiz.jpeg)
    A cylindrical magnet has only one pole. True or False?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'True'
      },
      {
        id: 'opt2',
        text: 'False'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: dedent`
          This is incorrect. Every magnet, regardless of its shape, has two poles.
          ![cylindrical magnet poles quiz solution](/learning-items/cylindrical-magnet-poles-quiz-solution.jpeg)`
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Every magnet, regardless of its shape, has two poles. A cylindrical magnet also has a north pole and a south pole.'
      }
    ]
  },  {
    id: 'attraction-repulsion-magnets',
    kind: 'video',
    time: 1,
    title: 'Attraction And Repulsion Between Magnets',
    instructions: dedent`
    __Like Poles Repel__:  For example, north pole of one magnet will repel the north pole of another magnet.

    __Unlike Poles Attract__: For example, north pole of one magnet will attract the south pole of another magnet.`,
    videoId: 'c4unwVdvN7Q',
  },  {
    id: 'attraction-repulsion-magnets-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'True Or False',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Similar poles of a magnet repel each other.

    True or False?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'True'
      },
      {
        id: 'opt2',
        text: 'False'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. North pole of one magnet repels the north pole of another magnet. Also, south pole of one magnet repels the south pole of another magnet.'
      },
      {
        answerSet: ['opt2'],
        response: 'This is not correct. Similar poles of a magnet repel each other. For example, north pole of one magnet repels the north pole of another magnet.'
      }
    ]
  }, {
    id: 'what-is-a-compass',
    kind: 'video',
    time: 3,
    title: 'What Is A Compass?',
    instructions: dedent`
    You may have heard that the Sun rises in the east. East is a direction and  there are 4 main directions — North, South, East and West.

    For example, if you are in India, Jammu is in the north, Assam is in the east, Kerala is in the south, and Gujarat is in the west.

    A compass can help us find these directions.
    ![magnetic compass](/learning-items/magnetic-compass.jpeg)

    A compass has a magnetic needle, which can rotate freely. This magnetic needle always points in the north direction. And once we know north, we can find the east, west and south by reading the markings on the compass.

    Here is a short video that shows how we can use a compass to find any direction.
    `,
    videoId: 'M4VuTvTEzVo',
    startTime: 18,
    endTime: 107,
  },  {
    id: 'compass-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'True Or False',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    A compass can be used to find the East-West direction at any place.

    True or False?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'True'
      },
      {
        id: 'opt2',
        text: 'False'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: dedent`
        __Correct__. The compass needle always points north.

        Once we rotate the compass and line up the compass needle with the __N for North__ mark on the compass, we can find any direction by simply reading the markings on the compass. `
      },
      {
        answerSet: ['opt2'],
        response: 'This is not correct. A compass can be used to find the East-West direction or any other direction. Once we rotate the compass and line up the needle with the __N for North__ mark on the compass, we can find any direction by reading the labels on the compass.'
      }
    ]
  },  {
    id: 'making-compass',
    time: 8,
    kind: 'image',
    title: 'How To Make Your Own Compass?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here are the steps necessary to create your own compass at home. You will need a bar magnet and a piece of thread.

    ![suspend bar magnet make compass](/learning-items/suspend-bar-magnet-make-compass.jpeg)
    __Step 1__: Take a bar magnet and tie it to a thread

    __Step 2__: Suspend the magnet and let it move freely. After some time the magnet will come to rest in the north-south direction. [Click here](http://www.explainthatstuff.com/how-compasses-work.html) to find out why a freely suspended bar magnet always comes to rest in the north-south direction.

    Ok, even though a bar magnet comes to rest in the north-south direction, we do not know which end of the magnet is pointing north and which end is pointing south. To find out we will take help from the sun.

    ![sun-rises-east](/learning-items/sun-rises-east.jpeg)
    __Step 3__: Find out the direction in which the sun rises. That direction is east. _(Note that this is not a very accurate way of finding east.)_

    __Step 4__: Now if you face the rising sun or east, then north will be to your left and the south will be to your right.

    __Step 5__: Ok, we now know which way is north, so we will return to our bar magnet. The end of the magnet pointing in the northern direction is the north pole of the magnet. Mark that end of the magnet with the letter _N_.

    You have now made a compass. For when you need to find directions, suspend this bar magnet with a thread. The north pole of this magnet (which is marked __N__) will always point in the northern direction.
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  },  {
    id: 'magnet-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill In The Blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    In olden days, sailors used to find direction by suspending a piece of ________.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'ordinary stone'
      },
      {
        id: 'opt2',
        text: 'bar magnet'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. Suspending any ordinary stone will not tell us the direction.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ When we suspend a bar magnet, the north pole of the magnet points in the northern direction. And the south pole of the bar magnet points in the southern direction.'
      }
    ]
  },  {
    id: 'finding-magnet-poles',
    kind: 'textResponse',
    time: 3,
    title: 'Finding Magnetic Poles',
    short: true,
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![bar magnet no markings labels](/learning-items/bar-magnet-no-markings.jpeg)
    A bar magnet has no markings to indicate its poles. How would you find out near which end is its north pole located?`,
    hacks: {
      afterBody: {
        preface: 'The image below is a collage of the answer given by some students.',
        show: 'locked',
        feedbackImagePath: '/learning-items/find-magnet-poles.jpeg',
      }
    }
  },   {
    id: 'make-a-compass',
    kind: 'video',
    time: 4,
    title: 'How To Make a Compass At Home?',
    instructions: dedent`
    To make a compass needle at home you will need a paper clip, a cup with water, a bottle cap and a simple magnet.

    Once you have made your compass by following the steps in the video below, you will find that much like any regular compass, your compass points in the north-south direction.

    And oh, the music played in this video is too loud. Feel free to __turn the volume down__.
    `,
    videoId: 'Dm91NGofFxU',
    startTime: 10,
    endTime: 230,
  }, {
    id: 'question-10',
    kind: 'imageResponse',
    time: 5,
    locked: true,
    title: 'Match The Columns',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![toy boat water magnet](/learning-items/toy-boat-water-magnet.jpeg)
    A magnet was brought from different directions towards a toy boat that has been floating in water in a tub.

    Affect observed in each case is stated in Column I. Possible reasons for the observed affects are mentioned in Column II.
    ![question 10 chapter 13 class 6 match columns](/learning-items/question-10-chapter-13-match-columns.jpeg)

    Use a pen and paper to draw this table in your notebook. Then match the statements given in Column I with those in Column II.

    Finally, take a picture of the table using your phone and upload it in the box below.`,
    hacks: {
      afterBody: {
        show: 'locked',
        preface: 'The picture below was made and uploaded a student of Class 6 at Ahlcon International School.',
        feedbackImagePath: '/learning-items/question-10-chapter-13-match-columns-solution.jpeg'
      }
    }
  }, ]
}, {
  id: '14',
  thumbnailImagePath: '/chapter-thumbnails/chapter-14.jpg',
  title: 'Water',
  description: 'Watch videos to learn about Chapter 14, Water, from the Class 6 NCERT science book. Try quiz questions on topics like Water Cycle, Transpiration and more.',
  items: [{
    id: 'how-to-convert-seawater-to-drinking-water',
    kind: 'video',
    time: 3,
    title: 'How to convert seawater to drinking water?',
    instructions: 'Watch this video to see how evaporation can purify seawater.',
    videoId: 'yeoN0Pmg_tI',
  }, {
    id: 'evaporation-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Water Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      The video above shows that water vapour can turn back into water droplets.

      This process of changing water vapour into water droplets is called _________.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Evaporation'
      },
      {
        id: 'opt2',
        text: 'Condensation'
      },
      {
        id: 'opt3',
        text: 'Water Cycle'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Evaporation happens when liquid water turns into water vapour.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ The process of changing water vapour into water is called condensation.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is incorrect. Evaporation and Condensation are two important stages of the Water Cycle.'
      }
    ]
  }, {
    id: 'how-much-water',
    time: 1,
    kind: 'image',
    title: 'How Much Water Do We Use?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    How much water does a person in a large city like Delhi use everyday?

    _240 litres per person per day._

    That is equal to about 24 buckets of water each day (if each bucket holds 10 litres of water).
    `,
    imagePath: '/learning-items/how-much-water-does-someone-use-in-delhi-everyday.jpeg'
  }, {
    id: 'how-much-water-do-you-use',
    kind: 'textResponse',
    time: 6,
    short: true,
    title: 'How Much Water Do You Use?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Fill out _Table 14.1 on Page 136_ of your science book, and tell us how many litres of water you use on a daily basis?

    Is it more than or less that 240 litres?`,
    hacks: {
      afterBody: {
        preface: 'Here are some responses from other students',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'I think I use less than 200 litres of water. It was tough to calculate as we use water as a family.'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'I use 180 litres of water. I was surprised that a lot of water is used in flushing the toilet.'
          }
        ]
      }
    }
  }, {
    id: 'where-does-water-come-from',
    time: 1,
    kind: 'image',
    title: 'Where Does Water Come From?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Drinking water in our homes comes from rivers, lakes, ponds and wells. In many cities like Delhi, however, these water sources are being polluted.

    For instance, in this image sewage water (that means water with poop) is released into Yamuna. The Yamuna river is an important source of drinking water for the people of Delhi. Similar examples can be seen in other major cities of India also.

    _Source: NYTimes_
    `,
    imagePath: '/learning-items/sewage-water-yamuna.jpeg'
  }, {
    id: 'what-happens-when-people-donot-get-water',
    time: 1,
    kind: 'image',
    title: 'What If We Do Not Get Water?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Water shortages can cause violent fights.

    In large parts of India, people (mostly women) spend a lot of time collecting drinking water for their families.

    Watch these two videos — [Video 1](http://video.nytimes.com/video/2006/09/28/world/1194817098866/part-1-water-woes-in-india.html) and [Video 2](http://video.nytimes.com/video/2006/09/28/world/1194817115048/part-2-water-woes-in-india.html) — from the New York Times to see the current state of fresh water in Indian cities.

    Even though these videos were made in 2006, the situation has only gotten worse in the last decade.
    `,
    imagePath: '/learning-items/water-shortage.jpeg'
  }, {
    id: 'water-cycle',
    kind: 'video',
    time: 4,
    title: 'Water Cycle',
    instructions: dedent`
    The circulation of water between oceans and land is known as Water Cycle.

    It involves processes like evaporation, transpiration and condensation.`,
    videoId: 'jFjI6y46QRk',
    endTime: 255,
  }, {
    id: 'seeing-evaporation-happen',
    kind: 'video',
    time: 2,
    title: 'Seeing Evaporation Happen',
    instructions: dedent`
    Evaporation is the process of changing liquid water into water vapour. You can see evaporation happen in this video.

    This video was filmed for 2 hours. Here it is played in fast forward mode in under 2 minutes.`,
    videoId: 'AUHw1Cs8r5Y',
  }, {
    id: 'transpiration',
    time: 1,
    kind: 'image',
    title: 'Transpiration',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We have learned about transpiration before. Sorry for boring you, but here it is again.

    Transpiration is the process with which plants lose water.

    A single corn plant, for example, can lose up to 2 litres of water everyday due to transpiration.`,
    imagePath: '/learning-items/transpiration-water-loss.jpeg'
  }, {
    id: 'transpiration-in-jungle',
    kind: 'video',
    time: 1,
    title: 'Transpiration in a Jungle',
    instructions: dedent`
    Plants lose water through transpiration. Here we see trees in a jungle lose water in the form of vapour. This water vapour forms clouds, which rain down on earth again.`,
    videoId: 'w_v8TXhN7Xk',
  }, {
    id: 'what-is-happening-here-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Image Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which process is taking place in the image below?

      _Hint:_ This photo was taken by a satellite and shows part of the Amazon rainforest in South America.

      ![amazon rainforest transpiration condensation](/learning-items/amazon-transpiration-condensation.jpeg)`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Collection of Ground Water'
      },
      {
        id: 'opt2',
        text: 'Transpiration'
      },
      {
        id: 'opt3',
        text: 'Flood'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. We are looking at an image of a forest from space. Ground water is not visible here.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ The most likely thing that is happening in this picture is that the trees in the forest are losing water through Transpiration. And that lost water vapour is then condensing to form clouds.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is incorrect. '
      }
    ]
  }, {
    id: 'how-are-clouds-formed',
    time: 1,
    kind: 'image',
    title: 'How Are Clouds Formed?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Evaporation and Transpiration convert water from its liquid state into a gas. This gas, otherwise known as water vapour, rises, cools, and condenses into tiny water droplets.

    These water droplets come together to form clouds.
    `,
    imagePath: '/learning-items/how-are-clouds-formed.jpeg'
  }, {
    id: 'condensation-quiz',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tiny Drops of Water',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Take out a cooled bottle of water from the refrigerator and keep it on a table.

    After some time you will see some water droplets on the outside of the bottle. Why?

    ![condensation around a bottle](/learning-items/condensation-around-bottle.jpeg)
    `,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`
              Yes, I have seen this happen. Not just with water, but with all other cold drinks also. I think this is because of condensation.

              There is water vapour in the air around the bottle. The bottle is cold. That cold bottle cools the water vapour, which condenses back into tiny water droplets. We see these water droplets outside the bottle.`
          }
        ]
      }
    }
  }, {
    id: 'what-is-ground-water',
    time: 1,
    kind: 'image',
    title: 'What is Ground Water?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    After it rains, some rain water is absorbed by soil. This water can be found underground in the cracks and spaces in soil, and is called ground water.

    We extract this water through wells.
    `,
    imagePath: '/learning-items/ground-water.jpeg'
  }, {
    id: 'drought-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Water Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![drought](/learning-items/drought.jpeg)

      No rainfall for a year or longer can lead to a _______.
    `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Flood'
      },
      {
        id: 'opt2',
        text: 'Drought'
      },
      {
        id: 'opt3',
        text: 'The song ghanan ghanan from Lagaan'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Excessive rains cause floods.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct.__ Lack of rains for an extended period can lead to a drought. Plants and animals have a very difficult time surviving in droughts.'
      },
      {
        answerSet: ['opt3'],
        response: 'I tried to be funny with this answer choice. This answer choice was clearly a joke.'
      }
    ]
  }, {
    id: 'rainwater-harvesting',
    kind: 'video',
    time: 9,
    title: 'Rainwater Harvesting',
    instructions: dedent`
    Rainwater Harvesting is a way to collect water when it rains so it can be used later.

    In this video, Aamir Khan talks to several amazing people who have set up rainwater harvesting systems to conserve water in cities and villages.`,
    videoId: 'DhgaCEP6jn4',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 1,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'Wqh2xTl2lLQ',
    locked: true
  }]
}, {
  id: '15',
  thumbnailImagePath: '/chapter-thumbnails/chapter-15.png',
  title: 'Air Around Us',
  description: 'Learn Chapter 15, Air Around Us, in the Class 6 NCERT science book by watching videos, answering questions, and viewing solutions.',
  items: [{
    id: 'composition-of-air',
    kind: 'video',
    time: 2,
    title: 'Composition of air',
    instructions: 'What do we breathe in? What do we breathe out? Watch to find out.',
    videoId: 'TA2s6uo_vTQ',
  }, {
    id: 'tweet-what-youve-learned',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tweet what you\'ve learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Summarize what you have learned in the video above in 140 characters; then tweet it with #chapter15',
    hacks: {
      afterBody: {
        preface: 'Here are some tweets from your fellow learners!',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'we breathe in air and not just oxygen. #chapter15'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'not only do we breathe in oxygen, but we breathe out oxygen also. wow. #chapter15'
          }
        ]
      }
    }
  }, {
    id: 'wind',
    time: 1,
    kind: 'image',
    title: 'Wind',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is something easy, something you perhaps already know.

    Air in motion is called wind.
    `,
    imagePath: '/learning-items/wind.jpeg'
  }, {
    id: 'air-occupies-space',
    kind: 'video',
    time: 2,
    title: 'Air occupies space',
    instructions: dedent`
    Can we see that air occupies space? Yes.

    Watch this simple video to see how air occupies space inside an empty cup.
    `,
    videoId: 'WBNNfKT6Kk0',
    startTime : 7
  }, {
    id: 'atmosphere',
    time: 1,
    kind: 'image',
    title: 'Atmosphere',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The layer of air surrounding the earth is called atmosphere.

    It consists of many gases, including nitrogen, oxygen, carbon dioxide and a few others.
    `,
    imagePath: '/learning-items/atmosphere.jpeg'
  }, {
    id: 'how-thick-is-atmosphere',
    time: 1,
    kind: 'image',
    title: 'How thick is the atmosphere?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    If the earth were the size of a basketball, the thickness of the atmosphere could be modeled by a thin sheet of plastic wrapped around the ball.

    Source: NASA
    `,
    imagePath: '/learning-items/earth-basketball-atmosphere.jpeg'
  }, {
    id: 'air-supports-burning',
    kind: 'video',
    time: 2,
    title: 'Air supports burning',
    instructions: dedent`
    Activity 3, on Page 148 of the book asks you to put candles in the middle of shallow containers with water. It also asks to light the candle and then cover it with an inverted glass.

    The candle goes out (extinguishes) after some time. Watch this video to see that experiment.
    `,
    videoId: 'Y81tQqvyftA',
    startTime : 35
  }, {
    id: 'oxygen-supports-burning',
    kind: 'video',
    time: 2,
    title: 'Oxygen supports burning',
    instructions: dedent`
    Why did the candle extinguish in the previous video?

    The book says that the candle goes out after the limited oxygen inside the glass is completely used up. It says that oxygen supports burning.

    It is not clear to me that oxygen supports burning.

    Well, the following video will show clearly that oxygen supports burning.
  `,
    videoId: '_JkHB1hV7Hw',
    startTime : 36
  }, {
    id: 'mountaineers-carry-oxygen',
    time: 2,
    kind: 'image',
    title: 'Why do mountaineers carry oxygen?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    As the mountaineer climbs, the atmosphere thins out and thus there is less air to breathe. Less air means less oxygen. Thus they have to carry oxygen with them.

    Note that there is less oxygen at the top of the mountain, but there is also less nitrogen, carbon dioxide and other gasses that make up the air we breathe.

    Source: vmeverest09.com
    `,
    imagePath: '/learning-items/mountaineers-oxygen-cylinders.jpeg'
  }, {
    id: 'co2-extinguis-fire',
    kind: 'video',
    time: 2,
    title: 'Carbon dioxide is used to extinguish fires',
    instructions: dedent`
    Watch this video to see how carbon dioxide can be used to put out (or extinguish) fires.
    `,
    videoId: '1z_ApF2n-5Y',
    startTime : 4
  }, {
    id: 'what-is-respiration',
    time: 2,
    kind: 'image',
    title: 'What is respiration?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Respiration is the act of breathing. I remember this definition by thinking of the following scenario.

    As the air quality gets worse in Delhi, people have started wearing __Respirators.__ A respirator is a mask that helps in breathing by removing dust particles from air.

    Thus respiration is the act of breathing. While breathing, we take in all the gases that make up air, and use oxygen to convert food into energy.
    `,
    imagePath: '/learning-items/respirators.jpeg'
  }, {
    id: 'which-gas-respiration',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Respiration Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Which gas in the atmosphere is essential for respiration?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Nitrogen'
      },
      {
        id: 'opt2',
        text: 'Oxygen'
      },
      {
        id: 'opt3',
        text: 'Argon'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'We breathe in a lot of nitrogen with every breath. But we breath out almost all of it back. Nitrogen is inert; that means our body does not use it.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Oxygen is essential for humans. We breathe in oxygen with every breath, which is used to break down the food we eat into energy.'
      },
      {
        answerSet: ['opt3'],
        response: 'Argon makes for a very small percentage of the atmosphere. This gas is not essential for respiration.'
      }
    ]
  }, {
    id: 'air-in-soil',
    time: 1,
    kind: 'image',
    title: 'Air in soil',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Air (and thus oxygen) is present in soil. That is how animals that live in burrows underneath the ground are able to breathe.

    How does the air get in the soil? Well, the burrows make spaces available for air to move in and out of the soil. However, when it rains, water fills up all the spaces occupied by the air in the soil. Therefore, animals living in the soil emerge out for respiration.
    `,
    imagePath: '/learning-items/burrow-air-soil.jpeg'
  }, {
    id: 'exchange-of-gases',
    kind: 'textResponse',
    time: 10,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Exchange of gases',
    instructions: dedent`
    ![animals plants exchange of gases elephants](/learning-items/elephants-plants.jpg)

    How do plants and animals work to exchange gases in the atmosphere? Write down your thoughts in the box below.

    Read section 15.4, _How is oxygen in the atmosphere replaced,_ from your book before answering this question.
    `,
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 1,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'frAt__t13yM',
    locked: true
  }]
}, {
  id: '16',
  thumbnailImagePath: '/chapter-thumbnails/chapter-16.jpg',
  title: 'Garbage In, Garbage Out',
  description: 'Watch videos, answer quiz questions and view solutions from Chapter 16, Garbage In Garbage Out, in the Class 6 NCERT science book.',
  items: [{
    id: 'landfill-in-hawaii-and-new-delhi',
    kind: 'video',
    time: 3,
    title: 'Landfill in Hawaii and New Delhi',
    instructions: 'Watch this video to see how landfills work in Hawaii and New Delhi',
    videoId: 'GXogi1FV_Iw',
  }, {
    id: 'landfill-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      _______ is an area where the garbage collected from a city is dumped.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Fulfill'
      },
      {
        id: 'opt2',
        text: 'Landstop'
      },
      {
        id: 'opt3',
        text: 'Landfill'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'To fulfill something is to accomplish that thing. It is not related to garbage.'
      },
      {
        answerSet: ['opt2'],
        response: 'Landstop is not the correct answer'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__.'
      }
    ]
  }, {
    id: 'better-view-of-landfill',
    kind: 'video',
    time: 2,
    title: 'Mountains of garbage in New Delhi',
    instructions: 'This video will give you a great view of a garbage mountain in Delhi.',
    videoId: 'ini4iVj_IYw',
    endTime: 117
  }, {
    id: 'how-to-do-composting',
    kind: 'video',
    time: 3,
    title: 'How to make compost at home',
    instructions: 'Here is a tutorial on how to turn plant waste (like food scraps) into compost at home.',
    videoId: 'UDbyNIBFlN0',
  }, {
    id: 'food-waste-to-compost-and-biogas',
    kind: 'video',
    time: 6,
    title: 'Making compost from kachra (waste)',
    instructions: 'In this video, Aamir Khan talks about how waste can be used to produce compost and biogas.',
    videoId: 'M1wL4Ywt9TU',
    endTime: 360,
  }, {
    id: 'composting-definition',
    time: 1,
    kind: 'image',
    title: 'Composting: A definition',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The process of converting plant and animal waste into manure is called composting

    Plant waste (like banana leaves) and animal waste (like horse poop), both shown in this image, are ingredients for composting. Manure, shown at the bottom of this image, is the result of composting.

    Manure is mixed with the soil on farms to enrich the soil with nutrients like Nitrogen.
    `,
    imagePath: '/learning-items/composting.jpeg'
  }, {
    id: 'what-is-manure',
    time: 1,
    kind: 'image',
    title: 'What is manure?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Manure is the fertilizer that is produced at the end of composting.

    This fertilizer can be mixed with the soil on farms to enrich the soil with nutrients like Nitrogen.
    `,
    imagePath: '/learning-items/manure.jpeg'
  }, {
    id: 'using-plastics-in-compost',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Using plastics in a compost',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![plastic bags](/learning-items/plastic-bags.jpeg)

      Can plastic bags be used in a compost?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yes'
      },
      {
        id: 'opt2',
        text: 'No'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'That is incorrect. Plastic bags do not decompose; thus they need to be reused or recycled. They cannot be used in a Compost.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Plastic bags cannot be used in a compost.'
      }
    ]
  }, {
    id: 'types-of-dustbins',
    time: 1,
    kind: 'image',
    title: 'Two types of dustbins',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Some cities in India provide two types of dustbins for garbage collection. One green, and the other blue.

    The green dustbin is meant for plant waste like leftover food. This waste is biodegradable; in other words, this waste can rot or decompose. Since this waste is damp, it is also called wet waste.

    The blue dustbin is meant for objects like plastics and glass, which do not biodegrade and need to be recycled. This type of waste is sometimes called dry waste.

    Sometimes, I have noticed, that people do not put the right type of waste in the correct dustbin.
    `,
    imagePath: '/learning-items/dustbin-types-wet-dry-waste.jpeg'
  }, {
    id: 'harmful-effects-of-burning-leaves',
    time: 1,
    kind: 'image',
    title: 'Harmful effects of burning leaves',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Burning leaves can be dangerous for our health.

    A news report from 2016 suggests that _burning dry leaves, plastic, and other forms of waste along road sides add toxic gases to air. Doctors say inhaling these fumes is at least 10 times more harmful than inhaling the smoke emitted by vehicles._
    `,
    imagePath: '/learning-items/burning-leaves-harmful.jpeg'
  }, {
    id: 'vermicomposting',
    time: 1,
    kind: 'image',
    title: 'Vermicomposting',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The method of making compost from kitchen garbage using redworms is called vermicomposting.

    The word _Vermi_ simply means _Worms_.
    `,
    imagePath: '/learning-items/vermicomposting.jpeg'
  }, {
    id: 'how-is-vermicomposting-done',
    kind: 'video',
    time: 5,
    title: 'How to do vermicomposting at home?',
    instructions: 'Worms eat food scraps, which become compost as they pass through their body.',
    videoId: 'UmXgPXafoPo',
    startTime: 166,
    endTime: 451,
  }, {
    id: 'vermicomposting-is-worm-poop',
    kind: 'video',
    time: 1,
    title: 'Vermicomposting is actually worm poop',
    instructions: 'Worms eat food waste (like vegetable scraps) and convert it into their poop. This poop is the manure or fertilizer that is used in farms.',
    videoId: 'V8miLevRI_o',
    startTime: 90,
    endTime: 147,
  }, {
    id: 'separating-worms-and-compost',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Separating worms and compost',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
     ![redworms vermicomposting](/learning-items/redworms.jpeg)

      Once the compost is ready, how can we separate worms from compost?

      Write your thoughts in the space below.`,
    hacks: {
      afterBody: {
        preface: 'Here is the response from Siddharth, a fellow student who answered this question.',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`
            Add a small amount of new food waste in one corner of the pit.

            All the worms shift to that part of the bin.

            Remove the worm free compost from your bin.`
          }
        ]
      }
    }
  }, {
    id: 'how-to-recycle-paper',
    kind: 'video',
    time: 5,
    title: 'How to recycle paper?',
    instructions: 'Here is a tutorial on how to recycle paper at home.',
    videoId: '7JBOjKpU_mg',
  }, {
    id: 'grade6-chapter16-song',
    kind: 'video',
    time: 1,
    title: 'Chapter Revision',
    instructions: 'This song will help you revise the entire chapter.',
    videoId: 'vB9ZNxKF2zQ',
    locked: true
  }, ]
}]

export default [...chapter6Data, ...demoData]