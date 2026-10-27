# LOCALSHIFT 公式サイト

GitHub PagesとVercelで公開できる静的サイトです。外部パッケージのインストールは不要です。

## 表示を確認する

`index.html` をブラウザで開けます。ローカルサーバーを使う場合は、Node.jsがある環境で次を実行します。

```sh
node scripts/preview.mjs
```

表示先は `http://127.0.0.1:4173` です。終了するときは Ctrl+C を押します。

## GitHub Pagesで公開する

1. GitHubリポジトリを作成します。
2. `index.html`、`style.css`、`site.js`、`関西リレーションズロゴ.jpeg`、`1024tosatosake` フォルダーをリポジトリの直下にアップロードします。
3. リポジトリの Settings → Pages で、公開元を Deploy from a branch、ブランチを main、フォルダーを / (root) に設定します。
4. GitHubが表示する公開URLを確認します。

写真とリンクは相対パスなので、プロジェクト用のGitHub Pagesにも対応しています。Wordの原稿や未使用の画像、確認用スクリプトを公開する必要はありません。

## Vercelで公開する

`vercel.json` に公開設定を用意しています。ビルド時に `node scripts/build.mjs` が実行され、サイト本体とイベント写真だけを `dist/` にまとめます。Word原稿やZIP、未使用画像は配信対象に含みません。

ローカルで公開用ファイルを確認するには、次を実行します。

```sh
node scripts/build.mjs
```

このコマンドは生成先の `dist/` を作り直します。編集は元のHTML・CSS・JavaScriptに行ってください。

Vercelにログイン済みの環境では、プロジェクト直下で `vercel --prod` を実行して公開できます。初回は公開先のアカウントとプロジェクトを選びます。GitHubから連携する場合も同じ設定を利用できます。

設定の詳細：[Vercel公式ドキュメント](https://vercel.com/docs/project-configuration/vercel-json)

## 内容を更新する

- 文章、団体情報、メールの宛先：`index.html`
- 色、文字サイズ、レイアウト：`style.css`
- スマートフォンのメニュー：`site.js`
- イベント写真：`1024tosatosake` フォルダー

室戸市の風景写真（室戸岬灯台・室戸スカイラインからの眺め）はWikimedia Commonsの画像URLを参照しています。閲覧時にインターネット接続が必要です。写真の撮影者・出典・ライセンスは、ページ内の「風景写真の出典・ライセンス」に記載しています。写真をローカルに保存する場合も、その表記を残してください。

お問い合わせはメールアプリを開く方式です。フォーム送信、寄付決済の機能はありません。
