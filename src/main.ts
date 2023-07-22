import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import TodoDeleteButton from "./components/TodoDeleteButton.vue";

const app = createApp(App);

/**************************
 * アプリの設定
 **************************/

// アプリケーションのインスタンスは、.config オブジェクトを公開し、いくつかのアプリケーションレベルのオプションを設定することができます。
// たとえば、すべての子孫コンポーネントから発生したエラーを捕捉するアプリケーションレベルのエラーハンドラーを定義するには次のとおりです
app.config.errorHandler = (err) => {
  console.error(err);
};

// アプリケーションのインスタンスは、アプリ用のアセットを登録するいくつかのメソッドもいくつか用意しています。
// たとえば、次のようなコンポーネントの登録するメソッドがあります
// このメソッドは、TodoDeleteButton をこのアプリケーション内でならどこでも使用できるようにしてくれます
app.component("TodoDeleteButton", TodoDeleteButton);

// アプリがマウントされる前に、アプリの設定がすべて適用されていることを確認しましょう！
app.mount("#app");

/**************************
 * 複数アプリケーションもマウントできる
 **************************/

// const app1 = createApp({
//   /* ... */
// });
// app1.mount("#container-1");

// const app2 = createApp({
//   /* ... */
// });
// app2.mount("#container-2");
