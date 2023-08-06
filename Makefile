build:
	docker build . -t marvinjwendt/promptbuilder.dev:latest

publish: build
	docker push marvinjwendt/promptbuilder.dev:latest
