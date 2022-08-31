# AlphabetA 기업과제

# 요구사항

## **[네비게이션]**

1. 모든 페이지에서 접근할 수 있는 네비게이션을 구현해주세요.
2. 해당 네비게이션 맨 좌측에는 로고가 있습니다.(멋진 이미지 로고가 아니어도 됩니다. 텍스트도 가능해요)
3. 해당 네비게이션 맨 우측에는 장바구니 페이지로 이동할 수 있는 버튼이 있습니다.(멋진 이미지 로고가 아니어도 됩니다. 텍스트도 가능해요)

## **[메인 페이지]**

1. 사용자가 서비스의 메인페이지에 접속하면 카드형태의 상품 목록들을 확인할 수 있습니다.
   1. 해당 카드에는 `상품의 이미지`, `상품 제목`, `상품 상세설명`, `가격`, `업로드 날짜` 가 있습니다.
   2. 상품 상세설명의 길이가 긴 경우 상품 카드의 레이아웃이 변형되지 않도록 처리해보세요.
   3. 상품 이미지의 해상도는 모두 다릅니다. 이런 경우 부모의 크기에 알맞게 보여지도록 해주세요.
   4. 업로드 날짜는 2022-01-01 형식으로 보여주세요.
2. 카드는 `한 줄에 4개`씩 보여줍니다.

## **[상품 상세 페이지]**

1. 하나의 상품을 클릭하면 해당 상품의 상세페이지로 이동합니다.

   1. 상세페이지에는 메인페이지에 있는 상품카드 내용(`상품의 이미지`, `상품 제목`, `상품 상세설명`, `가격`, `업로드 날짜`)을 보여줍니다.
   2. 상세페이지에는 `구매하기 버튼`과 `장바구니에 담기` 버튼이 있습니다.
   3. `장바구니에 담기` 버튼을 클릭 시 장바구니에 상품의 정보가 담기고, 사용자에게 장바구니에 상품이 담겼다는 피드백을 줍니다.`(alert 제외)` → 검색 키워드 : toast popup, modal popup
   4. 상품 이미지의 해상도는 모두 다릅니다. 이런 경우 부모의 크기에 알맞게 보여지도록 해주세요.
   5. 업로드 날짜는 2022-01-01 형식으로 보여주세요.

## **[장바구니 페이지]**

1. 사용자가 장바구니에 담았던 상품목록을 `테이블 형태`로 확인할 수 있습니다.
2. 상품목록 하나의 row에는 `상품의 이미지`, `상품 제목`, `상품 상세설명`, `가격`, `업로드 날짜` 정보를 보여줍니다.
   1. 상품 이미지의 해상도는 모두 다릅니다. 이런 경우 부모의 크기에 알맞게 보여지도록 해주세요.
   2. 업로드 날짜는 2022-01-01 형식으로 보여주세요.
3. 상품목록 row를 클릭하면 `해당 상품 상세페이지로 이동`합니다.
4. 테이블안에서 체크박스를 통해 담긴 상품목록들을 체크하고 해제할 수 있습니다.
5. `구매하기 버튼`을 만들고 구매하기 버튼 클릭 시 테이블에 체크되어 있는 상품정보가 담긴 `객체를 콘솔에 출력`합니다.

## 🏅 추가 해결 과제 (+Alpha)

1. 메인 페이지에 진입 시 상품 카드가 최초 10개만 보여지고 나머지 데이터들은 무한 스크롤 될 수 있도록 구현해주세요.
2. 장바구니 페이지의 상품목록이 담긴 테이블을 페이지 네이션으로 구현해주세요.
   1. 각 페이지별 담을 수 있는 데이터 수는 10개 입니다.
3. 구현한 모든 페이지가 반응형 또는 적응형으로 동작할 수 있도록 구현해주세요.
   1. UI의 형태는 어떤 형태든 관계 없지만 `모바일`, `태블릿`, `데스크 탑` 각 기기에서 최적화 된 UI면 더욱 좋습니다.