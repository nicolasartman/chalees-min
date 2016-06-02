const data = {
  '1': {
    items: [{
      kind: 'video',
      time: 4,
      title: 'Where does food come from?',
      instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
      videoId: 'zHeWx_AifLs'
    }, {
      kind: 'imageResponse',
      time: 10,
      title: 'Share what you have learned',
      // @KUNAL: here's how to add an image
      // presenterImagePath: '/test.jpg',
      instructions: 'Use a pencil and paper to draw a picture that shows what you have learned from this video. Then take a picture of it and share it here.'
    }, {
      kind: 'textResponse',
      time: 6,
      short: true,
      title: 'Pick a question to investigate',
      instructions: dedent`
      At the end of the video, we present a few questions for you to think about. Here they are again:
      - Where does water come from?
      - Where does petrol come from?
      - Where does snot come from?
        
      Select a question you want to think about more. You can pick from the list above or think of a new question of your own.
        
      Then write it in the box below.`,
      useFakePeerResponses: true
    }, {
      kind: 'textResponse',
      time: 10,
      title: 'Conduct your own research',
      instructions: 'Spend a few minutes doing research on the question you selected above. Write down the summary of your research below.'
    }]
  },
  '2': {
    items: [{
      kind: 'video',
      time: 4,
      title: 'Carbohydrates',
      instructions: 'Watch this video to learn more about carbohydrates, sugars and roughage.',
      videoId: '8-A37Y4KuN0'
    }, {
      kind: 'textResponse',
      time: 5,
      title: 'Let’s think about the video',
      instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter2',
    }, {
      kind: 'imageResponse',
      time: 15,
      title: 'Read and Draw',
      instructions: 'From your textbook, read the section on either Proteins or Fats. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
    }]
  },
  '3': {
    items: [{
      kind: 'video',
      time: 4,
      title: 'Learning to knit',
      instructions: 'Watch this video to learn more about knitting and life.',
      videoId: '0EL7M44_Ey0',
    }, {
      kind: 'textResponse',
      time: 5,
      title: 'Select a video title',
      instructions: 'We don’t like the title of this video. If you were to rename the video from its current title “Learning to knit with Peg” to something new, what would you call it.',
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
  },
  '5': {
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
  },
  '6': {
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
  },
  '7': {
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
        src: 'http://cdn.instructables.com/FA6/OOPP/I916FK0J/FA6OOPPI916FK0J.MEDIUM.jpg'
      }
    ]
  },
  '11': {
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
  },
  '13': {
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
      src: 'https://d30su0b7sry5gh.cloudfront.net/repo/dyOJMXVz/images/S1gqnvfC.jpg'
    }]
  },
  '14': {
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
  },
  '16': {
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
  }
}

export default data;
