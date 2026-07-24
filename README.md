# 6つのMoneyタイプ診断

## パソコンで確認する
1. ZIPファイルを右クリックして「すべて展開」
2. 展開したフォルダの `index.html` をダブルクリック

## GitHubへアップロードする
1. GitHubのリポジトリを開く
2. 「既存のファイルをアップロード」をクリック
3. ZIPそのものではなく、展開後の5ファイルを全部アップロード
4. 「Commit changes」を押す

## GitHub Pagesで公開する
1. リポジトリ上部の `Settings`
2. 左側の `Pages`
3. Sourceを `Deploy from a branch`
4. Branchを `main`、フォルダを `/(root)`
5. `Save`

数分後に公開URLが表示されます。

## 質問を変更する
`questions.js` を編集します。質問文は `text`、タイプは `type` です。
