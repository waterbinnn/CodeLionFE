const su = {
  name: "수빈",
  nickname: "waterbin",
  velog: "https://velog.io/@ewaterbin",
  github: "https://github.com/waterbinnn",
  canBreath: function () {
    console.log("숨쉬는 중");
  },
  coding: function (commit) {
    commit.green();
  },
};
const commit = {
  day: 1,
  green: function () {
    this.day++;
  },
};

su.canBreath();
su.coding(commit);
