# Dinobase js sdk

간단한 dinobase js sdk입니다.

## 사용

웹에서 바로 사용할 수 있습니다.

```html
<script src="./src/index.js" type="module"></script>
```

```js
import { dinobase } from "https://esm.sh/dinobase@0.1.1";

export const dinobase = dinobase("http://localhost:3000");
```

npm을 사용할 경우 다음과 같이 할 수 있습니다.

```js
import { dinobase } from "dinobase";

export const dinobase = dinobase("http://localhost:3000");
```

## 예시

### 회원가입

```js
dinobase.auth.signUp("username", "password");
```

- 회원가입 후 바로 로그인 되지 않습니다.

### 로그인

```js
dinobase.auth.signIn("username", "password");
```

### 로그아웃

```js
dinobase.auth.logout();
```

### sheet 생성

```js
const uuid = dinobase.note("note").insert({
  author: "uuid",
  content: "hello",
});
```

- sheet를 삽입하고 삽입된 sheet의 uuid를 저장합니다.

### sheet 업데이트

```js
dinobase.note("note").update("uuid", {
  content: "hola",
});
```

### sheet 가져오기

uuid로 sheet의 데이터를 가져옵니다.

```js
dinobase.note("note").getOne("uuid");
```

### 검색

```js
dinobase.note("note").search("author", {
  value: "admin",
});
```

이는 다음과 같은 데이터를 반환합니다.

```json
{
  "data": [
    "c8565726-52f9-40b2-94a6-a27804ba2a55",
    "ab33af39-6f98-4921-98ca-f388f5a05e07",
    "89ca1245-1b72-465a-86fb-5c73095f328c"
    ...
  ],
  "cursor": ""
}
```

cursor를 사용해 pagenation을 구현할 수 있습니다.

먼저, limit을 설정합니다.

```js
dinobase.note("note").search("created_at", {
  limit: 2,
});
```

이는 다음과 같은 데이터를 반환합니다.
(data는 내림차순으로 정렬됩니다)

```json
{
  "data": [
    "c8565726-52f9-40b2-94a6-a27804ba2a55",
    "ab33af39-6f98-4921-98ca-f388f5a05e07"
  ],
  "cursor": "AjIxMTQ0AAIwNWE0ODE3Ny0zZTu4RTMwNtYWZkOS1jY2ZmN2E3N2Y2NjUA"
}
```

cursor를 option에 넣어줍니다.

```js
dinobase.note("note").search("author", {
  limit: 2,
  cursor: "AjIxMTQ0AAIwNWE0ODE3Ny0zZTu4RTMwNtYWZkOS1jY2ZmN2E3N2Y2NjUA",
});
```

더 이상 sheet가 없다면 반환되는 cursor의 값은 빈 문자열입니다.

```json
{
  "data": [
    "d1a19b34-1359-4d09-abe3-137258b1417c",
    "b6d5046a-394e-4371-9c16-a43f4042f203"
  ],
  "cursor": ""
}
```

data에 있는 uuid를 이용해 값을 가져올 수 있습니다.

```js
dinobase.note("note").getOne("uuid");
```

### sheet 삭제

```js
dinobase.note("note").delete("uuid");
```
