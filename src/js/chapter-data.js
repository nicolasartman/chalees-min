import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';

const data = [{
  id: '1',
  title: 'Food: Where Does It Come From?',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  items: [{
    id: 'where-does-food-come-from',
    kind: 'video',
    time: 4,
    title: 'Where does food come from?',
    instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
    videoId: 'zHeWx_AifLs',
    // @kunal: here's how to add a different start time
    // startTime: 10,
  }, {
    id: 'our-foods-journey',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Our food\'s journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
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
        preface: 'Here is how Koushiki, another student, answered this quiz.',
        feedbackImagePath: '/image-response-feedback/dl-where-food-comes-from.jpg'
      }
    }
  }, {
    id: 'pick-a-question-to-investigate',
    kind: 'textResponse',
    time: 6,
    short: true,
    title: 'Pick a question to investigate',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      At the end of the video, we present a few questions for you to think about. Here they are again:
      - Where does water come from?
      - Where does petrol come from?
      - Where does snot come from?
        
      Select a question you want to think about more. You can pick from the list above or think of a new question of your own.
        
      Then write it in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here are some thoughts your fellow learners shared',
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
    Spend a few minutes creating a plan for the things you will do to answer the question above. 

    Write down who you plan to talk to, what websites you plan to visit.`,
    hacks: {
      afterBody: {
        preface: 'Here is a word cloud with common words other learners used to describe their plans.',
        show: 'locked',
        feedbackImagePath: '/prefab-word-clouds/research-wordcloud5.png',
      }
    }
  }, {
    id: 'grade6-chapter1-song',
    kind: 'video',
    time: 3,
    title: 'Chapter Revision',
    instructions: 'This song will help you revise the entire chapter.',
    videoId: 'geHAaWbqz_Q'
  }, {
    id: 'herbivore-carnivore-omnivore',
    kind: 'video',
    time: 2,
    title: 'Herbivore, Carnivore, Omnivore',
    instructions: 'Really silly song that will get stuck in your head.',
    videoId: 'wjkqIt_H-ko',
    locked: true
  }]
}, {
  id: '2',
  thumbnailImagePath: '/chapter-thumbnails/chapter-2.jpg',
  title: 'Components Of Food',
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
        preface: 'Here is what another student submitted as a response to this question.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-components-of-food.jpeg',
      }
    }
  },{
    id: 'balanced-diet',
    kind: 'video',
    time: 10,
    title: 'Balanced Diet',
    instructions: 'Which foods should we eat more of, and which should we eat less?',
    videoId: 'n-q8-f2unHY'
  },{
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
  items: [{
    id: 'how-i-learned-to-knit',
    kind: 'video',
    time: 4,
    title: 'How I learned to knit',
    instructions: 'Here is a story of how I learned to knit and then learned something interesting about life.',
    videoId: '0EL7M44_Ey0',
  }, {
    id: 'tell-us-your-learning-story',
    kind: 'textResponse',
    time: 10,
    title: 'Tell us your learning story',
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
    time: 5,
    kind: 'image',
    title: 'Cotton\'s Journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Cotton goes from the field, to fibre, to yarn to fabric. Study the image below to see how cotton shirts are made.',
    imagePath: '/learning-items/cotton-journey.png'
  }, {
    id: 'how-cotton-is-made',
    kind: 'video',
    time: 5,
    title: 'How cotton is made',
    instructions: 'This video gives a very thorough overview of how cotton is made from farm to fabric.',
    videoId: 'kH_b3Heo48I',
    startTime: 20
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Use a pencil and paper to draw a picture that shows what you have learned about how cotton fabric is made. Then take a picture of it and share it here.',
    hacks: {
      afterBody: {
        preface: 'Here is a comic that another student in the class submitted.',
        show: 'locked',
        feedbackImagePath: '/image-response-feedback/dl-fibre-to-fabric.png'        
      }
    }    
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: '1u2uRhDeQOI',
    locked: true
  }]
}, {
  id: '4',
  thumbnailImagePath: '/chapter-thumbnails/chapter-4.png',
  title: 'Sorting Materials Into Groups',
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

    Change one letter in that hotel name, and you get __Hotel Decant__.

    Decant (or its noun Decantation), means to remove water or liquid without disturbing the sediment. 

    Hopefully this image below will help you remember the definition of Decantation.`,
    imagePath: '/learning-items/decantation-jab-we-met.jpeg'
  }, {
    id: 'Sieving',
    time: 2,
    kind: 'image',
    title: 'Seiving',
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
            response: 'Metals expand on heaing. Not just in the lab but also in our world. #chapter6'
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

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/page-burning.jpg)
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

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/salt-and-water.png)
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

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/salman-khan.jpeg)
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
    startTime: 6
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
  thumbnailImagePath: '/chapter-thumbnails/chapter-7.jpg',
  title: 'Getting To Know Plants',
  // All the times in this item are completely made-up
  items: [{
    id: 'why-do-plants-produce-flowers',
    time: 6,
    kind: 'video',
    title: 'Why do plants produce flowers?',
    instructions: 'Why do plants produce flowers? Watch this video to find out.',
    videoId: 'EArZXsRXsj4'
  },
  {
    id: 'reflect-picture',
    time: 10,
    kind: 'imageResponse',
    title: 'Reflect',
    instructions: 'Take a picture and drop it here'
  },
  {
    id: 'reflect',
    time: 8,
    kind: 'textResponse',
    title: 'Reflect',
    instructions: 'Write down your thoughts about flowers'
  },
  {
    id: 'conduct-your-own-experiment',
    time: 10,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own experiment on flowers. [Click here for the instructions](https://goo.gl/cuf63n)',
    imagePath: '/learning-items/flowers-experiment.jpg'
  }]
}, {
  id: '8',
  thumbnailImagePath: '/chapter-thumbnails/chapter-8.png',
  title: 'Body Movements',
  items: [{
    id: 'what-keeps-our-bones-together',
    kind: 'video',
    time: 7,
    title: 'What keeps our bones together',
    instructions: 'Watch to learn more about the hinge joint, the ball and socket joint, ligaments and humility.',
    videoId: 'x4k1JP8LsNY',
  }, {
    id: 'lets-think-about-the-video-one',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 6.2, “Could there be other ways to bring changes”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
  }, {
    id: 'lets-think-about-the-video-two',
    kind: 'textResponse',
    time: 10,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  id: '11',
  thumbnailImagePath: '/chapter-thumbnails/chapter-11.jpg',
  title: 'Lights, Shadows And Reflections',
  items: [{
    id: 'can-shadows-be-colourful',
    kind: 'video',
    time: 3,
    title: 'Can shadows be colourful?',
    instructions: 'Watch this video to learn if a shadow can be blue, green, yellow and other colours.',
    videoId: 'MKW3uUM9xDU',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter11',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 11.4, “Mirrors and Reflections”. Then use a pen and pencil to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'lo9naFiH778',
  }, {
    id: 'lets-think-about-the-video-two',
    kind: 'textResponse',
    time: 10,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  id: '13',
  thumbnailImagePath: '/chapter-thumbnails/chapter-13.jpg',
  title: 'Fun With Magnets',
  // All the times in this item are completely made-up
  items: [{
    id: 'when-do-magnets-misbehave',
    time: 4,
    kind: 'video',
    title: 'When do magnets misbehave?',
    instructions: 'Heat has something to do with magnets not behaving as usual. Watch this video to find out.',
    videoId: 'yjSNU62kxZo'
  }, {
    id: 'share-what-you-have-learned',
    time: 6,
    kind: 'textResponse',
    title: 'Share what you have learned',
    instructions: 'What did you learn? Discuss your response with a friend and write it here.'
  }, {
    id: 'pick-question-to-investigate-and-share',
    time: 10,
    kind: 'imageResponse',
    title: 'Pick question to investigate and share',
    instructions: dedent`
      1) Pick a question from the link that you want to learn more about from [here](http://goo.gl/e2acXh).
      2) Write it on a piece of paper; paste it on a wall.
      3) Take a picture and upload here.`
  }, {
    id: 'conduct-your-own-experiment',
    time: 15,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own curie point experiment. [Click here for the instructions](http://goo.gl/LWKF9o).',
    imagePath: '/learning-items/13-magnets-experiment.jpg'
  }]
}, {
  id: '14',
  thumbnailImagePath: '/chapter-thumbnails/chapter-14.jpg',
  title: 'Water',
  items: [{
    id: 'how-to-convert-seawater-to-drinking-water',
    kind: 'video',
    time: 3,
    title: 'How to convert seawater to drinking water?',
    instructions: 'Watch this video to learn how evaporation helps purify water.',
    videoId: 'yeoN0Pmg_tI',
  }, {
    id: 'lets-think-about-the-video-one',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'making-a-test',
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  id: '15',
  thumbnailImagePath: '/chapter-thumbnails/chapter-15.png',
  title: 'Air Around Us',
  items: [{
    id: 'composition-of-air',
    kind: 'video',
    time: 2,
    title: 'Composition of air',
    instructions: 'What do we breathe in? What do we breathe out? Watch to find out.',
    videoId: 'TA2s6uo_vTQ',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'making-a-test',
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  id: '16',
  thumbnailImagePath: '/chapter-thumbnails/chapter-16.jpg',
  title: 'Garbage In, Garbage Out',
  items: [{
    id: 'landfill-in-hawaii-and-new-delhi',
    kind: 'video',
    time: 3,
    title: 'Landfill in Hawaii and New Delhi',
    instructions: 'This video highlights how landfills work on different sides of the earth',
    videoId: 'GXogi1FV_Iw',
  }, {
    id: 'select-a-video-title',
    kind: 'textResponse',
    time: 5,
    title: 'Select a video title',
    instructions: 'We don\'t like the title of this video. If you were to rename the video from its current title “Landfill in Hawaii and New Delhi” to something more appropriate, what would it be?',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section on Vermicomposting. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 15,
    title: 'Teach a friend',
    instructions: 'Find a friend that you can teach what you have learned in this chapter. Tell them everything you know, answer their questions. Then write down your experiences on what happened here.',
  }]
}, {
  // causes it to not show up on the homepage
  hidden: true,
  id: '999',
  thumbnailImagePath: '/chalees-min-heart.png',
  title: 'Test lesson',
  items: [{
    id: 'multiple-choice-example-1',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Multiple Choice Example 1',
    instructions: dedent`
      Select all that apply.
    
      Select Option 1 and 2, Option 3 and 4, or Option 5, and save to see an automatic response.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1', 'opt2'],
        response: 'This is an automatic response to demonstrate selecting multiple options.'
      },
      {
        answerSet: ['opt3', 'opt4'],
        response: 'This is an automatic response to demonstrate selecting multiple options.'
      },
      {
        answerSet: ['opt5'],
        response: 'This is an automatic response to demonstrate selecting one option.  **bold** ![image](https://i.ytimg.com/vi/6sta6Gkpgcw/maxresdefault.jpg)'
      }
    ]
  }, {
    id: 'multiple-choice-example-2',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Multiple Choice Example 2',
    instructions: 'Select only one',
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ]
  }, {
    id: 'multiple-choice-example-3',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Multiple Choice Example 3',
    instructions: 'Select up to two',
    maxSelected: 2,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ],
    hacks: {
      // this can be beforeBody or afterBody - the functionality is identical
      // except beforebody configurations can't use show: 'locked' (if set to that
      // they'll simply act like show: 'ifResponse')
      afterBody: {
        
        preface: 'this is the text that prefaces the fake peer data',
        
        // can be 'ifResponse', 'locked', or left out to show all the time
        // 
        // 'ifResponse' shows it only if there is a saved response for that item
        // (it does not show while they're typing/selecting but before they've ever
        // hit save for that item).
        // 
        // 'locked' shows a preview of the content and displays a locked message over it
        // until a response has been saved. after that, the response appears in full.
        //
        // setting the value to null or false or leaving it out causes the hack feedback
        // to be shown all the time.
        show: 'ifResponse',
        
        // you can have either of the following present:
        
        // An image to display as the feedback that will be resized to fit the space available
        feedbackImagePath: '/test.jpg',
        
        // a list of fake peer responses, in the same format as below
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
        ],
        
      }
    }
  }, {
    locked: true,
    id: 'adorable-kittens',
    kind: 'video',
    time: 4,
    title: 'Adorable Kittens!',
    instructions: 'Watch these kittens be insanely cute!',
    videoId: 'OtRRUEs3o0c',
    startTime: 8
  }]
}];


// validate that all data items have ids that are unique
const learningItems = data.map(chapter => {
  if (!chapter.items) {
    alert(`Catastrophic error in chapter-data.js: chapter ${chapter.id} lacks an items list`);
    throw new Error();
  }
  
  const chapterItemIds = chapter.items.map(item => item.id);
  if (uniq(chapterItemIds).length !== chapterItemIds.length) {
    alert('Catastrophic error in chapter-data.js: there are two or more ' + 
      'learning items with the same ids within a single chapter! Ids in this chapter: \n' +
      chapterItemIds.join('\n'));
    throw new Error();
  }
  
  chapter.items.map(item => {
    if (!item.id) {
      alert('Catastrophic error in chapter-data.js: the learning item printed below lack an id. ' +
        'It must have a unique id:\n' + JSON.stringify(item, null, 2));
      throw new Error();
    } else if (!/^[\w\d-]+$/.test(item.id)) {
      alert(`Catastrophic error in chapter-data.js: item id ${item.id} ` + 
        'should only contain letters, numbers, and hyphens');
      throw new Error();
    }
  })
});

// TODO: add automaticResponses id validation too

export default data;