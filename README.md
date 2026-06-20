# marp-template

このリポジトリは Marp 用の簡単な日本語テンプレートです。

## 必要な準備

依存関係は既に `package.json` に記載されています。まだインストールしていない場合は:

```bash
npm install
```

## 使い方

- 開発（変更を監視して再ビルド）:

```bash
npm run dev
```

- HTML にビルド:

```bash
npm run build
```

- PDF にエクスポート:

```bash
npm run export
```

## ファイル

- スライド本体: [slide.md](slide.md)

## カスタマイズ

- テーマを変えたい場合はフロントマターの `theme` を変更します。
- カスタム CSS は `slide.md` 内の `<style>` に追記してください。
