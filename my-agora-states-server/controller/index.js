const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // filter & find 차이점 a = [1, 2, 3, 4, 5]  => 짝수filter = [2, 4], 짝수find = 2, 4
    let discussion_id = discussionsData.find(discussion => discussion.id === Number(id)) // id가 string으로 나와서 숫자로 형변환 해줘야함
    if(discussion_id) {
      return res.status(200).json(discussion_id);
    } else {
      return res.status(404).send("404");
    }
  },
};

module.exports = {
  discussionsController,
};