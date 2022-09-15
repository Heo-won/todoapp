var router = require('express').Router();

router.get('/sports', function(요청, 응답) {
    응답.send('스포츠 게시판');
  });
  
router.get('/game', function(요청, 응답) {
    응답.send('게임 게시판');
  });

//   module.exports = 내보낼 변수명;
//   require9('파일경로')/require('라이브러리명')
  module.exports = router;
