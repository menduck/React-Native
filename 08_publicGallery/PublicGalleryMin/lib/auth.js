import auth from '@react-native-firebase/auth';

export function signIn({email, password}) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}) {
  return auth().createUserWithEmailAndPassword(email, password);
}
// 현재 사용자의 정보를 파라미터로 받아노는 특정 콜백 함수를 등록하는 함수 (앱 가동시, 로그인 상태가 변경될 시)
export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

// Firebase에서 제공하는 컴포넌트를 바로 사용하지 않고 함수로 한번 더 감싸는 이유?
// - 추후 Firebase를 사용하지 않고 다른 방식으로 인증할 경우, 코드를 쉽게 전환 가능
