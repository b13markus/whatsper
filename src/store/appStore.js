import { observable } from 'mobx';

class appStore {
  @observable usersName = ['New User', 'New User2']
}

let store = new appStore;

export default store;