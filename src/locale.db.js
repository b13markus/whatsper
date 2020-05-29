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
        text: 'hello'
      },
      {
        firstName: 'John',
        secondName: 'Lee',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+922 40-323-0556',
        email: 'JohnLee@gmail.com',
        status: 'taken by',
        isManager: false,
        text: 'Hi'
      },
      {
        firstName: 'Sarah',
        secondName: 'Parker',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
        phone: '+972 10-111-2256',
        email: 'sarahParker@gmail.com',
        status: 'other',
        isManager: false,
        text: 'How are you'
      },
      {
        firstName: 'Tim',
        secondName: 'Jones',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+972 11-222-4444',
        email: 'timJones@gmail.com',
        status: 'solved',
        isManager: false,
        text: 'Thanks'
      },
      {
        firstName: 'Miley',
        secondName: 'Jons',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        phone: '+972 88-666-1111',
        email: 'mileyJons@gmail.com',
        status: 'pending',
        isManager: false,
        text: 'See you tomorrow'
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