import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';

export const chapter6Data = [{
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
  id: '12',
  thumbnailImagePath: '/chapter-thumbnails/chapter-12.jpg',
  title: 'Electricity and Circuits',
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

export const chapter7Data = [{
  id: ' 1',
  thumbnailImagePath: '/chapter-thumbnails/grade7/grade7-chapter1-thumbnail2.jpeg',
  title: 'Nutrition in Plants',
  items: [{
    id: 'chapeter-1-video',
    kind: 'video',
    time: 3,
    title: 'Autotroph, Heterotroph and Saprotroph',
    instructions: dedent`
      These 3 words can be confusing. 

      Watch this short video to understand and remember the meaning of Autotroph, Heterotroph and Saprotroph.
    `,
    videoId: 'vdKeOul-CWM',
  }, {
    id: 'green-plants-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![green plant](/learning-items/grade7/green-plants-2.jpg)

      Green plants make their own food and are thus called ___________`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Autotrophs'
      },
      {
        id: 'opt2',
        text: 'Heterotrophs'
      },
      {
        id: 'opt3',
        text: 'Saprotrophs'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. _Auto_ means self and _troph_ means food or nourishment. _Autotrophs_ means organisms that make their own food.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, Heterotroph is not correct. _Hetero_ means other and _troph_ means food or nourishment. Examples include you, your dog and the pitcher plant.'
      },
      {
        answerSet: ['opt3'],
        response: 'No, Saprotroph is not correct. _Sapro_ means dead or decaying and _troph_ means food or nourishment. Examples include mushrooms and worms.'
      }
    ]
  }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Teach a Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/mushrooms-2.jpg)

    Imagine a friend of yours is struggling to remember the definition of Saprotrophs.

    What will you tell him/her that will help them remember the definition of Saprotrophs? Write your answer in the box below.`,
    
  }, {
    id: 'photosynthesis-again',
    time: 1,
    kind: 'image',
    title: 'Photosynthesis - Ek Aur Baar',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    I know you have been studying photosynthesis for years now. And that it may be boring. But since the definition of photosynthesis is in the science book, let us look at it one more time.

    Sun is the source of energy of most living organisms. 

    Plants use sunlight, carbon dioxide from the air, and water from the soil to make food (carbohydrates) and produce oxygen. This process is called photosynthesis.

    In the absence of photosynthesis, there would be no food, and life would be impossible on earth.`,
    
    imagePath: '/learning-items/grade7/photosynthesis.jpeg',

  }, {
    id: 'photosynthesis-video',
    kind: 'video',
    time: 3,
    title: 'Photosynthesis - A Simple Video',
    instructions: dedent`
      Here is a simple video that explains the reaction of photosynthesis. `,
    videoId: '-rsYk4eCKnA',
    endTime: 172,
  }, {
    id: 'stomata-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We know that plants get water from the soil. 

    How do they absorb Carbon dioxide and give out Oxygen?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'From their roots'
      },
      {
        id: 'opt2',
        text: 'From tiny openings in their leaves'
      },
      {
        id: 'opt3',
        text: 'I do not know'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Plants absorb water from their roots, and not Carbon dioxide.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Tiny openings on the leaves allow plants to absorb Carbon dioxide and give out Oxygen. These openings are called Stomata. We will learn about them next.'
      },
      {
        answerSet: ['opt3'],
        response: 'That is ok. Let us move to the next item to learn more about how plants absorb Carbon dioxide and give out Oxygen.'
      }
    ]
  }, {
    id: 'stomata-means-mouths',
    time: 1,
    kind: 'image',
    title: 'What is Stomata?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata is a Greek word, which means mouths.

    In the picture below, we have zoomed into an image of the leaf. There you see two stomata that look like tiny mouths surrounded by swollen lips.

    Stomata are tiny openings (or pores) in the leaf, from which plants take in carbon dioxide and give out water and oxygen.`,
  
    imagePath: '/learning-items/grade7/stomata-means-mouths.jpeg',

  }, {
    id: 'stomata-another-look',
    time: 1,
    kind: 'image',
    title: 'Stomata: Another Look',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata are tiny openings (or pores) in the leaf, from which plants take in carbon dioxide and give out water and oxygen.`,
  
    imagePath: '/learning-items/grade7/stomata-diagram.jpeg',

  }, {
    id: 'stomata-microscope-open-close',
    time: 1,
    kind: 'image',
    title: 'Open and Closed Stomata',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Stomata open to absorb carbon dioxide, which is needed for photosynthesis. 

    Now, when stomata are open, water is also lost.

    Therefore, when carbon dioxide is not needed by the plant, the stomata close to avoid water loss.

    Here you are looking at a microscopic image of an open and closed stoma.`,
  
    imagePath: '/learning-items/grade7/stomata-from-microscope-2.jpeg',

  }, {
    id: 'make-an-exam',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Make an Exam Question',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine you were creating a final exam on the topic of Stomata.

    What is the most difficult stomata-related question you would ask in that exam?

    Tell us in the space below.`,
    
  }, {
    id: 'cholorophyll-meaning',
    time: 1,
    kind: 'image',
    title: 'What is Chlorophyll?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    _Chloro_ means green. 
    _Phlly_ means leaf.

    Chlorophyll is a green pigment in leaves that captures energy from sunlight, which is later used to make food.

    In the image below, we have zoomed into a picture of a leaf. The green substance inside the round spheres is Chlorophyll.
    `, 
    imagePath: '/learning-items/grade7/chlorophyll-definition-3.jpeg',
  }, {
    id: 'cholorophyll-analogy',
    time: 1,
    kind: 'image',
    title: 'Chlorophyll is like Solar Panels',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Chlorophyll is like Solar Panels; they both help capture energy from the sun.

    The energy captured by Chlorophyll is used to make food for plants.
    
    The energy capture by Solar Panels is used to light homes.
    `,
    imagePath: '/learning-items/grade7/chlorophyll-like-solar-panels.jpeg',
  }, {
    id: 'can-humans-photosynthesize',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Can humans photosynthesise?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/beach-human-photosynthesis.jpg)

    Like plants, can humans make their own food using sunlight and water?

    In other words, could you sit in the sun for a while, and make the food that your body needs using the process of photosynthesis?`,
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
        response: 'This is incorrect. Humans do not have Chlorophyll, which is needed to convert the energy from the Sun to food.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Humans cannot photosynthesise. That means we cannot sit in the Sun for a few hours and convert sunlight into food. This is because we do not have Chlorophyll.'
      }
    ]
  }, {
    id: 'photosynthesis-experiment',
    time: 6,
    kind: 'image',
    title: 'Seeing Photosynthesis Happen - Video',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`

    ![sunflower photosynthesis teeth](/learning-items/grade7/sunflower.jpg)

      In this [YouTube Video](https://www.youtube.com/watch?v=ZnY9_wMZZWI&t=6s), a teacher shows how leaves produce oxygen through the process of photosynthesis.

      If you watch till the end, you will be amazed by this experiment.
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'amarbel-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![green plant](/learning-items/grade7/amarbel-2.jpeg)

      The yellow plant you see in this image is called _Amarbel_ or _Cuscuta_.

      It derives its food from the green plant in this image.

      Is the _Amarbel_ an autotroph, heterotroph or saprotroph?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Autotroph'
      },
      {
        id: 'opt2',
        text: 'Heterotroph'
      },
      {
        id: 'opt3',
        text: 'Saprotroph'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'No, this is not correct. _Auto_ means self and _troph_ means food or nourishment. That means plants that make their own food.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. _Hetero_ means other and _troph_ means food or nourishment. Since the Amarbel derives its nutrition from another plant it is called a Heterotroph. Amarbel is also called a parasite. We will learn about parasites next.'
      },
      {
        answerSet: ['opt3'],
        response: 'No, Saprotroph is not correct. _Sapro_ means dead or decaying and _troph_ means food or nourishment. Examples include mushrooms and worms. Amarbel derives its nutrition from the green plant; and the green plant is not dead.'
      }
    ]
  }, {
    id: 'parasites-and-hosts',
    time: 1,
    kind: 'image',
    title: 'Parasites and Hosts',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    A parasite is an organism that derives its nutrition from another organism. For example, the lice that live in human hair, feed on us humans. Thus lice are parasites & humans are their hosts
    
    Amarbel, the yellow plant you saw in a previous example, is also a parasite.

    You can think of parasites as heterotrophs.
    `,
    imagePath: '/learning-items/grade7/parasites-lice-host.jpeg',
  }, {
    id: 'insectivorous-plants',
    kind: 'video',
    time: 2,
    title: 'Insectivorous Plants',
    instructions: dedent`
      Insect eating plants are called Insectivorous Plants.

      In the video below, you will see how a Pitcher Plant consumes a snail. 

      When a snail (or some insect) lands in the pitcher, they are digested by the digestive juices inside the pitcher. 

      Plants like the Pitcher Plant, do not get all of the nutrition they need from photosynthesis, and thus need to feed on snails and other insects.
      `,
    videoId: 'BjWtAjdl4a0',
  }, {
    id: 'insectivorous-plants-toilet',
    kind: 'video',
    time: 2,
    title: 'Some Plants Act Like Toilets',
    instructions: dedent`
      You may have heard that plants need Nitrogen, and that they get some of that nitrogen from soil.

      Pitcher Plant is different. It acts as a toilet for some animals, who come to lick the nectar from the plant, and end up dropping their faeces (or poop) inside the pitcher.

      The poop is rich in nitrogen and acts as a fertilizer for the Pitcher Plant. This makes the pitcher plant a toilet for some animals in the jungle.
      `,
    videoId: 'TwL7K_loRjM',
    endTime: 77,
  }, {
    id: 'lizard-time-lapse',
    kind: 'video',
    time: 2,
    title: 'Bonus Video - Lizard eaten by Ants',
    instructions: dedent`
      This video was taken over several hours and then run in fast forward mode.

      Here, a dead lizard is completely eaten by Ants, in only a few hours.

      Thus Ants can be called Saprotrophs.
      `,
    videoId: 'R3Mt2E1M6dU',
    startTime: 10,
    locked: true,

  },]
}, {
  id: ' 2',
  thumbnailImagePath: '/chapter-thumbnails/grade7/Grade7-Chapter2-Thumbnail.png',
  title: 'Nutrition in Animals',
  items: [{
    id: 'chapeter-2-video',
    kind: 'video',
    time: 8,
    title: 'Food\'s Journey',
    instructions: dedent`
      In this video we talk to a person who experiences a lot of digestion-related problems. 

      Through our conversation, we discuss the journey of food from the mouth to the toilet.
    `,
    videoId: 'vdKeOul-CWM',
  }, {
    id: 'digestive-system-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Digestive System Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Look at the arrow in the image below. Which part of the digestive system is the arrow pointing towards?

      ![digestive system quiz](/learning-items/grade7/digestive-system-quiz-2.jpeg)`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Small Intestine'
      },
      {
        id: 'opt2',
        text: 'Gall Bladder'
      },
      {
        id: 'opt3',
        text: 'Oesophagus'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'That is incorrect. Small intestine is the largest gland in the body, and can be seen towards the bottom of the image.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, that is not the gall bladder.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. This is the Oesophagus or the Foodpipe.'
      }
    ]
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We discussed a lot of new ideas while talking to Sunil Sir in the video above.
    
    Use a _pen and paper_ to draw a picture that shows everything you learned from that video.

    Then take a photo of that drawing from your phone and upload it here.`,
  }, {
    id: 'ingestion-digestion-egestion',
    time: 1,
    kind: 'image',
    title: 'Ingestion, Digestion, Egestion',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Ingestion, simply put, is eating. The word _Ingestion_, reminds me of the word _Insert._ When we eat, we are ingesting (or inserting) food in our body. 

    Digestion is the process of breaking food down into smaller substances that can be used by the body.

    Egestion is the removal of faecal matter (poop) from the body.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/ingestion-digestion-egestion-gif3.gif)

    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'ingestion-starfish',
    kind: 'video',
    time: 2,
    title: 'Ingestion in Starfish',
    instructions: dedent`
      Here is a video that shows how starfish eat. 

      A starfish pops out its stomach through its mouth to eat its food.
    `,
    videoId: 'vw0apxiWzQ8',
  }, {
    id: 'egestion',
    time: 1,
    kind: 'image',
    title: 'What is Egestion?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Egestion is the process of removing faecal matter (or poop) from the body.
    `,
    imagePath: '/learning-items/grade7/egestion.jpeg'
  }, {
    id: 'egestion-exit',
    time: 1,
    kind: 'image',
    title: 'A way to remember Egestion',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word, _Egestion_, I think of the word _Exit_.

    Exit means for us to leave or go out of a building.

    Egestion means for poop to leave or exit our body.
    `,
    imagePath: '/learning-items/grade7/egestion-exit.jpeg'
  }, {
    id: 'alimentary-canal',
    time: 1,
    kind: 'image',
    title: 'What is the Alimentary Canal?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Alimentary means food or nourishment.

    Canal means path or passage.

    Alimentary Canal is the passage through which the food passes in our body.

    It includes the mouth, oesophagus, stomach, small intestine, large intestine, rectum and anus. 
    `,
    imagePath: '/learning-items/grade7/alimentary-canal-3.jpeg'
  }, {
    id: 'how-to-remember-alimentary-canal',
    time: 1,
    kind: 'image',
    title: 'A way to remember Alimentary Canal',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    In 2013, a book named Gulp was released. The sub-title of the book is _Adventures on the Alimentary Canal_.

    I use the image on the cover of this book to remember the meaning of Alimentary Canal.

    Alimentary Canal is path along which the food passes in our body. It includes the mouth, oesophagus, stomach, small intestine, large intestine, rectum, and anus.
    `,
    imagePath: '/learning-items/grade7/alimentary-canal-food-passage.jpeg'
  }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Teach a Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Imagine a friend of yours is struggling to remember the definition of Alimentary Canal.

    What will you tell him/her that will help them remember the definition of Alimentary Canal? Write your answer in the box below.`,
    
  }, {
    id: 'mouth-or-stomach',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Stomach or Mouth or Small Intestine?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![digestive system quiz](/learning-items/grade7/man-eating.jpg)

      Where does digestion begin?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Stomach'
      },
      {
        id: 'opt2',
        text: 'Mouth'
      },
      {
        id: 'opt3',
        text: 'Small Intestine'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. The food enters our body through the mouth and the saliva in the mouth starts converting Starch into Simple Sugars. Thus digestion begins in the mouth.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. The saliva in the mouth converts Starch (that can be found in foods like pasta) into simple sugars. These simple sugars can be used to provide energy to our body.'
      },
      {
        answerSet: ['opt3'],
        response: 'Not correct. Digestion begins in the mouth.'
      }
    ]
  }, {
    id: 'saliva-and-starch',
    time: 1,
    kind: 'image',
    title: 'Saliva and Starch',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Starch can be found in foods like pasta. It is sometimes known as a complex sugar. 

    Saliva can begin the process of digestion by turning the complex sugars in Starch into simple sugars. Our body can then use these simple sugars for energy.
    `,
    imagePath: '/learning-items/grade7/saliva-breaks-starch-into-sugar.jpeg'
  }, {
    id: 'milk-teeth',
    time: 1,
    kind: 'image',
    title: 'What are Milk Teeth?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Milk teeth are the set of teeth that grow during the first year of the life of the baby.

    One reason why milk teeth are called milk teeth is that they resemble the colour of milk.
    `,
    imagePath: '/learning-items/grade7/milk-teeth.jpeg'
  }, {
    id: 'teeth-type-and-decay',
    time: 5,
    kind: 'image',
    title: 'Let us talk about adult teeth',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`

    ![woman teeth](/learning-items/grade7/woman-teeth.jpg)

    Humans have four types of teeth: Incisors, Canines, Pre-Molars, and Molars. [This video](https://www.youtube.com/watch?v=UA8o59seAow) will introduce you to different types of teeth.

    Also, bacteria in the mouth react with the leftover food that is stuck between teeth to produce acid. This acid can damage the teeth. [This video](https://www.youtube.com/watch?v=_oIlv59bTL4) shows how proper brushing can avoid tooth decay. 
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'tongue',
    kind: 'video',
    time: 3,
    title: 'How your tongue works',
    instructions: dedent`
      Your tongue can taste a few different flavours like sweet (ice cream), sour (lemon), salty (potato chips), bitter (coffee) and umami (soy sauce). 

      This video will show you how your tongue does all that. 
    `,
    videoId: 'C4rdqXXzPGU',
    endTime: 198,
  }, {
    id: 'tongue-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Tongue Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      The tongue helps in mixing food with saliva.`,
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
        response: '__Correct__.  '
      },
      {
        answerSet: ['opt2'],
        response: 'Tongue does help in mixing saliva with the food.'
      }
    ]
  }, {
    id: 'stomach-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Let us talk about the Stomach',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![human stomach](/learning-items/grade7/stomach3.jpeg)

      We learned earlier in the chapter that after the Oesophagus, the food comes to the Stomach. 

      The stomach is like a mixie or blender, where the food mixes with digestive juices and _______ acid.

      Can you tell us the name of the acid?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Amino Acid'
      },
      {
        id: 'opt2',
        text: 'Hydrochloric Acid'
      },
      {
        id: 'opt3',
        text: 'Titanic Acid'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is incorrect. Proteins are converted into simpler substances called amino acids in the small intestine.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Stomach releases Hydrochloric Acid, which kills the harmful bacteria in the food. The stomach also releases digestive juices which break down proteins into simpler substances.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is not correct. Titanic acid is a chemical made from the element Titanium, which does not exist in the stomach. '
      }
    ]
  }, {
    id: 'chapeter-2-video-small-intestine',
    kind: 'video',
    time: 3,
    title: 'Recap of Small Intestine',
    instructions: dedent`
      I know we have seen this video before. But let us watch the small intestine portion of this video again, to recap what we had learned previously.
    `,
    videoId: 'vdKeOul-CWM',
    startTime: 322,
    endTime: 410,
  }, {
    id: 'bile-small-intestine',
    time: 1,
    kind: 'image',
    title: 'Bile and the Small Intestine',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Liver produces Bile.

    Bile is a yellowish-green liquid that is temporarily stored in the Gall Bladder. It is eventually send to the Small Intestine where it helps in the digestion of fats.
    `,
    imagePath: '/learning-items/grade7/liver-bile-gall-bladder-small-intestine-fats2.jpeg'
  }, {
    id: 'no-bile',
    time: 1,
    kind: 'image',
    title: 'What if we had no Bile?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Our body needs bile to digest fats.

    If we did not produce any bile then the fats would not be digested and would be passed in our poop. The indigestible fats will then give our poop a white, greasy look. 
    `,
    imagePath: '/learning-items/grade7/no-bile-white-poop.jpeg'
  }, {
    id: 'large-intestine-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Function of Large Intestine',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![human stomach](/learning-items/grade7/large-intestine.jpeg)

      What is the function of large intestine?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Absorb water from undigested food'
      },
      {
        id: 'opt2',
        text: 'Produce bile'
      },
      {
        id: 'opt3',
        text: 'Store poop'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. One of the functions of large intestine is to absorb water and salts from the undigested food.'
      },
      {
        answerSet: ['opt2'],
        response: 'This is incorrect. Bile is produced in the liver.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is __also correct__. Faecal matter (or poop) is stored in rectum which is part of the large intestine.'
      }
    ]
  }, {
    id: 'digestive-system-recap',
    time: 1,
    kind: 'image',
    title: 'Digestive System Recap',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Based on studying this entire chapter, here is a summary of how the food gets digested:
    
    _Saliva_
     - breaks starch into simple sugars
    
    _Stomach_
     - HCl kills harmful bacteria
     - digestive juices break down proteins
    
    _Small Intestine_
     - bile breaks down fats
     - pancreatic juice
        -  turns carbohydrates into simple sugars
        - turns fats into fatty acids
        - turns proteins into amino acids
    `,
    imagePath: '/learning-items/grade7/digestive-system-recap.jpeg'
  }, {
    id: 'digestion-in-cows',
    kind: 'video',
    time: 1,
    title: 'Digestion in Cows',
    instructions: dedent`
      When cows eat, they quickly swallow the grass and store it in a part of the stomach called __rumen__. 

      Here the food is partially digested and is called _cud_. 

      But later the cud returns to the mouth in small lumps and the cow chews it again. This process is called __rumination__ and these animals are called __ruminants__.
    `,
    videoId: 'svw5KA8YlAA',
    startTime: 40,
    endTime: 81,
  }, {
    id: 'chewing-cud',
    kind: 'video',
    time: 1,
    title: 'How cows eat',
    instructions: dedent`
      If you see this video closely at 0:18, you will notice that the cow brings the cud back to her mouth to chew it again.
    `,
    videoId: 'n-cOASb3e_Y',
  }, {
    id: 'summary-video',
    kind: 'video',
    time: 7,
    title: 'Bonus - Revision Video',
    instructions: 'This video will help you revise the entire chapter.',
    videoId: 'zr4onA2k_LY',
    locked: true
  }]
}, {
  id: ' 3',
  thumbnailImagePath: '/chapter-thumbnails/grade7/grade7-chapter3-thumbnail.png',
  title: 'Fibre to Fabric',
  items: [{
    id: 'chapter-3-video',
    kind: 'video',
    time: 5,
    title: 'From Sheep Hair to Sweaters',
    instructions: dedent`
      In this video we interview a sheep farmer who raises 200 sheep.

      Watch to see how sheep hair are converted into woollen sweaters.
    `,
    videoId: '1Iy2Yg92Sa4',
  }, {
    id: 'green-plants-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Scouring Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`      
      What does the word Scouring mean?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Cleaning sheep hair'
      },
      {
        id: 'opt2',
        text: 'Rolling fibre into yarn'
      },
      {
        id: 'opt3',
        text: 'Searching for something'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. Scouring means to clean grease and dust from sheep hair.'
      },
      {
        answerSet: ['opt2'],
        response: 'No, this is not correct. Rolling fibre into yarn is called _Spinning_.'
      },
      {
        answerSet: ['opt3'],
        response: 'Actually, this is __also correct.__ The word _scouring_ can also mean to search for something. Like scouring the internet, or searching for something on the internet.'
      }
    ]
  }, {
    id: 'most-surprising-thing',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Most Surprising Thing',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![saprotroph mushrooms](/learning-items/grade7/interview-with-sheep-farmer.jpeg)

    I hope you watched the video with Mr. Gulzar in the beginning of this chapter.

    What was the most surprising thing you learned in that video?

    Write your answer in the box below.`,
  }, {
    id: 'fleece-means-hair',
    time: 1,
    kind: 'image',
    title: 'Fleece means Hair',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Fleece, simply put, means hair. I am sure you have heard this nursery rhyme: 

    _Mary had a little lamb, her fleece was white as snow._

    The word _fleece_ refers to the hair of lamb.`,
    
    imagePath: '/learning-items/grade7/fleece-means-hair.jpeg',

  }, {
    id: 'what-does-rearing-mean',
    time: 1,
    kind: 'image',
    title: 'What does rearing mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Rearing means to raise or to take care of someone.

    _Child rearing_ is the act of raising a child.

    _Sheep rearing_ is the act of raising sheep. `,
    
    imagePath: '/learning-items/grade7/rearing-means-to-raise.jpeg',

  }, {
    id: 'shearing',
    kind: 'video',
    time: 3,
    title: 'What is Sheep Shearing?',
    instructions: dedent`
      This is a video os a sheep farmer in New Zealand cutting the hair of his sheep using an electric hair cutter.

      Shearing is the process by which the woollen fleece (hair) of an animal like sheep is cut off.`,
    videoId: 'WYEASlmt3vc',
    startTime: 15,
  }, {
    id: 'animals-that-yield-wool',
    time: 1,
    kind: 'image',
    title: 'Animals that yield wool',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Several, animals all around the world are raised for their wool. These include:

     - Yak in Tibet
     - Angora Goats in J&K
     - Llamas in South America
     - Alpacas in South America`,
    
    imagePath: '/learning-items/grade7/animals-that-yield-wool.jpeg',

  }, {
    id: 'wool-quiz',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Which of the following animal does not yield wool?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Yak'
      },
      {
        id: 'opt2',
        text: 'Camel'
      },
      {
        id: 'opt3',
        text: 'Goat'
      },
      {
        id: 'opt4',
        text: 'Woolly Dog'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'That is incorrect. Yaks are raised in Tibet and their thick hair can be used to make wool.'
      },
      {
        answerSet: ['opt2'],
        response: 'That is incorrect. The fur or hair on the body of camels can be used as wool.'
      },
      {
        answerSet: ['opt3'],
        response: 'That is incorrect. Angora goats found in Jammu and Kashmir grow hair that can be used to make shawls.'
      },
      {
        answerSet: ['opt4'],
        response: '__Correct__. Woolly Dogs are an extinct animal. That means, they no longer exist. When they were alive, they were found in North America, and their fur was used to make blankets.'
      }
    ]
  }, {
    id: 'do-sheep-feel-cold-after-they-are-sheared',
    time: 1,
    kind: 'image',
    title: 'Do sheep feel cold after shearing?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Yes.

    The sheep grow hair not because we need sweaters, but because the sheep need hair to protect themselves from cold. 

    So sheep can feel cold after they are sheared; specially if they are sheared in winters. In some cases, the sheep can even die of cold.`,
  
    imagePath: '/learning-items/grade7/do-sheep-feel-cold-after-they-are-sheared.jpeg',

  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here are some of the steps needed to produce sweaters from the hair of a sheep:

    _Shearing, Scouring, Colouring, Spinning, Weaving_

    Use a _pen and paper_ to draw a picture that shows each one of these steps.

    Then take a photo of the drawing from your phone and upload it here.`,
  }, {
    id: 'what-is-sericulture',
    time: 1,
    kind: 'image',
    title: 'What is Sericulture?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    _Seri_ means silk. _Culture_ means to raise or grow something.

    To remember the word Sericulture, I think of the word _Agriculture_, which is the process of raising crops.

    Thus, Sericulture is the process of raising silkworms to produce silk.`,
  
    imagePath: '/learning-items/grade7/sericulture-raising-silkworms.jpeg',

  }, {
    id: 'process-of-making-silk',
    kind: 'video',
    time: 3,
    title: 'Process of Making Silk',
    instructions: dedent`
      Here is the process of making silk:
       - Female silk moths (or flying insects) lays thousands of eggs.
       - The eggs turn into larvae (or the baby version of an insect). These larvae are called caterpillars or silkworms.
       - The silkworms eat mulberry leaves for about 25-30 days.
       - Silkworm begin to secrete a fibre and covers itself in that fibre. This covering is called a cocoon. 
       - The silkworm inside the cocoon develops into a silk moth (or flying insect).
       - To obtain silk, the cocoons are boiled. This kills the silkworm inside and prevents it from turning into a moth and coming out of the cocoon.
       -  Silk fibres from cocoons are removed and then spun together to make silk thread.
       `,
    videoId: 'eqFm_7KyfHI',
    endTime: 211,
  }, {
    id: 'larvae-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Silkworm Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Silkworm is (a) a caterpillar, (b) a larva. 

    Choose the correct option.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'a'
      },
      {
        id: 'opt2',
        text: 'b'
      },
      {
        id: 'opt3',
        text: 'both a and b'
      },
      {
        id: 'opt4',
        text: 'neither a nor b'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'The silkworm is a caterpillar. But it is also called a larva. Larva means an immature or young form of an insect. The plural of larva is larvae.'
      },
      {
        answerSet: ['opt2'],
        response: 'The silkworm is a larva. Larva means an immature or young form of an insect. The plural of larva is larvae. But the silkworm is also called a caterpillar.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. The silkworm is both a caterpillar and a larva. Larva means an immature or young form of an insect. The plural of larva is larvae.'
      },
      {
        answerSet: ['opt4'],
        response: 'This is incorrect.'
      }
    ]
  },  {
    id: 'silk-moth-laying-eggs',
    kind: 'video',
    time: 1,
    title: 'The Silk Moth laying Eggs',
    instructions: dedent`
      The first step in the making of silk involves the silk moth laying eggs.

      This video shows that process.
       `,
    videoId: '8k6gKTZaJwA',
    endTime: 36,
  }, {
    id: 'silkworms-emerging-from-eggs',
    kind: 'video',
    time: 2,
    title: 'Silkworms emerging from Eggs',
    instructions: dedent`
      1-2 weeks after the silk moth has laid eggs, the eggs hatch into silkworms or caterpillars.

      This video shows the process of caterpillars emerging from eggs.
       `,
    videoId: 'yU1_CdMjam8',
  }, {
    id: 'silkworms-eat-mulberry-leaves',
    kind: 'video',
    time: 1,
    title: 'Silkworms eat Mulberry Leaves',
    instructions: dedent`
      The silkworms (or caterpillars) love to eat mulberry leaves. They eat day and night, and increase their body size 10,000 times.

      This video shows the slow process of silkworms eating mulberry leaves.
       `,
    videoId: 'yPcKWW-wewI',
  }, {
    id: 'silkworms-spinning-a-cocoon',
    kind: 'video',
    time: 1,
    title: 'Silkworms Spin a Cocoon',
    instructions: dedent`
      The silkworms (or caterpillars) secrete a silk fibre, and cover themselves in that fibre by making a cocoon.

      This video is running in fast forward mode. It shows 11 hours of recorded video tape in just 1 minute.
       `,
    videoId: 'NPVEug_uFZk',
    startTime: 10,
    endTime: 70,
  }, {
    id: 'why-are-cocoons-boiled',
    kind: 'video',
    time: 4,
    title: 'Why are Cocoons Boiled?',
    instructions: dedent`
      A few weeks after the caterpillar has spun a cocoon, it develops into a silk moth (or a flying insect). They emerge from the cocoon by braking the cocoon and the silk thread.
      
      To prevent the moth from breaking the delicate thread, the cocoons are boiled. This kills the moth inside. The undamaged silk thread can then be removed from the cocoon.

      The video below shows what would happen if the cocoons were __not__ boiled — in that case the silk moth would emerge from the cocoon. This video running in fast forward mode. It shows 16 minutes of recorded video tape in 4 minutes.
       `,
    videoId: 'ClXjhUmJf4w',
    }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 10,
    title: 'Teach a Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine a friend of yours is struggling to understand the process with which silks are made.

    What will you tell him/her that can help them understand that enitre process? Write your answer in the box below.`,
    
  }, {
    id: 'bonus-sericulture-video',
    kind: 'video',
    time: 2,
    title: 'Revision of Sericuture',
    instructions: dedent`
      This video will help you revise the sericulture process.
      `,
    videoId: '77ktNSPFbwQ',
    locked: true,

  },]
}, {
  id: ' 11',
  thumbnailImagePath: '/chapter-thumbnails/grade7/grade7-chapter11-thumbnail2.jpg',
  title: 'Transportation in Animals and Plants',
  items: [{
    id: 'components-of-blood',
    time: 1,
    kind: 'image',
    title: 'Blood Components',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    There are 4 main components of blood: Red Blood Cells, White Blood Cells, Platelets, and Plasma. 

    This image shows what they look like. We will discuss each one of them in this chapter.`,
    
    imagePath: '/learning-items/grade7/components-of-blood-2.jpeg',

  }, {
    id: 'chapter-11-video-rbc',
    kind: 'video',
    time: 2,
    title: 'Red Blood Cells',
    instructions: dedent`
      Red Blood Cells (RBCs) are an important part of our blood.

      RBCs also have an incredible substance inside them called Haemoglobin, which can join very easily with oxygen. 

      Thus, red blood cells can take oxygen to all parts of our body. Here is a song to help you remember the function of red blood cells.
    `,
    videoId: 'Y2_A18dqeFY',
  }, {
    id: 'rbc-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`      
     Red Blood Cells contain ___________.
      `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'White Blood Cells'
      },
      {
        id: 'opt2',
        text: 'Haemoglobin'
      },
      {
        id: 'opt3',
        text: 'Platelets'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. Red Blood Cells and White Blood Cells are separate parts of blood.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Haemoglobin gives RBCs their red colour and can easily bind with oxygen.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is not correct. Red Blood Cells and Platelets are separate parts of blood.'
      }
    ]
  }, {
    id: 'white-blood-cells',
    kind: 'video',
    time: 1,
    title: 'White Blood Cells',
    instructions: dedent`
      White Blood Cells help our body fight against germs. This is a video of a White Blood Cell killing a bacterium (_singular of bacteria_).
    `,
    videoId: 'JnlULOjUhSQ',
  }, {
    id: 'platelets',
    time: 1,
    kind: 'image',
    title: 'Platelets',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Have you ever fallen down and started to bleed? 

    If so, you may have noticed that a dark red clot forms to prevent blood from flowing outside your body. Platelets help create that clot.
    `,
    imagePath: '/learning-items/grade7/platelets-blood-clot.jpeg',

  }, {
    id: 'platelets-name',
    time: 1,
    kind: 'image',
    title: 'Why are Platelets called Platelets?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    This is what  platelets look like when seen through a microscope. 

    They get their name because they look like small plates.
    `,
    imagePath: '/learning-items/grade7/platelets-name-small-plates-2.jpeg',

  }, {
    id: 'platelets-shape',
    time: 1,
    kind: 'image',
    title: 'What Happens During an Injury?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When blood begins to flow out of our body due to an injury, platelets start to look like an octopus, with long tentacles. 

    This new shape helps the platelets form a seal that stops blood from flowing out of our body.
    `,
    imagePath: '/learning-items/grade7/platelets-shape-clot.jpeg',

  }, {
    id: 'platelets-quiz',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Platelets Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    What will happen if there are no platelets in our body?

    Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`
            I just learned that platelets help us when we get injured. 

            They make that solid, red-looking substance on the skin that stops blood from flowing out of our body.

            So if there are no platelets left in our body, we should be very careful, as even a small injury will not heal.
            `
          }
        ]
      }
    }
  }, {
    id: 'platelets-function',
    kind: 'video',
    time: 1,
    title: 'How Platelets Work',
    instructions: dedent`
      This video shows how platelets work when blood starts flowing out of our body.

      There are some tough vocabulary words in this video. __Do not__ worry about them. Focus on the animation to see how platelets work.
    `,
    videoId: 'KtmHdGRBE2E',
    startTime: 26,
  }, {
    id: 'plasma',
    time: 1,
    kind: 'image',
    title: 'Plasma',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Plasma is the fluid part of blood in which all the rest of the blood components travel.
    `,
    imagePath: '/learning-items/grade7/plasma-function.jpeg',

  }, /*{
    id: 'plasma-is-yellow',
    time: 1,
    kind: 'image',
    title: 'Can Blood be Yellow?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Yes. Well, at least part of the blood is yellow.

    In this image you see plasma after it was extracted from blood and kept in a bag. Clearly, plasma is yellow.
    `,
    imagePath: '/learning-items/grade7/plasma-is-yellow-2.jpeg',

  },*/ {
    id: 'blood-components-centrifuge',
    time: 1,
    kind: 'image',
    title: 'Different Blood Components',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    This image shows the 4 components of blood after we have separated them using a machine called centrifuge.

    As you can see, Plasma and Red Blood Cells make up most of the blood. 

    And yes, if we extract plasma from blood, we find that it is yellow in colour.
    `,
    imagePath: '/learning-items/grade7/blood-components-centrifuge-2.jpeg',

  }, {
    id: 'blood-vessels',
    time: 1,
    kind: 'image',
    title: 'What are Blood Vessels',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When I think of the word Vessel, I think of large ships that carry goods across oceans.

    In a similar way, Blood Vessels are tubes that carry blood to all parts of the body. Two main types of blood vessels are Arteries and Veins.
    `,
    imagePath: '/learning-items/grade7/blood-vessels.jpeg',

  }, {
    id: 'arteries-veins',
    time: 1,
    kind: 'image',
    title: 'What are Arteries and Veins?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Arteries and Veins are blood vessels; they carry blood in our body.

    Arteries carry oxygen-rich blood from the heart to all parts of the body.

    Veins carry carbon dioxide from all parts of the body back to the heart.
    `,
    imagePath: '/learning-items/grade7/arteries-veins.jpeg',

  }, {
    id: 'arteries-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`      
     The blood from the heart is transported to all parts of the body by the ___________.
      `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Veins'
      },
      {
        id: 'opt2',
        text: 'Arteries'
      },
      {
        id: 'opt3',
        text: 'Post Man'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. Veins take blood from the body to the heart.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Blood from the heart is transported to all parts of the body through the arteries.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is clearly me trying to make a joke.'
      }
    ]
  }, {
    id: 'way-to-remember',
    time: 1,
    kind: 'image',
    title: 'Memorizing Arteries and Veins',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is one way in which I try to remember the function of arteries and veins.

    The first letter in the word arteries is _"a"_ which reminds me that arteries take blood  away from the heart.

    Vein contains the letters _"in"_. That reminds me that veins take blood back in towards the heart.
    `,
    imagePath: '/learning-items/grade7/remember-arteries-veins.jpeg',

  }, {
    id: 'veins-valves',
    time: 1,
    kind: 'image',
    title: 'Veins have Valves',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Veins carry blood filled with carbon dioxide and other waste products from the body back to the heart.

    It is important that this blood flow only in the direction towards the heart, and not away from it.

    Thus veins have valves. A valve is a flap that allows a fluid like blood to flow in one direction.

    Muscles around veins squeeze to push the blood towards the heart. Once the blood has moved through a section of the vein, the valve closes which prevents that blood from flowing backwards.
    `,
    imagePath: '/learning-items/grade7/veins-have-valves.jpeg',

  }, {
    id: 'capillaries',
    time: 1,
    kind: 'image',
    title: 'Capillaries',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    When arteries reach cells they turn into really thin tubes called capillaries. 

    The walls of capillaries are really thin.

    These thin walls allow capillaries to transfer water and oxygen from the  blood to cells; and also carbon dioxide from the cells to blood.`,
    imagePath: '/learning-items/grade7/capillaries.jpeg',

  }, {
    id: 'arteries-capillaries-veins',
    time: 1,
    kind: 'image',
    title: 'Arteries, Capillaries, Veins',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Here is the relationship between arteries capillaries and veins.

    Arteries carry oxygen rich blood from the heart to our body.

    Upon reaching cells, arteries turn into capillaries. The capillaries supply our cells with oxygen and food. They also pick up waste products like carbon dioxide from cells.

    These capillaries then combine to become veins, which carry blood back to the heart.`,
    imagePath: '/learning-items/grade7/arteries-capillaries-veins.jpeg',

  }, {
    id: 'capillaries-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill in the blank',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`      
     Arteries and Veins are joined by a network of ___________.
      `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Lungs'
      },
      {
        id: 'opt2',
        text: 'Capillaries'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'This is not correct. '
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Capillaries are the thin tubes that join arteries and veins.'
      },
      {
        answerSet: ['opt3'],
        response: 'This is clearly me trying to make a joke.'
      }
    ]
  }, {
    id: 'pulmonary-joints',
    time: 1,
    kind: 'image',
    title: 'What does Pulmonary mean?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The word _Pulmon_ simply means lungs.

    So when you think of pulmonary, think of lungs.

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/grade7/pulmon-lung-gif2.gif)
    `,
    imagePath: '/learning-items/white-space-2.jpeg'
  }, {
    id: 'pulmonary-arteries-veins',
    time: 1,
    kind: 'image',
    title: 'Pulmonary Arteries and Veins',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We know that Pulmonary means lungs.

    Thus, pulmonary arteries and veins connect the heart to the lungs. 

    Arteries take blood away from the heart; thus blood goes from the heart to the lungs in the pulmonary arteries.

    Veins take the blood back to the heart; thus blood goes from the lungs to the heart in the pulmonary veins.`,
    imagePath: '/learning-items/grade7/pulmonary-arteries-veins.jpeg',

  },   ]
}, {
  id: ' 8',
  thumbnailImagePath: '/chapter-thumbnails/grade7/grade7-chapter8-thumbnail.jpg',
  title: 'Winds, Storms and Cyclones',
  items: [{
    id: 'chapter-8-video',
    kind: 'video',
    time: 5,
    title: 'How Cyclones Work',
    instructions: dedent`
      In this video, we travel to Sri Lanka to learn how Cyclones get started in the ocean. We also witness the devastation they can cause on land.
    `,
    videoId: 'vdKeOul-CWM',
  }, {
    id: 'cyclone-location-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Cyclone Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`      
     Which of the following places is __unlikely__ to be affected by a cyclone?

     ![cities in india affected by cyclone](/learning-items/grade7/cyclones-in-india.jpeg)
      `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Delhi'
      },
      {
        id: 'opt2',
        text: 'Puri'
      },
      {
        id: 'opt3',
        text: 'Mangaluru'
      },
      {
        id: 'opt4',
        text: 'Chennai'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. Delhi is landlocked, which means that it is not next to the ocean. And thus it is unlikely to be affected by a cyclone.'
      },
      {
        answerSet: ['opt2'],
        response: 'Puri is on the east coast of India. In 1999, Puri and other places in Odisha, were struck by a devastating category-5 cyclone named Pradip.'
      },
      {
        answerSet: ['opt3'],
        response: 'Mangaluru is a port city in Karnataka and has unfortunately had to face many cyclones in the past.'
      },
      {
        answerSet: ['opt4'],
        response: 'Chennai is the capital of Tamil Nadu and is a coastal city. In 2010, Cyclone Jal caused a lot of devastation in eastern parts of India, including in Chennai.'
      }
    ]
  }, {
    id: 'teach-a-friend-cyclones',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Teach a Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![On the beach](/learning-items/grade7/on-beach-2.jpeg)

    Imagine a friend of yours watched the video on cyclones in the beginning of this chapter, but they are still confused about how cyclones form in the ocean.

    What will you tell your friend that can help them understand the process with which cyclones get started in the ocean? Write your answer in the box below.`,
  }, {
    id: 'air-exerts-pressure',
    kind: 'video',
    time: 3,
    title: 'Air Exerts Pressure',
    instructions: dedent`
      If you watch this video till the end, you will see a huge steel drum get crushed. Clearly, some force is crushing the drum. What is it? The answer is the pressure exerted by air from outside the drum. Let us find out how.

      Water was added to a drum and then that water was boiled. This meant that the water in the drum converted to steam and escaped.

      Then the drum was put in ice water. This caused any steam left inside the drum to condense back into water, thus reducing the amount of air inside the drum.

      Now less air inside the drum means that the air pressure inside the drum has decreased. But the air pressure outside the drum continues to be the same as before. 

      This difference is air pressure crushes the steel drum.
    `,
    videoId: 'JsoE4F2Pb20',
  }, {
    id: 'air-has-weight',
    kind: 'video',
    time: 1,
    title: 'Does Air have Weight?',
    instructions: dedent`
      Yes, it does. Watch this experiment that proves that air has weight.
    `,
    videoId: 'o5LT_wfI98w',
    startTime: 18
  }, {
    id: 'air-pressure-equals-car',
    time: 2,
    kind: 'image',
    title: 'How much pressure does the air exert?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Imagine a pillar of air above your head. Further imagine that this pillar continues to the edge of the atmosphere.
    
    ![pillar of air](/learning-items/grade7/imagine-a-pillar-of-air.jpeg)

    We have seen that air has weight. So that means that this pillar of air must also have some weight. And all of this weight above our head must exert some pressure on us.

    The pressure exerted by the air above of our head is similar to the pressure exerted on us if we were carrying a car on our head.`,
    
    imagePath: '/learning-items/grade7/air-pressure-similar-to-a-car.jpeg',

  }, {
    id: 'why-dont-we-get-crushed',
    time: 2,
    kind: 'image',
    title: 'Why dont we feel all that air pressure?',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We experience a lot of air pressure from the air around us. But the air pressure in our lungs, ears and stomach is the same as the air pressure outside our bodies, which ensures that we don’t get crushed.`,
    imagePath: '/learning-items/grade7/why-dont-we-feel-air-pressure.jpeg',

  }, {
    id: 'holes-in-banners',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Air Pressure Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![holes in banners](/learning-items/grade7/wind-holes-banners.jpg)

    Why are holes made in banners and hoardings?

    Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: dedent`
            We just learnt that air exerts pressure.

            Air would also exert pressure on the banner. And if the wind gets strong, it can cause the banner to fly.

            The holes in the banner will allow the wind to move through the banner and thus reduce the air pressure.
            `
          }
        ]
      }
    }
  }, {
    id: 'wind-speed-air-pressure',
    kind: 'video',
    time: 1,
    title: 'Fast Moving Air creates Low Pressure',
    instructions: dedent`
      This statement can be hard to understand, but the video below will help.

      When we blow air on top of a piece of paper, the paper rises. Why?

      When we blow air on top of a piece of paper, the air on top is moving faster than the air below the paper. 

      Fast moving air creates low pressure. So there is low pressure on top of paper, and high at the bottom. This difference in pressure is what lifts the paper. 
    `,
    videoId: 'MYXiL2wGDAw',
  }, {
    id: 'wind-speed-air-pressure-another-example',
    time: 2,
    kind: 'image',
    title: 'Fast Moving Air creates Low Pressure (again)',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Airplanes fly because _fast moving air creates low pressure._

    The wings of airplanes are designed such that the air on top of the wing travels faster than the air below the wing. 

    This creates low pressure on top and high pressure below the wing. And this difference in pressure lifts the airplane.`,
    
    imagePath: '/learning-items/grade7/fast-moving-air-creates-low-pressure.jpeg',

  }, {
    id: 'air-expands-heating',
    kind: 'video',
    time: 2,
    title: 'Air Expands on Heating',
    instructions: dedent`
      The bottle in the video is not empty. It has air inside it.

      When we put the bottle in hot water, the air inside the bottle expands, thus inflating the balloon. 

      When we put the bottle in ice cold water, the air inside the balloon contracts, thus deflating the balloon. 

      Air expands on heating and contracts on cooling.
    `,
    videoId: 'ZPErStqSSMk',
    startTime: 15,
  }, {
    id: 'warm-air-rises',
    time: 1,
    kind: 'image',
    title: 'Warm Air Rises',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We can see warm air rising in hot air balloons, candle lanterns and steam from a pressure cooker.`,
    
    imagePath: '/learning-items/grade7/warm-air-rises.jpeg',

  }, {
    id: 'making-hot-air-balloon',
    kind: 'video',
    time: 8,
    title: 'Making a Hot Air Balloon',
    instructions: dedent`
      Follow the instructions in this video to make a hot air balloon with things that you can find at home.
    `,
    videoId: 'HTimRtAmSMs',
  }, {
    id: 'warm-air-quiz',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      You want to buy a house. Would you like to buy a house that has windows but no ventilators?

      Write your response in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here is a response from another student who answered this quiz:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: dedent`
            Warm air rises.

            A ventilator is at the top of the house where air can come in and go out. So if there is no ventilator in the house, hot air will have no way to leave the house. 

            I do not want to live in a very hot house.
            `
          }
        ]
      }
    }
  }, {
    id: 'monsoon-winds',
    time: 1,
    kind: 'image',
    title: 'Monsoon Winds',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Winds are generated due to uneven heating of land and water.

    In summers, land warms up faster than the ocean. The air above land heats up, expands and rises. And the air from the ocean moves towards the land. These winds carry water vapour with them and cause monsoons.

    The opposite happens in winters, where the winds move from the land to the ocean.
    `,
    
    imagePath: '/learning-items/grade7/monsoon-winds-summer.jpeg',

  }, {
    id: 'monsoon-winds-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Monsoon Winds Quiz',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Fill in the blank:

    In winters, the wind blows from ______ to _________.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'ocean to land'
      },
      {
        id: 'opt2',
        text: 'land to ocean'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'That is incorrect. The wind blows from ocean to land in summers.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. In winters, the winds blow from the land to the ocean. This is called land breeze.'
      }
    ]
  }, {
    id: 'eye-of-the-storm',
    time: 1,
    kind: 'image',
    title: 'Back to Cyclones',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    We started this chapter by talking about Cyclones. Let us talk about them some more.

    Specifically, the eye of the storm.

    The eye of the storm is the center of the cyclone and is a calm area. Surrounding it are winds moving at really high speeds. `,
  
    imagePath: '/learning-items/grade7/eye-of-the-storm-cyclone.jpeg',

  }, {
    id: 'satellites-that-monitor-cyclones',
    time: 1,
    kind: 'image',
    title: 'Satellites That Monitor Cyclones',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Cyclones can be devastating. Luckily, we have satellites in space that can help us detect the cyclones ahead of time, so we can warn the people who will be affected by them.

    Here is a satellite launched by India on September 8, 2016. Its name is INSAT 3DR. 

    You can also see an image produced by this satellite, through which can see if cyclones are starting in the ocean.`,
  
    imagePath: '/learning-items/grade7/satellites-that-monitor-cyclones.jpeg',

  }, {
    id: 'anemometer',
    time: 1,
    kind: 'image',
    title: 'Anemometer',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Anemometer is a device that is used to measure wind speeds. They can be useful when flying kites, or when flying airplanes, or when reporting on a cyclone.

    They get their name from _Anemoi_, the wind gods in Greek mythology.`,
  
    imagePath: '/learning-items/grade7/anemometer.jpeg',

  }, {
    id: 'tornado',
    time: 1,
    kind: 'image',
    title: 'Tornadoes',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    A tornado is a dark, funnel shaped cloud that reaches the ground.

    They suck everything in their path near the base and throw them out near the top, thus causing a lot of damage.

    Tornadoes generally form over land; while Cyclones form over the ocean.`,
  
    imagePath: '/learning-items/grade7/tornadoes.jpeg',

  }, {
    id: 'more-tornado',
    time: 3,
    kind: 'image',
    title: 'Video on Tornado',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    ![tornadoes](/learning-items/grade7/tornado.jpeg)

    3 out of 4 Tornadoes occur in the USA. [Here is a video](http://video.nationalgeographic.com/video/101-videos/tornadoes-101) that shows how tornadoes occur. 

    The video says that the tornado can spin up to 300 miles per hour. That is about 482 kilometers per hour.
    `,
    imagePath: '/learning-items/white-space-2.jpeg',
    locked: true
  }, ]
},]


// validate that all data items have ids that are unique
const learningItems = [...chapter6Data, ...chapter7Data].map(chapter => {
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
