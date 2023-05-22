import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('Users');

// 고유 ID로 가지고 있는 문서에 주어진 정보를 저장함.
// 사용자 uid 값을 고유 ID로 사용할 예정이므로 add가 아닌 doc, set을 통해 구현
export function createUser({id, displayName, photoURL}) {
  return usersCollection.doc(id).set({
    id,
    displayName,
    photoURL,
  });
}

// 고유 ID로 가지고 있는 문서를 조회해 그 정보를 반환함.
export async function getUser(id) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}
