const data = [{
  number: 1,
  title: 'Food: Where Does It Come From?',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  items: [{
    kind: 'video',
    time: 4,
    title: 'Where does food come from?',
    instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
    videoId: 'zHeWx_AifLs',
    // @kunal: here's how to add a different start time
    // startTime: 10,
  }, {
    kind: 'multipleChoice',
    time: 3,
    title: 'Our food\'s journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    The food that we eat in our homes goes through which of the following places. 

    Select all that apply`,
    choices: ['Farm', 'Bank', 'Subzi Mandi', 'Market']
  }, {
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    // @KUNAL: here's how to add an image
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Use a pencil and paper to draw a picture that shows what you have learned from this video. 

    Then take a picture of it and share it here.`
  }, {
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
      fakePeerResponses: [
        {
          studentName: 'Sid',
          imagePath: '/fake-responses/sid.png',
          response: 'Where does the silverware that I eat with come from?'
        },
        {
          studentName: 'Prabsimar',
          imagePath: '/fake-responses/prabsimar.png',
          response: 'Where does cheese come from?'
        },
        {
          studentName: 'Koushiki',
          imagePath: '/fake-responses/koushiki.png',
          response: 'Where does concrete come from?'
        }
      ]
    }
  }, {
    kind: 'textResponse',
    time: 10,
    title: 'Plan your own research',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Spend a few minutes creating a plan for the things you will do to answer the question above. 

    Write down who you plan to talk to, what websites you plan to visit.`
  }, {
    kind: 'video',
    time: 2,
    title: 'Herbivore, Carnivore, Omnivore',
    instructions: 'Really silly song that will get stuck in your head.',
    videoId: 'wjkqIt_H-ko'
  }]
}, {
  number: 2,
  thumbnailImagePath: '/chapter-thumbnails/chapter-2.jpg',
  title: 'Components Of Food',
  items: [{
    kind: 'video',
    time: 4,
    title: 'Carbohydrates',
    instructions: 'Watch this video to learn more about carbohydrates, sugars and roughage.',
    videoId: '8-A37Y4KuN0'
  }, {
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tweet what you\'ve learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter2',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    From your textbook, read the section 2.2, What Do Various Nutrients Do For Our Body? 

    Then use a pencil and paper to draw a cartoons of what you have learned from that section. Take a picture of that cartoon and upload it here.`,
  },{
    kind: 'video',
    time: 10,
    title: 'Balanced Diet',
    instructions: 'Which foods should we eat more of, and which should we eat less?',
    videoId: 'n-q8-f2unHY'
  },,{
    kind: 'video',
    time: 1,
    title: 'And finally ...',
    instructions: 'Here is a song about Chapter 2, that you can sing on your way to school',
    videoId: '4hHYX2qUJ9U'
  }]
}, {
  number: 3,
  thumbnailImagePath: '/chapter-thumbnails/chapter-3.jpg',
  title: 'Fibre To Fabric',
  items: [{
    kind: 'video',
    time: 4,
    title: 'How I learned to knit',
    instructions: 'Here is a story of how I learned to knit and then learned something interesting about life.',
    videoId: '0EL7M44_Ey0',
  }, {
    kind: 'textResponse',
    time: 10,
    title: 'Tell us your learning story',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Have you ever gone from knowing nothing about a subject to knowing a lot. 

      Tell us about that time. What were you learning? What was difficult about that time? Who helped you?`,
    hacks: {
      wordCloudImagePath: '/prefab-word-clouds/test-cloud.png'
    },
  }, {
    time: 5,
    kind: 'image',
    title: 'Cotton\'s Journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Cotton goes from the field, to fibre, to yarn to fabric. Study the image below to see how cotton shirts are made.',
    imagePath: '/learning-items/cotton-journey.png'
  }, {
    kind: 'video',
    time: 5,
    title: 'How cotton is made',
    instructions: 'This video gives a very thorough overview of how cotton is made from farm to fabric.',
    videoId: 'kH_b3Heo48I',
  }, {
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Use a pencil and paper to draw a picture that shows what you have learned about how cotton fabric is made. Then take a picture of it and share it here.'
  }, {
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: '1u2uRhDeQOI',
  }]
}, {
  number: 4,
  thumbnailImagePath: '/chapter-thumbnails/chapter-4.png',
  title: 'Sorting Materials Into Groups',
  items: [{
    kind: 'video',
    time: 2,
    title: 'Sorting Materials Into Groups',
    instructions: 'We found this chapter to be incredibly boring. Watch to see if you agree.',
    videoId: 'irfJePkITGM',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Select a video title',
    instructions: 'We don’t like the title of this video. If you were to rename the video from its current title “Learning to knit with Peg” to something new, what would you call it.',
    hacks: {
      wordCloudImagePath: '/prefab-word-clouds/test-cloud.png'
    }
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section on “Some Plant Fibres”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: '1u2uRhDeQOI',
  }]
}, {
  number: 5,
  thumbnailImagePath: '/chapter-thumbnails/chapter-5.jpg',
  title: 'Separation of Substances',
  items: [{
    kind: 'video',
    time: 5,
    title: 'How does salt dissolve in water',
    instructions: 'This video highlights how salt is made and how it dissolves in water',
    videoId: 'mBoJ3Y3S4VE',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Summarize what you have learned',
    instructions: 'Use a pencil and paper to draw a picture that shows what you have learned from this video. Then take a picture of it and upload it here.',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: dedent`
    From your textbook, read any 3 sections from the following list
    — Threshing
    - Winnowing
    - Sieving
    - Sedimentation
    - Decantation
    - Filteration
    Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it below.`,
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  number: 6,
  thumbnailImagePath: '/chapter-thumbnails/chapter-6.jpg',
  title: 'Changes Around Us',
  items: [{
    kind: 'video',
    time: 3,
    title: 'The train track behind facebook’s office',
    instructions: 'This video highlights how expansion causes train tracks to buckle',
    videoId: 'ceJivu4wlM0',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 6.2, “Could there be other ways to bring changes”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
  }, {
    kind: 'textResponse',
    time: 10,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  number: 7,
  thumbnailImagePath: '/chapter-thumbnails/chapter-7.jpg',
  title: 'Getting To Know Plants',
  // All the times in this item are completely made-up
  items: [{
    time: 6,
    kind: 'video',
    title: 'Why do plants produce flowers?',
    instructions: 'Why do plants produce flowers? Watch this video to find out.',
    videoId: 'EArZXsRXsj4'
  },
  {
    time: 10,
    kind: 'imageResponse',
    title: 'Reflect',
    instructions: 'Take a picture and drop it here'
  },
  {
    time: 8,
    kind: 'textResponse',
    title: 'Reflect',
    instructions: 'Write down your thoughts about flowers'
  },
  {
    time: 10,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own experiment on flowers. [Click here for the instructions](https://goo.gl/cuf63n)',
    imagePath: '/learning-items/flowers-experiment.jpg'
  }]
}, {
  number: 8,
  thumbnailImagePath: '/chapter-thumbnails/chapter-8.png',
  title: 'Body Movements',
  items: [{
    kind: 'video',
    time: 7,
    title: 'What keeps our bones together',
    instructions: 'Watch to learn more about the hinge joint, the ball and socket joint, ligaments and humility.',
    videoId: 'x4k1JP8LsNY',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 6.2, “Could there be other ways to bring changes”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
  }, {
    kind: 'textResponse',
    time: 10,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  number: 11,
  thumbnailImagePath: '/chapter-thumbnails/chapter-11.jpg',
  title: 'Lights, Shadows And Reflections',
  items: [{
    kind: 'video',
    time: 3,
    title: 'Can shadows be colourful?',
    instructions: 'Watch this video to learn if a shadow can be blue, green, yellow and other colours.',
    videoId: 'MKW3uUM9xDU',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter11',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 11.4, “Mirrors and Reflections”. Then use a pen and pencil to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.',
  }, {
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'lo9naFiH778',
  }, {
    kind: 'textResponse',
    time: 10,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  number: 13,
  thumbnailImagePath: '/chapter-thumbnails/chapter-13.jpg',
  title: 'Fun With Magnets',
  // All the times in this item are completely made-up
  items: [{
    time: 4,
    kind: 'video',
    title: 'When do magnets misbehave?',
    instructions: 'Heat has something to do with magnets not behaving as usual. Watch this video to find out.',
    videoId: 'yjSNU62kxZo'
  }, {
    time: 6,
    kind: 'textResponse',
    title: 'Share what you have learned',
    instructions: 'What did you learn? Discuss your response with a friend and write it here.'
  }, {
    time: 10,
    kind: 'imageResponse',
    title: 'Pick question to investigate and share',
    instructions: dedent`
      1) Pick a question from the link that you want to learn more about from [here](http://goo.gl/e2acXh).
      2) Write it on a piece of paper; paste it on a wall.
      3) Take a picture and upload here.`
  }, {
    time: 15,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own curie point experiment. [Click here for the instructions](http://goo.gl/LWKF9o).',
    imagePath: '/learning-items/13-magnets-experiment.jpg'
  }]
}, {
  number: 14,
  thumbnailImagePath: '/chapter-thumbnails/chapter-14.jpg',
  title: 'Water',
  items: [{
    kind: 'video',
    time: 3,
    title: 'How to convert seawater to drinking water?',
    instructions: 'Watch this video to learn how evaporation helps purify water.',
    videoId: 'yeoN0Pmg_tI',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  number: 15,
  thumbnailImagePath: '/chapter-thumbnails/chapter-15.png',
  title: 'Air Around Us',
  items: [{
    kind: 'video',
    time: 2,
    title: 'Composition of air',
    instructions: 'What do we breathe in? What do we breathe out? Watch to find out.',
    videoId: 'TA2s6uo_vTQ',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Let’s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  number: 16,
  thumbnailImagePath: '/chapter-thumbnails/chapter-16.jpg',
  title: 'Garbage In, Garbage Out',
  items: [{
    kind: 'video',
    time: 3,
    title: 'Landfill in Hawaii and New Delhi',
    instructions: 'This video highlights how landfills work on different sides of the earth',
    videoId: 'GXogi1FV_Iw',
  }, {
    kind: 'textResponse',
    time: 5,
    title: 'Select a video title',
    instructions: 'We don’t like the title of this video. If you were to rename the video from its current title “Landfill in Hawaii and New Delhi” to something more appropriate, what would it be? ',
  }, {
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section on Vermicomposting. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    kind: 'textResponse',
    time: 15,
    title: 'Teach a friend',
    instructions: 'Find a friend that you can teach what you have learned in this chapter. Tell them everything you know, answer their questions. Then write down your experiences on what happened here.',
  }]
}, {
  // causes it to not show up on the homepage
  hidden: true,
  number: 999,
  thumbnailImagePath: '/chalees-min-heart.png',
  title: 'Test lesson',
  items: [{
    kind: 'multipleChoice',
    time: 2,
    title: 'Multiple Choice Example 1',
    instructions: 'Select all that apply',
    choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  }, {
    kind: 'multipleChoice',
    time: 2,
    title: 'Multiple Choice Example 2',
    instructions: 'Select only one',
    maxSelected: 1,
    choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] 
  }, {
    kind: 'multipleChoice',
    time: 3,
    title: 'Multiple Choice Example 3',
    instructions: 'Select up to two',
    maxSelected: 2,
    choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] 
  }]
}];

export default data;
