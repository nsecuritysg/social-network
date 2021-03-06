const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    {
      id: 1,
      message: 'Hi',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-3-avatar-2754579_120516.png'
    },
    {
      id: 2,
      message: 'How is your kamasutra?',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-7-avatar-2754582_120519.png'
    },
    {
      id: 3,
      message: 'Yo',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-3-avatar-2754579_120516.png'
    },
    {
      id: 4,
      message: 'Yo2',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-7-avatar-2754582_120519.png'
    },
    {
      id: 5,
      message: 'Yo1',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-3-avatar-2754579_120516.png'
    }
  ],
  dialogs: [
    {
      id: 1,
      name: 'Dimych',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-3-avatar-2754579_120516.png'
    },
    {
      id: 2,
      name: 'Andrey',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-7-avatar-2754582_120519.png'
    },
    {
      id: 3,
      name: 'Sveta',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-4-avatar-2754580_120522.png'
    },
    {
      id: 4,
      name: 'Sasha',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-11-avatar-2754576_120520.png'
    },
    {
      id: 5,
      name: 'Victor',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-2-avatar-2754578_120514.png'
    },
    {
      id: 6,
      name: 'Valera',
      icon:
        'https://icon-icons.com/icons2/1879/PNG/32/iconfinder-12-avatar-2754577_120517.png'
    }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
