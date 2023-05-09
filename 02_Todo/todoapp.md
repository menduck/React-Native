# 새롭게 안 부분

## 1. SafeAreaView

<p align="center"><img src="https://user-images.githubusercontent.com/39366835/236848280-79d52150-298b-4337-85de-766c6cb08d17.jpg"></p>
[사진 출처: 사진=폰아레나]

- 전 영역 경계 내에서 콘텐츠를 렌더링 하는 것
- 현재 iOS 버전 11 이상이 설치된 iOS 기기에만 적용
- 저 카메라 부분이 아래로 나와있는 모양을 노치 디자인이라고 함.
- SafeAreaProvider 내부에 SafeAreaView가 위치해야 함.
  - 여러 화면을 다루는 앱을 만들 때는 App 컴포넌트 JSX에서 가장 바깥부분에서 딱 한 번만 사용하고, 다른 화면에선 SafeAreaView 컴포넌트 하나만 사용하면 됨.

# 버튼을 눌렀을 때 효과주는 법

- TouchableHighlight: 터치했을 때 배경색이 변경
- TouchableNativeFeedback: 안드로이드에서 터치했을 때 물결 효과를 보여줌(iso에선 오류 발생 -> 부분 렌더링 필요)
  - 원형을 터치했을 경우 물결 효과가 원의 바깥까지 나타나기 때문에 따로 설정해줘야 함.
    - View 컴포넌트로 감싸고, 해당 컴포넌트에 borderRadius와 Overflow 스타일 설정함
- TouchableOpacity: 터치했을 때 투명도를 조정함. 투명도의 기본값은 0.2
- TouchableWithoutFeedBack: 터치했을 때 아무 효과 없음

# Platform.select

- 객체를 사용해 운영 체제별로 어떤 속성을 적용할지 더욱 명시적임
- 삼항연산자보다 가독성이 좋음

```js
...생략
{Platform.select({ios: '', android: undefined})}

// undefined로 설정하고 싶으면 생략 가능
{Platform.select({ios: '')}
```

# 터치 영역을 늘리는 법

- paddingHorizontal, paddingVertical설정하기
  - padding을 설정하면 터치 위치가 텍스트에서 조금 빗나가도 터치 가능

```js
// 좌우측 padding 값을 설정
paddingHorizontal: 16

// 아래 코드와 같은 의미
paddingLeft: 16,
paddingRight: 16,

// 상하측 padding 값을 설정
paddingVertical: 16

// 아래 코드와 같은 의미
paddingTop: 16,
paddingBottom: 16,
```

# 컴포넌트 사이 구분선

- ItemSeparatorComponent Props를 지정해 컴포넌트 사이에 구분선을 설정할 수 있음.

```js
    <FlatList ItemSeparatorComponent={() => <View style={styles.separator} />}
```

# Alert

- 매개변수
  - 제목: 필수요소 , 빈 문자열이거나 null이면 제목을 숨김
  - 내용
  - 버튼 배열
    - style
      - cancel: 취소를 의미, 폰트가 두껍게 됨.
      - default: 기본, 기본 버튼
      - destructive: 삭제

```js
const remove = () => {
    // 제목, 내용, 버튼배열, 옵션 객체 순서
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      // Alert 바깥 영역을 터치하거나 Back 버튼을 눌렀을 때 Alert가 닫힘
      {cancelable: true, onDismiss: () => {}},
    );
```

# 객체와 배열 불변성

- 불변성을 지켜야하는 이유
  - 컴포넌트의 렌더링 성능을 최적화하기 위해서
- 컴포넌트에 진짜 변화가 발생했을 때만 리렌더링 하도록 최적화해야 함
  - 이전 컴포넌트가 들고 있던 Props와 새로 받아올 Props를 비교하는 과정을 보고 판단함.
  - 이 과정에서 불변성을 유지하는 것이 중요

## 배열의 불변성을 지키는 방법

- 불변성을 유지하면서 배열에 새로운 항목을 추가/삭제수정

### 새로운 항목 추가

```js
// 1. spread 연산자
const numbers = [0, 1, 2, 3];
const nextNumbers = [...numbers, 4];

// 2. 내장함수 concat
const numbers = [0, 1, 2, 3];
const nextNumbers = numbers.concat(4, 5);
```

### 항목 제거

```js
// 1. filter
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const filtered = numbers.filter((number) => number > 0);
console.log(filtered); // [1, 2, 3]

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const nextItems = items.filter((item) => item.id != 3);
console.log(nextItems); // [{id: 1}, {id: 2}, {id: 4}]

// 2. 특정 값 삭제 -> index 삭제

// 아래 코드는 0이 여러 개일때 특정 값을 삭제하지 못함. => index로 접근
const filtered_target = numbers.filter((number) => number !== 0);
console.log(filtered_target); // [-3, -2, -1, 1, 2, 3]

const filtered_target = numbers.filter((number, i) => i !== 3);
console.log(filtered_target); // [-3, -2, -1, 1, 2, 3]
```

### 항목 수정

```js
// 1. map
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const nextNumbers = numbers.map((number) => (number === 0 ? 10 : number));
console.log(nextNumbers); // [-3, -2, -1, 10, 1, 2, 3];

// 1-1 특정 값 삭제
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const nextNumbers = numbers.map((number) => (number === 3 ? 10 : number));
console.log(nextNumbers); // [-3, -2, -1, 10, 1, 2, 3];

// 객체
const items = [
  { id: 1, text: '안녕' },
  { id: 2, text: '하이' },
  { id: 3, text: '잘가' },
  { id: 4, text: '바이' },
];

const nextItems = items.map(item => item.id === 2 ? {...item, text: 수정} : item);
console.log(nextItems)
  // { id: 1, text: '안녕' },
  // { id: 2, text: '수정' },
  // { id: 3, text: '잘가' },
  // { id: 4, text: '바이' },
```
