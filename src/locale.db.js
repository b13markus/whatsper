const users = [
  {
    firstName: 'Oleksandr',
    secondName: 'Ovechkin',
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    phone: '+111 22-333-4444',
    email: 'Oleksandr@gmail.com',
    isManager: true,
    chatsCount: [
      {
        name: 'taken',
        count: 4
      },
      {
        name: 'pending',
        count: 2
      },
      {
        name: 'all chats',
        count: 11
      },
      {
        name: 'with bot',
        count: 1
      },
      {
        name: 'solved',
        count: 8
      },
      {
        name: 'other',
        count: 1
      },
    ],
    chats: [
      {
        firstName: 'Sam',
        secondName: 'Samuel',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+972 50-327-0282',
        email: 'SamSamuel@gmail.com',
        status: 'pending',
        isManager: false,
        chat: [
          {
            id: 1,
            author: 'Oleksandr',
            message: 'Hi Sam! How are you?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'Sam',
            message: 'Hello Oleksandr!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Sam',
            message: 'I am fine. Thanks',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'Sam',
            message: 'What about you?',
            timestamp: new Date().getTime()
          }
        ]
      },
      {
        firstName: 'John',
        secondName: 'Lee',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+922 40-323-0556',
        email: 'JohnLee@gmail.com',
        status: 'taken by',
        isManager: false,
        chat: [
          {
            id: 1,
            author: 'Oleksandr',
            message: 'Hi John! How are you?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'Sam',
            message: 'Hello Oleksandr!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Sam',
            message: 'I am fine. Thanks',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'Sam',
            message: 'How are you?',
            timestamp: new Date().getTime()
          }
        ]
      },
      {
        firstName: 'Sarah',
        secondName: 'Parker',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
        phone: '+972 10-111-2256',
        email: 'sarahParker@gmail.com',
        status: 'other',
        isManager: false,
        chat: [
          {
            id: 1,
            author: 'Oleksandr',
            message: 'Hello Sarah! How are you?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'Sarah',
            message: 'Hi Oleksandr!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Sarah',
            message: 'I am fine. Thanks',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Sarah',
            message: 'What about you?',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'Oleksandr',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            timestamp: new Date().getTime()
          },
        ]
      },
      {
        firstName: 'Tim',
        secondName: 'Jones',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+972 11-222-4444',
        email: 'timJones@gmail.com',
        status: 'solved',
        isManager: false,
        chat: [
          {
            id: 1,
            author: 'Oleksandr',
            message: 'Hi Tim! How are you?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'Tim',
            message: 'Hello Oleksandr!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Tim',
            message: 'I am fine. Thanks',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'Oleksandr',
            message: 'I am fine too:)',
            timestamp: new Date().getTime()
          }
        ]
      },
      {
        firstName: 'Miley',
        secondName: 'Jons',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+972 88-666-1111',
        email: 'mileyJons@gmail.com',
        status: 'pending',
        isManager: false,
        chat: [
          {
            id: 1,
            author: 'Oleksandr',
            message: 'Hi Miley! How are you?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'Miley',
            message: 'Hello Oleksandr!',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: 'Miley',
            message: 'I am fine. Thanks',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: 'Miley',
            message: 'What about you?',
            timestamp: new Date().getTime()
          },
          {
            id: 5,
            author: 'Miley',
            message: '???',
            timestamp: new Date().getTime()
          }
        ]
      },
    ]
  },
]

const labels = [
  {
    label: 'New clients',
    color: '#5AEAE1',
  },

  {
    label: 'Friends',
    color: '#70E34B',
  },
  {
    label: 'Family',
    color: '#FF7F76',
  },
  {
    label: 'Jobs',
    color: '#B98DFF',
  },
  {
    label: 'Other',
    color: '#FFDD66',
  },
]


export {users, labels}