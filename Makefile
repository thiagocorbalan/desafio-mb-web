.PHONE: start

setup:
	@echo "Creating network 'mb'..."
	@docker network ls | grep mb || docker network create --driver bridge mb

start: setup
	@echo "Subindo o projeto..."
	@docker compose up --build
