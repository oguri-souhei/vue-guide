ふ# このリポジトリについて

- [Vue の公式ガイド](https://ja.vuejs.org/guide/essentials/application.html)を読むためのリポジトリ

# メモ

## ディレクティブ

ブーリアン属性は、要素に含まれるかどうかによって「真」または「偽」の値を表す属性です。例えば、disabled は最も一般的に用いられるブーリアン属性の 1 つです。

以下のケースでは、v-bind は少し特別な動作をします:

template
<button :disabled="isButtonDisabled">Button</button>
この disabled という属性は、isButtonDisabled が 真値 (truthy value) である場合に要素に含まれます。また、<button disabled=""> との一貫性を保つため、値が空の文字列である場合にも含まれます。それ以外の偽値 (falsy values) の場合には、属性が要素から取り除かれます。

## 複数の属性を動的にバインドさせる

次のような複数の属性を持つ JavaScript オブジェクトがあるとします:


const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
以下のように v-bind を引数なしで用いると、これらの複数の属性を 1 つの要素にバインドすることができます:

template
<div v-bind="objectOfAttrs"></div>

## 関数の呼び出し ​

コンポーネントから公開されているメソッドであれば、以下のようにバインディングの式の内部で呼び出すことができます:

template
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>

TIP
バインディングの式の内部で呼び出される関数は、コンポーネントが更新されるたびに呼び出されます。そのため、データの変更や非同期処理をトリガーするような副作用を持たせてはいけません。

## グローバルへのアクセスの制限 ​

テンプレートで用いる式はサンドボックス内で実行され、限定的なグローバルのリストにのみアクセスできます。このリストには、Math や Date などのよく使われる組み込みグローバルが含まれています。

ユーザーが window に付与したプロパティなど、このリストに明示的に含まれていないグローバルには、テンプレート内の式からアクセスすることができません。ただし、app.config.globalProperties に追加することにより、Vue のあらゆる式で利用できるグローバルを明示的に定義することができます。

## 動的引数 ​

ディレクティブの引数を指す部分では、以下のように角括弧で囲んだ JavaScript の式を用いることもできます:

template
<!--
引数で使用できる式には、いくつか制約があります。詳細は以下の
「動的引数の値に関する制約」および「動的引数の構文上の制約」セクションで説明します。
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 省略記法 -->
<a :[attributeName]="url"> ... </a>
この例では、attributeName が JavaScript の式として動的に評価され、そこで評価された値が最終的な引数を指す値として使用されます。例えば、コンポーネントのインスタンスが attributeName というデータプロパティを持ち、その値が "href" のとき、このバインディングは v-bind:href と同等になります。

同じように、動的引数を用いてハンドラーを動的なイベント名にバインドすることもできます:

template
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 省略記法 -->
<a @[eventName]="doSomething">
この例では、eventName の値が "focus" のとき、v-on:[eventName] が v-on:focus と同等になります。

# わからない箇所

- [ここ](https://ja.vuejs.org/guide/essentials/application.html#mounting-the-app:~:text=DOM%20%E5%86%85%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%88%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)
  - サンプルコードをどうやって実行するのかわからない
  - 以下の説明文がよくわからない

```
もしルートコンポーネントに template オプションがすでにない場合、Vue は自動的にコンテナの innerHTML をテンプレートとして使用します
```
