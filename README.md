| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그 수정                                                    |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |

## 전략

- 폴더/파일명
  - 폴더 안에 index.js가 있으면 대문자 /없으면 소문자
  - **CamelCase**로 작명한다.
  - 디렉토리자체가 react 컴포넌트가 바로들어 있는 폴더라면 폴더이름을 **대문자**로 시작할 것,
  - 직접적으로 바로 react컴포넌트가 들어있지 않은 간접적인 관계의 폴더라면 **소문자 단수**로 - 표기
  - 모든 파일명은 대문자 시작 **CamelCase**
  - HTML/CSS
    - 클래스명 : boarder-none
    - 아이디 : boarderNone
    - 변수명 : boarderNone
    - 함수명 : BoarderNone
- export
  - index.js에 몰아서 한번에 export 하기 → default X
  - 일단 함수명 옆에 export하는걸로
- styled-componet 사용하되, 중복되는 부분은 SCSS로 관리
- 공통적인 부분(버튼이나, 라디오버튼,alert, select버튼 등)은 MUI 적극 활용
- 백엔드(서버)와 통신은 Axios로 한 번 해보는걸로
