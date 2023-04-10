export class UserInfo {
  constructor(profileNameSelector, profileCareerSelector) {
    this.name = profileNameSelector;
    this.career = profileCareerSelector;
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      career: this.career.textContent,
    };
  }
  setUserInfo(name, career) {
    this.name.textContent = name;
    this.career.textContent = career;
  }
}
