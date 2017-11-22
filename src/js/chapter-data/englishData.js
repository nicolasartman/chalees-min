const englishData = [{
  id: 'parleg',
  thumbnailImagePath: '/chapter-thumbnails/english/parleg.jpeg',
  title: 'Parle-G',
  caption: 'Learn English with Parle-G',
  categoryId: 'food',
  description: 'Learn English with Parle-G',
  items: [{
    id: 'parle-g-video',
    kind: 'video',
    time: 5,
    title: 'Parle-G Video (in Hindi)',
    instructions: dedent`
    The packet of Parle-G says: _World\'s largest selling biscuit._ 

    Let us learn about these words.`,
    videoId: '-9VOabKD3wo',
  }, {
    id: 'parleg-match-picture-game',
    kind: 'imageSelect',
    time: 2,
    title: 'Game: Match Words With Picture',
    questions: [{
      word: 'Largest state in India',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/world-from-space.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/largest-state-india-up.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/apostrophe.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/genius-chess.jpeg'
      }],
      answer: 2
    }, {
      word: 'Our world from space',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/world-from-space.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/largest-state-india-up.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/apostrophe.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/genius-chess.jpeg'
      }],
      answer: 1
    }, {
      word: 'Genius',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/world-from-space.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/largest-state-india-up.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/apostrophe.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/genius-chess.jpeg'
      }],
      answer: 4
    }, {
      word: 'Childrens day needs an _____',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/world-from-space.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/largest-state-india-up.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/apostrophe.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/genius-chess.jpeg'
      }],
      answer: 3
    }]
  }, {
    id: 'computer-timed-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    isTimed: 30,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Fill In The Blank',
    instructions: dedent`
      My ______ computer is not working well.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'sister'
      },
      {
        id: 'opt2',
        text: 'sisters'
      },
      {
        id: 'opt3',
        text: 'sister\'s'
      },
      {
        id: 'opt4',
        text: 'sisters\''
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. Since the computer belongs to my sister (मेरी बहन का कंप्यूटर) we need an apostrophe. The correct answer is sister\'s.'
      },
      {
        answerSet: ['opt2'],
        response: '__Incorrect__. The computer belongs to my sister(मेरी बहन का कंप्यूटर). Thus we need an apostrophe. The correct answer is sister\'s.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. Since the computer belongs to my sister(मेरी बहन का कंप्यूटर), sister\'s is correct.'
      },
      {
        answerSet: ['opt4'],
        response: '__Wrong__. Sisters\' means that the computer belongs to not one but two or more sisters (बहनों का कंप्यूटर).'
      }
    ]
  }, {
    id: 'sells-quiz',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'Fill In The Blank (Again)',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Parle-G sells biscuits. Bollywood sells _____.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'potato chips'
      },
      {
        id: 'opt2',
        text: 'tea'
      },
      {
        id: 'opt3',
        text: 'dreams'
      },
      {
        id: 'opt4',
        text: 'clothes'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'To sell something means to give that thing in exchange for money. Bollywood does not sell potato chips.'
      },
      {
        answerSet: ['opt2'],
        response: '__Incorrect.__ Bollywood does not sell tea. To sell something means to give that thing in exchange for money.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. To sell something means to give that thing in exchange for money. When we go to see a movie, we pay money, and receive entertainment or dreams in return.'
      },
      {
        answerSet: ['opt4'],
        response: 'To sell something means to give that thing in exchange for money. Bollywood does not sell clothes.'
      }
    ]
  }, {
    id: 'apostrophe-short-answer',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Teach A Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      How would you explain __apostrophe__ to a friend?
      
      Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here are some examples from other students:',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'I change the english to hindi, and if there is a का, के, की then I use the apostrophe.'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'When a person owns something we use apostrophe. Like a child\'s toy.'
          }
        ]
      }
    }
  }, {
    id: 'largest-timed-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    isTimed: 20,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Fill In The Blank',
    instructions: dedent`
      The opposite of largest is ______.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'tallest'
      },
      {
        id: 'opt2',
        text: 'fittest'
      },
      {
        id: 'opt3',
        text: 'fastest'
      },
      {
        id: 'opt4',
        text: 'smallest'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. Tallest means सबसे लम्बा. Largest is सबसे बड़ा या सबसे ज़्यादा.'
      },
      {
        answerSet: ['opt2'],
        response: '__Incorrect__. To be fit means someone in good health (तंदरुस्त). Fittest means the most fit person (सबसे तंदरुस्त). Largest is सबसे बड़ा या सबसे ज़्यादा.'
      },
      {
        answerSet: ['opt3'],
        response: '__Wrong__. Fast means someone that moves at high speed (तेज़). Fastest means the person who moves most quickly (सबसे तेज़). Largest is सबसे बड़ा या सबसे ज़्यादा.'
      },
      {
        answerSet: ['opt4'],
        response: '__Correct__. Small means something tiny (छोटी चीज़). Smallest means the tiniest thing (सबसे छोटी चीज़). Largest is सबसे बड़ा या सबसे ज़्यादा.'
      }
    ]
  }, ]
}, {
  id: 'maggi',
  thumbnailImagePath: '/chapter-thumbnails/english/maggi.jpeg',
  title: 'Maggi',
  caption: 'Learn English with Maggi',
  categoryId: 'food',
  description: 'Learn English with Maggi',
  items: [{
    id: 'two-minutes-maggi-video',
    kind: 'video',
    time: 4,
    title: 'Maggi Noodles Video (in Hindi)',
    instructions: dedent`
    The packet of Maggi says: _2 minutes to great taste._ 

    Let us learn about these words.`,
    videoId: '9yWggksD6v4',
  }, {
    id: 'match-picture-game',
    kind: 'imageSelect',
    time: 2,
    title: 'Game: Match Word With Picture',
    questions: [{
      word: 'Great',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/sad-face.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/pizza.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/great.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/low-battery.jpeg'
      }],
      answer: 3
    }, {
      word: 'Tasty',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/sad-face.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/pizza.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/great.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/low-battery.jpeg'
      }],
      answer: 2
    }, {
      word: 'Not Great',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/sad-face.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/pizza.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/great.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/low-battery.jpeg'
      }],
      answer: 4
    }]
  },{
    id: 'tasty-timed-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    isTimed: 15,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Tasty Quiz',
    instructions: dedent`
      Which sound is connected with the word __Tasty__?
    `,
    choices: [
      {
        id: 'opt1',
        text: 'ouch'
      },
      {
        id: 'opt2',
        text: 'mmm'
      },
      {
        id: 'opt3',
        text: 'splash'
      },
      {
        id: 'opt4',
        text: 'sigh'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. We say ouch when we have some pain.'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. We say mmm when we see something tasty.'
      },
      {
        answerSet: ['opt3'],
        response: '__Incorrect__. Splash is the sound made when we jump in water.'
      },
      {
        answerSet: ['opt4'],
        response: '__Wrong__. When we are sad or tired we sometimes exhale a long breath. That is called a sigh.'
      }
    ]
  }, {
    id: 'not-great-short-answer',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Teach A Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      What example would you give to explain the words __not great__ to a friend?
      
      Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here are some examples from other students',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'Dropping a catch in cricket is not great.'
          },
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'It is not great to put your finger in your nose.'
          },
          {
            studentName: 'Koushiki',
            imagePath: '/fake-responses/koushiki.png',
            response: 'When people ask, how are you feeling? Sometimes you can say, not great.'
          }
        ]
      }
    }
  }, {
    id: 'meaning-of-tasteless',
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'सही जवाब चुने',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Tasteless शब्द का क्या मतलब है?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'स्वादिष्ट चीज़ '
      },
      {
        id: 'opt2',
        text: 'बेस्वाद '
      },
      {
        id: 'opt3',
        text: 'bland'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. Tasteless माने बेस्वाद'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. Tasteless माने बेस्वाद'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. Bland is another word for tasteless.'
      }
    ]
  },]
}, {
  id: 'independence-day-newspaper',
  thumbnailImagePath: '/chapter-thumbnails/english/independence-day-news.jpeg',
  title: 'Independence Day News',
  caption: 'Learn English With Newspapers',
  categoryId: 'newspapers',
  description: 'Learn English With Newspapers',
  items: [{
    id: 'independence-day-video',
    kind: 'video',
    time: 7,
    title: 'When India Got Its Independence',
    instructions: dedent`
    In this video we will read the headline printed in a newspaper on August 15th, 1947.

    Let us watch and learn new English words.`,
    videoId: 'GzxadEamkAQ',
  }, {
    id: 'independence-match-picture-game',
    kind: 'imageSelect',
    time: 1,
    title: 'Game: Match Word With Picture',
    questions: [{
      word: 'Effort',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/freedom-of-speech.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/effort-mountain-climbing.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/people.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/birthday-cake.jpeg'
      }],
      answer: 2
    }, {
      word: 'Freedom Of Speech',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/freedom-of-speech.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/effort-mountain-climbing.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/people.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/birthday-cake.jpeg'
      }],
      answer: 1
    }, {
      word: 'People',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/freedom-of-speech.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/effort-mountain-climbing.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/people.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/birthday-cake.jpeg'
      }],
      answer: 3
    }, {
      word: 'Birthday',
      images: [{
        id: 1,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/freedom-of-speech.jpeg',
      }, {
        id: 2,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/effort-mountain-climbing.jpeg'
      }, {
        id: 3,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/people.jpeg'
      }, {
        id: 4,
        path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/english/birthday-cake.jpeg'
      }],
      answer: 4
    }]
  }, {
    id: 'call-for-timed-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    isTimed: 20,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Fill In The Blank',
    instructions: dedent`
      They ________ his resignation.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'calls for'
      },
      {
        id: 'opt2',
        text: 'freedom'
      },
      {
        id: 'opt3',
        text: 'call for'
      },
      {
        id: 'opt4',
        text: 'effort'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Incorrect__. Correct answer would be: They __call for__ his resignation. They means more than one person. Since we are using _they_, the correct verb would be _call for_. If one person was calling for something, we would have said: She __calls for__ his resignation.'
      },
      {
        answerSet: ['opt2'],
        response: '__Wrong__. Resignation means to resign or leave a post at the office (इस्तीफा देना). It does not make any sense to say: They freedom his resignation.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. They call for his resignation is correct.'
      },
      {
        answerSet: ['opt4'],
        response: '__Wrong__. Resignation means to resign or leave a post at the office (इस्तीफा देना). It does not make any sense to say: They effort his resignation.'
      }
    ]
  }, {
    id: 'mr-ms-short-answer',
    kind: 'textResponse',
    time: 3,
    short: true,
    title: 'Teach A Friend',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      How would you explain the difference between Mr. and Ms. to a friend?
      
      Write your answer in the box below.`,
    hacks: {
      afterBody: {
        preface: 'Here are some answers from other students',
        show: 'locked',
        fakePeerResponses: [
          {
            studentName: 'Sid',
            imagePath: '/fake-responses/sid.png',
            response: 'Mr. is short for Mister. And Ms. is short for Miss. We use Mr. in front of the name of a male, and we use Ms. in front of the name of a female.'
          },
          {
            studentName: 'Prabsimar',
            imagePath: '/fake-responses/prabsimar.png',
            response: 'Mr. Jawaharlal Nehru is right because Nehru was male. Ms. Indira Gandhi is right because Indira Gandhi was female.'
          }
        ]
      }
    }
  }, {
    id: 'apostrophe-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Fill In The Blank',
    instructions: dedent`
      She always carries _______ of her family.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'picture\'s'
      },
      {
        id: 'opt2',
        text: 'pictures'
      },
      {
        id: 'opt3',
        text: 'pictures\''
      },
      {
        id: 'opt4',
        text: 'picture'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. Picture\'s means पिक्चर का, के, की. In this sentence we are not referring to anything related with the picture. Picture\'s would be used correctly if we were talking about a picture\'s quality (पिक्चर की गुणवत्ता).'
      },
      {
        answerSet: ['opt2'],
        response: '__Correct__. She always carries pictures of her family is correct.'
      },
      {
        answerSet: ['opt3'],
        response: '__Incorrect__. Pictures\' means बहुत सारी पिक्चरो का, के, की. In this sentence we are not referring to anything related with these pictures. Pictures\' would be used correctly if we were talking about pictures\' quality (पिक्चरो की गुणवत्ता).'
      },
      {
        answerSet: ['opt4'],
        response: '__Wrong__. Picture would be correct if used in this way: She always carries __a picture__ of her family.'
      }
    ]
  }, {
    id: 'computer-timed-mcq',
    kind: 'multipleChoiceResponse',
    time: 1,
    isTimed: 30,
    maxSelected: 1,
    presenterImagePath: '/instructors/kunal2.jpg',
    title: 'Fill In The Blank',
    instructions: dedent`
      My ______ scooter is not working well.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'brother'
      },
      {
        id: 'opt2',
        text: 'brothers'
      },
      {
        id: 'opt3',
        text: 'brother\'s'
      },
      {
        id: 'opt4',
        text: 'brothers\''
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Wrong__. Since the scooter belongs to my brother (मेरे भाई का स्कूटर) we need an apostrophe. The correct answer is brother\'s.'
      },
      {
        answerSet: ['opt2'],
        response: '__Incorrect__. The scooter belongs to my brother (मेरे भाई का स्कूटर). Thus we need an apostrophe. The correct answer is brother\'s.'
      },
      {
        answerSet: ['opt3'],
        response: '__Correct__. Since the scooter belongs to my brother (मेरे भाई का स्कूटर), brother\'s is correct.'
      },
      {
        answerSet: ['opt4'],
        response: '__Wrong__. Brothers\' means that the scooter belongs to not one, but two or more brothers (भाइयों के स्कूटर).'
      }
    ]
  }, {
    id: 'meaning-of-effort' ,
    kind: 'multipleChoiceResponse',
    time: 1,
    title: 'सही जवाब चुने',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Effort शब्द का हिंदी में क्या मतलब है?`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'प्रयास'
      },
      {
        id: 'opt2',
        text: 'लोग'
      },
      {
        id: 'opt3',
        text: 'आज़ादी'
      },
      {
        id: 'opt4',
        text: 'श्रम'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: '__Correct__. Effort माने प्रयास'
      },
      {
        answerSet: ['opt2'],
        response: '__Incorrect__. Effort का मतलब है प्रयास'
      },
      {
        answerSet: ['opt3'],
        response: '__Wrong__. Effort माने प्रयास'
      },
      {
        answerSet: ['opt4'],
        response: '__Correct__. Effort माने प्रयास. और प्रयास का एक और शब्द है श्रम.'
      }
    ]
  }, ]
},]

export const categories = [{
  id: 'newspapers',
  title: 'Newspapers',
  thumbnailImagePath: '/chapter-thumbnails/english/newspaper.jpeg',
  belongsTo: 'english'
}, {
  id: 'food',
  title: 'Food',
  thumbnailImagePath: '/chapter-thumbnails/english/food.jpeg',
  belongsTo: 'english'
}, ]

export default englishData
