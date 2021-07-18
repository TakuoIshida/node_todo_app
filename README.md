# 言語等
Node.js Express TypeScript TypeORM Docker MySQL

## 概要
Node.jsの学習用に、上記言語・FW・middlewareで 作成しました。

UserごとのTODOアプリを想定した簡便なアプリケーションを実装しています。

ESLint、prettireの設定済みです。

## 目的
・Node.js Expressの基本的な実装力・設計力向上

## 実装項目
・レスポンス（ステータス・メッセージのグローバル化）

・DockerでMySQLコンテナーの作成 => データ永続化

・TypeORMを使用したレポジトリへの新規保存・更新・リレーション取得処理

・express-validatorを使用したValidation各種（int, string, custom)

・エラーコード別のエラーハンドリング

## 使用方法
前提：Docker、Node.jsは各自Installしていること。

```
git clone https://github.com/TakuoIshida/node_todo_app.git
```

パッケージのinstall
```
cd node_todo_app
npm i
```

.envをRootに作成し、環境変数を設定してください。
```
#.envの中
PORT=3000
DB_HOST=localhost
DB_PORT=3310
DB_USER=root
DB_PASS=password
DB_NAME=todo-app
```

コンテナーの起動・migration
```
docker-compose up
npm run migrate
```

Node.jsサーバーの起動
```
npm run dev
```

http://localhost:3000/todos  にアクセス
```
{
"result": []
}
```
とレスポンスが返ったらOK。
