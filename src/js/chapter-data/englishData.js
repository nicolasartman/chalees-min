const englishData = [{
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
}]

export const categories = [{
  id: 'food',
  title: 'Food',
  thumbnailImagePath: '/chapter-thumbnails/english/food.jpeg',
  belongsTo: 'english'
}]

export default englishData
