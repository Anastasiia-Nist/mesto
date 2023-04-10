export class UserInfo {
  constructor(profileNameSelector, profileCareerSelector) {
    this._name = profileNameSelector;
    this._career = profileCareerSelector;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      career: this._career.textContent,
    };
  }
  setUserInfo(name, career) {
    this._name.textContent = name;
    this._career.textContent = career;
  }
}
