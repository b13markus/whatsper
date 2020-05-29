import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class AppStore {
  @observable user = 's';

  @action getUser() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      if(json.results) {
        this.setUser(json.results);
      }
    })
  }

  @action setUser(results) {
    this.user = results[0].name.first
  }
};

let store = new AppStore();

export default store;