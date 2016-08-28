.PHONY: more \
	build watch deps

# http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
more:
	@awk 'BEGIN {FS = ":.*?## "} /^[\$$\(\)\/a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build:                                     ## ビルド
	NODE_ENV=production ./node_modules/.bin/webpack

watch:                                     ## 自動コンパイル
	NODE_ENV=development ./node_modules/.bin/webpack --progress --color --watch

deps:                                      ## 依存パッケージをダウンロード
	npm install
	./node_modules/.bin/typings install
