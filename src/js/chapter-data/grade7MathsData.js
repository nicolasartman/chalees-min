export default [
  {
    id: "  4",
    thumbnailImagePath: "/chapter-thumbnails/maths/simple-questions-thumbnail2.jpeg",
    title: "Simple Equations",
    caption: "Chapter 4 — Simple Equations",
    description: "Chapter 4 — Simple Equations",
    items: [
        {
            id: 'simple-equation-relevance',
            kind: 'video',
            time: 5,
            title: 'Where will we use simple equations in real life?',
            instructions: dedent`
            Simple equations are used to make the apps that run on our phones.

            Let us listen to Shivani, who is a designer of mobile phone apps, as she explains how she uses simple equations in her life.`,
            videoId: 'Q0HFRCaF7N0',
        },  
        {
            id: 'simple-equations-picture-game',
            kind: 'imageSelect',
            time: 1,
            title: 'Game: Match words with picture',
            questions: [{
              word: 'Simple Equations',
              images: [{
                id: 1,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/bell.jpeg',
              }, {
                id: 2,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/balance.jpeg'
              }, {
                id: 3,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/variable.jpeg'
              }, {
                id: 4,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/pi.jpeg'
              }],
              answer: 2
            }, {
              word: 'Variable',
              images: [{
                id: 1,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/bell.jpeg',
              }, {
                id: 2,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/balance.jpeg'
              }, {
                id: 3,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/variable.jpeg'
              }, {
                id: 4,
                path: '//s3-ap-southeast-1.amazonaws.com/chalees-min-images/learning-items/maths/pi.jpeg'
              }],
              answer: 3
            }, ]
          },
          {
            id: "simple-equations-in-real-life",
            kind: "textResponse",
            time: 2,
            short: true,
            title: "Tweet About Simple Equations",
            presenterImagePath: "/instructors/kunal2.jpg",
            instructions: dedent`
            It is time now for you to think about where you have seen simple equations in real life.

            Once you have the answer, write it in the box below and then tweet your answer with #SimpleEquationsInRealLife`,
            hacks: {
              afterBody: {
                preface: "Here is a response from other students who answered this quiz:",
                show: "locked",
                fakePeerResponses: [
                  {
                    studentName: "Sid",
                    imagePath: "/fake-responses/sid.png",
                    response: dedent
                    `Simple Equations are used when buying things with money. You can find out how much money you will receive back in change from the market using simple equations. #SimpleEquationsInRealLife`,
                  },
                  {
                    studentName: "Prabsimar",
                    imagePath: "/fake-responses/prabsimar.png",
                    response: dedent
                    `I used simple equations to find out how many days it will take me to read a book. #SimpleEquationsInRealLife`,
                  }
                ],
              },
            },
        },
        {
            id: 'simple-equation-math',
            kind: 'video',
            time: 10,
            title: 'How to write simple equations using maths?',
            instructions: dedent`
            OK, now that we know a few places where simple equations are used in real life, let us see how these equations are written using maths.

            This video is long. But it explains the terms simple equations and expressions really well. 
            `,
            videoId: 'bAtuzMZOxR8',
            endTime: 574,
        },
        {
            id: 'exercise-4-1',
            time: 5,
            kind: 'image',
            title: 'Solving Exercise 4.1',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            On page 81, the book asks a bunch of questions about simple equations.

            You should try to solve them.

            If you need step by step help, you can see video solutions on [question 1](https://youtu.be/HONe_TfoCSc), and [question 2](https://youtu.be/O-XcnA6rQd8) here.
            `,
            imagePath: '/learning-items/white-space-2.jpeg'
        },
        {
            id: 'game-solve-question-3-exercise41',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 30,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Solve the equation',
            instructions: dedent`
              What is the value of _p_ in the following equation?

              5p + 2 = 17
            `,
            choices: [
              {
                id: 'opt1',
                text: '1'
              },
              {
                id: 'opt2',
                text: '2'
              },
              {
                id: 'opt3',
                text: '3'
              },
              {
                id: 'opt4',
                text: '4'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. If p were 1, then 5p + 2 would become 7. And that is not equal to 17'
              },
              {
                answerSet: ['opt2'],
                response: '__Incorrect__. If p were 2, then 5p + 2 would become 12. And that is not equal to 17'
              },
              {
                answerSet: ['opt3'],
                response: '__Correct__.'
              },
              {
                answerSet: ['opt4'],
                response: '__Wrong__. If p were 4, then 5p + 2 would become 22. And that is not equal to 17'
              }
            ]
        },
        {
            id: 'solving-simple-equation',
            kind: 'video',
            time: 13,
            title: 'How to solve a simple equation?',
            instructions: dedent`
            The following video uses a lot of examples to show how simple equations can be solved.
            `,
            videoId: '9DxrF6Ttws4',
        },
        {
            id: 'exercise-4-2',
            time: 14,
            kind: 'image',
            title: 'Solving Exercise 4.2',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            On page 86, the book asks us to solve a lot of simple equations.

            You should try to solve them.

            If you need step by step help, you can see video solutions on [question 1](https://youtu.be/BwP9tRnXYM8), [question 2](https://youtu.be/SZdQ7y_0ZWI), [question 3](https://youtu.be/IkDYMrb_Zeg) and [question 4](https://youtu.be/GPt5pn9tj6E) here.
            `,
            imagePath: '/learning-items/white-space-2.jpeg',
            locked: true
        }, 
    ],
  },
  {
    // @Kunal: each of these chapter ids needs *two* spaces before its number,
    // because this is a hack :P
    id: "  8",
    thumbnailImagePath: "/chapter-thumbnails/maths/ratio-thumbnail.jpeg",
    title: "Comparing Quantities",
    caption: "Chapter 8 — Comparing Quantities",
    description: "Chapter 8 — Comparing Quantities",
    items: [
        {
            id: 'ratio-relevance',
            kind: 'video',
            time: 5,
            title: 'Where will we use ratios in real life?',
            instructions: dedent`
            Ratios are used to fight corruption. They are also used to make buildings. 

            Let us watch this video to see how ratios are used in real life.`,
            videoId: 'AN5hXSjBCPk',
        }, 
        {
            id: "ratios-in-real-life",
            kind: "textResponse",
            time: 2,
            short: true,
            title: "Tweet About Ratios",
            presenterImagePath: "/instructors/kunal2.jpg",
            instructions: dedent`
            It is time now for you to think about where you have seen ratios in real life.

            Once you have the answer, write it in the box below and then tweet your answer with #RatiosInRealLife`,
            hacks: {
              afterBody: {
                preface: "Here is a response from other students who answered this quiz:",
                show: "locked",
                fakePeerResponses: [
                  {
                    studentName: "Sid",
                    imagePath: "/fake-responses/sid.png",
                    response: dedent`Ratios are used in cooking. If a recipe is for 4 people, but you have to make the food for 8 people, you will need ratios. #RatiosInRealLife
                `,
                  },
                  {
                    studentName: "Prabsimar",
                    imagePath: "/fake-responses/prabsimar.png",
                    response: dedent`Ratios are used to solve math problems from the book. #RatiosInRealLife
                `,
                  }
                ],
              },
            },
        },
        {
            id: 'what-are-ratios',
            kind: 'video',
            time: 6,
            title: 'What are ratios?',
            instructions: 'OK, now that we have seen an example of how to use ratios in real life, let us see how we write them using maths.',
            videoId: 'YL40-PuifZg',
        },
        {
            id: 'what-are-equivalent-ratios',
            kind: 'video',
            time: 5,
            title: 'What are equivalent ratios?',
            instructions: dedent`
            Our maths book sometimes gives us two ratios (like 1:2 and 2:3) and asks, are these two ratios equivalent?

            This short video explains how to find the answer to that question.`,
            videoId: 'eb-GHXCqkhQ',
        },
        {
            id: 'equivalent-ratios-test',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 20,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Quiz - Equivalent Ratios',
            instructions: dedent`
              Are the ratios 1:2 and 2:3 equivalent?
            `,
            choices: [
              {
                id: 'opt1',
                text: 'Yes, they are equivalent'
              },
              {
                id: 'opt2',
                text: 'No, they are not equivalent'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: dedent`__Wrong__. 

                  ![equivalent ratios](/learning-items/grade7/maths/equivalent-ratios-2.jpeg)`
              },
              {
                answerSet: ['opt2'],
                response: dedent`__Correct__. 

                ![equivalent ratios](/learning-items/grade7/maths/equivalent-ratios.jpeg)`
              }
            ]
        },
        {
            id: 'exercise-8-1',
            time: 7,
            kind: 'image',
            title: 'Solving Exercise 8.1',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            ![ratios exercise](/learning-items/grade7/maths/ratios-exercise.jpeg)

            At this point in the chapter, the book asks a bunch of questions about ratios.

            You should try to solve them.

            If you need step by step help, you can see [video 1](https://youtu.be/f3a9hYcmWgc), [video 2](https://youtu.be/1PG5uC0HMQU), and [video 3](https://youtu.be/dMcG-dxdRZU) here.
            `,
            imagePath: '/learning-items/white-space-2.jpeg'
        }, 
        {
            id: 'what-is-percentage',
            kind: 'video',
            time: 3,
            title: 'What is a percentage?',
            instructions: dedent`
            Other than ratios, percentages also help us in comparing things. For example, you got 92% marks and your friend got 86% marks. In this example, percentages helped us compare marks.

            Watch this video below to get a full understanding of what it means when we say the word percentage.`,
            videoId: 'Lvr2YsxG10o',
        },
        {
            id: 'converting-decimals-to-percent',
            kind: 'video',
            time: 3,
            title: 'How to convert decimals to percents?',
            instructions: dedent`
            This video shows how we can convert a decimal number like 0.601 to a percentage.`,
            videoId: '5z568fLBQyQ',
        }, 
        {
            id: 'game-convert-decimals-percents',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 40,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Game - Convert Decimals to percents',
            instructions: dedent`
              Convert the following decimals to percents: 0.75, 0.09, 0.2
            `,
            choices: [
              {
                id: 'opt1',
                text: '7.5%, 9%, 20%'
              },
              {
                id: 'opt2',
                text: '75%, 9%, 20%'
              },
              {
                id: 'opt3',
                text: '75%, 0.9%, 20%'
              },
              {
                id: 'opt4',
                text: '75%, 9%, 2%'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. 0.75 is equal to 75%.'
              },
              {
                answerSet: ['opt2'],
                response: '__Correct__. You converted all three decimals into their correct percents.'
              },
              {
                answerSet: ['opt3'],
                response: '__Incorrect__. 0.09 is equal to 9%.'
              },
              {
                answerSet: ['opt4'],
                response: '__Wrong__. 0.2 is equal to 20%.'
              }
            ]
        },
        {
            id: 'converting-percents-to-fractions',
            kind: 'video',
            time: 3,
            title: 'How to convert percents to fractions?',
            instructions: dedent`
            In this video, a young student shows how to convert percents to fractions.`,
            videoId: 'cNrkR4pCPhc',
            startTime: 17,
            endTime: 155,
            locked: true
        },    
    ],
  }, 
  {
    id: "  11",
    thumbnailImagePath: "/chapter-thumbnails/maths/area-thumbnail.jpeg",
    title: "Perimeter and Area",
    caption: "Chapter 11 — Perimeter and Area",
    description: "Chapter 11 — Perimeter and Area",
    items: [
        {
            id: 'area-relevance',
            kind: 'video',
            time: 6,
            title: 'Where will we use area in real life?',
            instructions: dedent`
            Gaurav, who is an administrator in a school in Delhi, tells a story of how he calculates area on a daily basis. 

            Let us listen to him as he explains the connection between area, whitewashing, and taxes.`,
            videoId: 'llCEZ8iq5fE',
        },
        {
            id: "area-in-real-life",
            kind: "textResponse",
            time: 2,
            short: true,
            title: "Tweet about area",
            presenterImagePath: "/instructors/kunal2.jpg",
            instructions: dedent`
            It is time now for you to think about where you have seen area in real life. 

            Once you have the answer, write it in the box below and then tweet your answer with #AreaInRealLife.`,
            hacks: {
              afterBody: {
                preface: "Here are responses from other students who answered this quiz:",
                show: "locked",
                fakePeerResponses: [
                  {
                    studentName: "Sid",
                    imagePath: "/fake-responses/sid.png",
                    response: dedent
                    `Area is used to calculate how much wood is needed when making furniture. #AreaInRealLife`,
                  },
                  {
                    studentName: "Prabsimar",
                    imagePath: "/fake-responses/prabsimar.png",
                    response: dedent
                    `I calculate area to solve the questions in the book. #AreaInRealLife`,
                  }
                ],
              },
            },
          }, 
          {
            id: 'area-formula',
            kind: 'video',
            time: 4,
            title: 'Area of a parallelogram',
            instructions: dedent`
            This short video will teach you how to calculate the area of a parallelogram.

            It will also explain why the area of a parallelogram is base times height.`,
            videoId: 'tueJRbVqMPI',
          },
          {
            id: 'game-solve-area-parallelogram',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 60,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Find the area of a parallelogram',
            instructions: dedent`
              ![parallelogram area](/learning-items/maths/area-parallelogram.jpeg)
              One of the sides of a parallelogram is 4 cm. And the height of the parallelogram is 3 cm. 

              Find the area of this parallelogram.
            `,
            choices: [
              {
                id: 'opt1',
                text: '12 cm'
              },
              {
                id: 'opt2',
                text: '7 square cm'
              },
              {
                id: 'opt3',
                text: '12 square cm'
              },
              {
                id: 'opt4',
                text: 'I do not know'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. The units are incorrect here. The correct answer is 12 square cm.'
              },
              {
                answerSet: ['opt2'],
                response: '__Incorrect__. The formula for area of a parallelogram is base times height. So the correct answer is 12 square cm'
              },
              {
                answerSet: ['opt3'],
                response: '__Correct__.'
              },
              {
                answerSet: ['opt4'],
                response: '__That is OK__. The formula for area of a parallelogram is base times height. So the correct answer is 12 square cm'
              }
            ]
           },
           {
            id: 'game-solve-height-parallelogram',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 60,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Find the height of a parallelogram',
            instructions: dedent`
              ![parallelogram height](/learning-items/maths/height-parallelogram.jpeg)

              The area of a parallelogram is 24 square cm. And its base is 6 cm. 

              Find the height of this parallelogram.

              _Hint_: You can watch [this video](https://www.youtube.com/watch?v=SKe3ItfdzTY) if you get stuck.`,
            choices: [
              {
                id: 'opt1',
                text: '4 square cm'
              },
              {
                id: 'opt2',
                text: '18 cm'
              },
              {
                id: 'opt3',
                text: '4  cm'
              },
              {
                id: 'opt4',
                text: 'I do not know'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. The units are incorrect here. The correct answer is 4 cm.'
              },
              {
                answerSet: ['opt2'],
                response: '__Incorrect__. The formula for area of a parallelogram is base times height. So the correct answer is 4 cm'
              },
              {
                answerSet: ['opt3'],
                response: '__Correct__.'
              },
              {
                answerSet: ['opt4'],
                response: '__That is OK__. The formula for area of a parallelogram is base times height. So the correct answer is 4 cm'
              }
            ]
         },
         {
            id: 'triangle-formula',
            kind: 'video',
            time: 5,
            title: 'Area of a triangle',
            instructions: dedent`
            This short video will teach you how to calculate the area of a triangle.

            It will also explain why the area of a triangle is 1/2 times base times height of the triangle.`,
            videoId: 'drDAnMhM_ic',
          },
          {
            id: 'game-solve-area-triangle',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 60,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Find the area of a triangle',
            instructions: dedent`
              ![triangle area](/learning-items/maths/area-triangle2.jpeg)
              The base of a triangle is 4 cm. And the height of that triangle is 2 cm. 

              Find the area of this triangle.
            `,
            choices: [
              {
                id: 'opt1',
                text: '4 cm'
              },
              {
                id: 'opt2',
                text: '7 square cm'
              },
              {
                id: 'opt3',
                text: '4 square cm'
              },
              {
                id: 'opt4',
                text: 'I do not know'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. The units are incorrect here. The correct answer is 4 square cm.'
              },
              {
                answerSet: ['opt2'],
                response: '__Incorrect__. The formula for area of a triangle is 1/2 times base times height. So the correct answer is 4 square cm'
              },
              {
                answerSet: ['opt3'],
                response: '__Correct__.'
              },
              {
                answerSet: ['opt4'],
                response: '__That is OK__. The formula for area of a triangle is 1/2 times base times height. So the correct answer is 4 square cm'
              }
            ]
          },
         {
            id: 'game-solve-base-triangle',
            kind: 'multipleChoiceResponse',
            time: 1,
            isTimed: 60,
            maxSelected: 1,
            presenterImagePath: '/instructors/kunal2.jpg',
            title: 'Find the base of a triangle',
            instructions: dedent`
              ![triangle base](/learning-items/maths/base-triangle2.jpeg)
              The area of a triangle is 36 square cm. And its height is 3 cm.

              Find the base of this triangle.
            `,
            choices: [
              {
                id: 'opt1',
                text: '24'
              },
              {
                id: 'opt2',
                text: '24 cm'
              },
              {
                id: 'opt3',
                text: '24 square cm'
              },
              {
                id: 'opt4',
                text: '12 cm'
              }
            ],
            automaticResponses: [
              {
                answerSet: ['opt1',],
                response: '__Wrong__. The units are missing here. The correct answer is 24 cm.'
              },
              {
                answerSet: ['opt2'],
                response: '__Correct__.'
              },
              {
                answerSet: ['opt3'],
                response: '__Incorrect__. The units are incorrect here. The correct answer is 24 cm.'
              },
              {
                answerSet: ['opt4'],
                response: '__Wrong__. The formula for area of a triangle is 1/2 times base times height. So the correct answer is 24 cm.'
              }
            ]
         },
         {
            id: 'exercise-11-2',
            time: 15,
            kind: 'image',
            title: 'Solving Exercise 11.2',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            On page 216, the book asks us to solve a lot of area-related questions.

            You should try to solve them.

            If you need step by step help, you can see [video solutions](https://www.youtube.com/watch?v=O0LKXoGxKOk&index=10&list=PL5aQFo5utHded86IX2c3YpN6TpaZLdugJ) for all questions here.
            `,
            imagePath: '/learning-items/white-space-2.jpeg',
         },                    
         {
            id: 'circle-area',
            kind: 'video',
            time: 3,
            title: 'Area of a circle',
            instructions: dedent`
            You probably already know how to calculate the area of a circle. 

            But just in case you forgot, here is a short video that will be a good reminder.`,
            videoId: '2wSOEU_4YjY',
         },
         {
            id: 'circle-area-concentric',
            kind: 'textResponse',
            short: true,
            time: 2,
            isTimed: 99,
            title: 'Calculate the area of a circle',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            ![circle area](/learning-items/maths/concentric-circle-area.jpeg)

            Two circles have the same center. The outer circle has a radius of 10 cm. And the inner circle has a radius of 4 cm.

            What is the area of the shaded blue region?

            Write your answer in the box below.`,
            hacks: {
              afterBody: {
                preface: 'Here is one way to calculate the area of the shaded blue region.',
                show: 'locked',
                feedbackImagePath: '/learning-items/maths/concentric-circle-area-solution.jpeg',
              }
            }
         },
          {
            id: 'exercise-11-3',
            time: 15,
            kind: 'image',
            title: 'Solving Exercise 11.3',
            presenterImagePath: '/instructors/kunal2.jpg',
            instructions: dedent`
            On page 223, the book asks us to solve a lot of area-related questions for circles.

            You should try to solve them.

            If you need step by step help, you can see [video solutions](https://www.youtube.com/watch?v=BvhGLjmdvco&index=18&list=PL5aQFo5utHded86IX2c3YpN6TpaZLdugJ) for all questions here.
            `,
            imagePath: '/learning-items/white-space-2.jpeg',
            locked: true
         },                                
    ],
  },
  {
    id: "  14",
    thumbnailImagePath: "/chapter-thumbnails/maths/symmetry-thumbnail.jpeg",
    title: "Symmetry",
    caption: "Chapter 14 — Symmetry",
    description: "Chapter 14 — Symmetry",
    items: [
        {
        id: 'coming-soon-1n',
        time: 1,
        kind: 'image',
        title: 'Coming Soon',
        presenterImagePath: '/instructors/kunal2.jpg',
        instructions: '<br>',
        imagePath: '/chapter-thumbnails/english/coming-soon-1.jpeg'
      }, 
            
    ],
  },
  {
    id: "  15",
    thumbnailImagePath: "/chapter-thumbnails/maths/solid-shapes-thumbnail.jpeg",
    title: "Visualising Solid Shapes",
    caption: "Chapter 15 — Visualising Solid Shapes",
    description: "Chapter 15 — Visualising Solid Shapes",
    items: [
        {
        id: 'coming-soon-1n',
        time: 1,
        kind: 'image',
        title: 'Coming Soon',
        presenterImagePath: '/instructors/kunal2.jpg',
        instructions: '<br>',
        imagePath: '/chapter-thumbnails/english/coming-soon-2.jpeg'
      }, 
            
    ],
  },


];
