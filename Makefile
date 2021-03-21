.PHONY: serve
serve:
	docker-compose up

.PHONY: build
build:
	docker-compose run web yarn build