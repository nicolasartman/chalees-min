export default [
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
];
