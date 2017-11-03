const englishData = [{
  id: 'eng-1',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  title: 'Maggie',
  caption: 'Learn English with Maggie',
  categoryId: 'food',
  description: 'Learn English with Maggie',
  items: [{
    id: 'picture-select-ex-1',
    kind: 'imageSelect',
    time: 4,
    title: 'Maggie ex. 1',
    questions: [{
      word: 'Maggie',
      images: [{
        id: 1,
        path: '//i.imgur.com/300Yir1.jpg',
      }, {
        id: 2,
        path: '//i.imgur.com/300Yir1.jpg'
      }, {
        id: 3,
        path: '//i.imgur.com/300Yir1.jpg'
      }, {
        id: 4,
        path: '//i.imgur.com/300Yir1.jpg'
      }],
      answer: 2
    }, {
      word: 'Saggie',
      images: [{
        id: 1,
        path: '//i.imgur.com/300Yir1.jpg',
      }, {
        id: 2,
        path: '//i.imgur.com/300Yir1.jpg'
      }, {
        id: 3,
        path: '//i.imgur.com/300Yir1.jpg'
      }, {
        id: 4,
        path: '//i.imgur.com/300Yir1.jpg'
      }],
      answer: 4
    }]
  },{
    id: 'multiple-choice-example-1',
    kind: 'multipleChoiceResponse',
    time: 2,
    isTimed: 12,
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
}]

export const categories = [{
  id: 'food',
  title: 'Food',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  belongsTo: 'english'
}]

export default englishData
