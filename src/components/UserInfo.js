export class UserInfo {
  constructor(profileName, profileCareer, avatar) { 
    this._name = profileName;
    this._about = profileCareer;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }
  setUserInfo({name, about, avatar, id}) {
    this._avatar.src = avatar;
    this._name.textContent = name;
    this._about.textContent = about;
    this._id = id;
  }
  getUserAvatar(item) {
    this._avatar.src = item.link;
  }
  // getUserId(result) {
  //   return this._id = result._id;
  // }
}
