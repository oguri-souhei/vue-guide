# Vue アプリケーションの作成

## アプリインスタンスの作成

```javascript
import { createApp } from "vue";

const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
});
app.mount("#app");
```

## ルートコンポーネント

- App.vue のこと
