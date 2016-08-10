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
    time: 1,
    title: 'Our food\'s journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/food-apples.jpeg)

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
        preface: 'The picture below was made and uploaded by Koushiki, a student of Class 6 at Ahlcon International School.',
        feedbackImagePath: '/image-response-feedback/dl-where-food-comes-from.jpg'
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
    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/pizza-carbohydrates-energy.jpeg)

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

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/shrubs-low-branches.jpeg)
    
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

    Here is a great way to rememeber that: Petiole comes from the prefix _Ped_. _Ped_ is used in words like Pedestrian or Pedicure. It has to do with the feet. 

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

    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/venation2.jpeg)
    
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
        preface: 'Here is an image of photosynthesis we got from Wikipedia. It shows that plants take water from soil and carbon dioxide from air, to make food and release oxygen.',
        show: 'locked',
        feedbackImagePath: '/learning-items/Photosynthesis.gif',
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
    ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/have-you-broken-bone-2.jpeg)

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

      ![Image](https://s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/rubbing-our-hands-2.jpeg)`,
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