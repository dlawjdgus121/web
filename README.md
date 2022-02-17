# 

## 개발 기간

2022.02.04 - 2022.02.09

## 사용 기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"/>

## 기능

- [x] 1. 게시글
  - [x] 목록 가져오기
  - [x] 추가하기 (+이미지 업로드하기)
  - [x] 삭제하기
  - [x] 수정하기
- [ ] 2. 좋아요
  - [ ] 게시글에 좋아요하기
  - [ ] 게시글에 좋아요 취소하기
- [x] 3. 회원가입하기
- [x] 4. 로그인하기
- [x] 5. 파이어베이스 or S3로 배포!

## 페이지별 상세페이지별 상세

1. 회원가입 페이지

   - [x] 이메일 형식 체크
   - [x] 비밀번호 체크

2. 로그인 페이지

   - [x] 이메일, 패스워드 미기입 시 로그인 버튼 활성화 막을 것

3. 메인 페이지(게시글 목록 페이지)

   - [x] 게시글 목록 노출
   - [x] 게시글 하나는 작성자, 작성 시간, 이미지 미리보기, 텍스트 내용으로 구성
   - [x] 게시글 하나를 클릭 시, 게시글 상세 페이지로 이동

4. 글 작성 페이지
   - [x] 레이아웃 선택 버튼
     - [x] 1. 3가지 레이아웃 중 선택하도록 한다.
       - 이미지가 오른편에, 텍스트는 왼편에 위치한 레이아웃
       - 이미지가 왼편에, 텍스트는 오른편에 위치한 레이아웃
       - 텍스트가 위에, 이미지는 아래에 위치한 레이아웃
     - [x] 2. 레이아웃 선택 시, 게시글 레이아웃(모양새)대로 보이도록 한다.
     - [x] 3. **텍스트, 이미지 중 입력 안된 게 있다면 게시글 작성 버튼 비활성화**
     - [x] 4. 작성 완료 시 메인 페이지로 이동
5. 게시글 상세 페이지

   - [x] 게시글 레이아웃에 맞춰 이미지, 텍스트 위치 조절해서 노출

6. 추가 기능

   - [x] 무한 스크롤
   - [ ] 게시글 중 좋아요버튼(분홍색 하트 버튼)을 누르면 [좋아요]를 +1한다. 다시 누르면 분홍색 하트가 회색 하트가 되고 좋아요가 -1개 된다.
   - [ ] 이미지 여러장 업로드 (상세 페이지에서는 슬라이더로 이미지 넘겨가며 보도록 처리)
   - [ ] 알림 기능 만들기 (+알림페이지도 추가할 것!)
   - [ ] 좋아요 눌렀을 때 게시글 위로 하트 이미지가 나타났다 사라지게 해보기

## 코드 개선 사항

- [ ] onClick 대신 onSubmit을 사용해서 엔터를 해도 버튼이 눌리게 수정
- [ ] 이미지 잘릴 때 어떻게 사진을 보여줄지..
- [ ] 파이어베이스에서 게시글 들고 올 때 정렬해서 가져오기
- [ ] px를 vw, vh로 바꿔서 반응형시 깨지는 부분 수정


## 결과

[Smiley](http://hanghae99-react-magazine.s3-website.ap-northeast-2.amazonaws.com/)
|![무한스크롤](https://blog.kakaocdn.net/dn/TMZIK/btrsWLuyIqP/kqet0Dt7gmHypX4oB2nKFk/img.gif)|![게시글 작성](https://blog.kakaocdn.net/dn/T7QCv/btrsXsH4UkU/AutuiVUXzao21i8fK90n0k/img.gif)|
|:---:|:---:|
