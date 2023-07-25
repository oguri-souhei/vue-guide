# このリポジトリについて

- [Vue の公式ガイド](https://ja.vuejs.org/guide/essentials/application.html)を読むためのリポジトリ

# メモ

## ディレクティブ

ブーリアン属性は、要素に含まれるかどうかによって「真」または「偽」の値を表す属性です。例えば、disabled は最も一般的に用いられるブーリアン属性の 1 つです。

以下のケースでは、v-bind は少し特別な動作をします:

template
<button :disabled="isButtonDisabled">Button</button>
この disabled という属性は、isButtonDisabled が 真値 (truthy value) である場合に要素に含まれます。また、<button disabled=""> との一貫性を保つため、値が空の文字列である場合にも含まれます。それ以外の偽値 (falsy values) の場合には、属性が要素から取り除かれます。



# わからない箇所

- [ここ](https://ja.vuejs.org/guide/essentials/application.html#mounting-the-app:~:text=DOM%20%E5%86%85%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%88%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)
  - サンプルコードをどうやって実行するのかわからない
  - 以下の説明文がよくわからない

```
もしルートコンポーネントに template オプションがすでにない場合、Vue は自動的にコンテナの innerHTML をテンプレートとして使用します
```
