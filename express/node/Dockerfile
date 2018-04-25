# ベースイメージを指定
# 今回は LTS の 8.9.4 にする
# alpine は軽量の linux OS
FROM node:8.9.4-alpine

# node.jsの環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g express-generator@4.15.0

# ディレクトリを移動する
WORKDIR /app

# ポート3000番を開放する
EXPOSE 3000
