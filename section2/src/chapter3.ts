import { read } from "fs";

let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// id 상태는 undefind 로 전환된다.
user = {
  name: "홍길동",
};

let dog: {
  name: string;
  color: string;
}= {
  name: "돌돌이",
  color: "brown",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
