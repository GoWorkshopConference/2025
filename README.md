# Go Workshop Conference 2025 IN KOBE Website

## 開発環境のセットアップ

1. 必要なツールをインストールする
   - 以下のツールをインストールしてください。
     - [Node.js](https://nodejs.org/en/download/package-manager): v24.x
     - [pnpm](https://pnpm.io/installation): v10.x
2. 依存パッケージをインストールする
   - `pnpm install`を実行してください。

## コマンド

- `pnpm dev`: 開発サーバー（<http://localhost:4321/>）を起動する

## Pull Requestのプレビュー

Netlifyの[Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/)を使用しています。Pull Requestを作ると自動的にプレビューページが用意され、Pull RequestのコメントにURLがポストされます。

## リリース

`main`ブランチにpushすると自動的にビルドが行われ、GitHub Pagesに公開されます。
