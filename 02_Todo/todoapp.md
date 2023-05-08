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



