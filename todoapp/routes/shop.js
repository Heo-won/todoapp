var router = require("express").Router();

function 로그인했니(요청, 응답, next) {
  if (요청.user) {
    next();
  } else {
    응답.send("로그인 안하셨는데요?");
  }
}

//여기있는 모든 URL에 적용할 미들웨어
router.use(로그인했니)
// router.use('/shirts', 로그인했니); 내가 원하는 경로만 로그인 설정 가능

router.get("/shirts", function (요청, 응답) {
  응답.send("셔츠 파는 페이지입니다.");
});

router.get("/pants", function (요청, 응답) {
  응답.send("바지 파는 페이지입니다.");
});

//   module.exports = 내보낼 변수명;
//   require9('파일경로')/require('라이브러리명')
module.exports = router;
