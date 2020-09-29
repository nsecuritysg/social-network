import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Have you had a sex yesterday?', likesCount: 45 },
        { id: 4, message: 'Yes, it was cool!!!', likesCount: 65 },
        { id: 5, message: "I'm glad for you, man", likesCount: 3 }
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
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
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
