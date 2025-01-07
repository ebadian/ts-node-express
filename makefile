# Variables
SRC_DIR = src
DIST_DIR = dist
MAIN_FILE = $(DIST_DIR)/index.js

# Default target
.DEFAULT_GOAL := help

# Help target (displays available commands)
help:
	@echo "Available commands:"
	@echo "  make build       - Compile TypeScript to JavaScript"
	@echo "  make run         - Run the project"
	@echo "  make clean       - Remove the dist directory"
	@echo "  make dev         - Run the project in development mode using ts-node"
	@echo "  make install     - Install dependencies"

# Build target (compile TypeScript)
build-app:
	npx tsc

#Build docker
build-docker: build-app
	docker build -t ts-node-express .

build: build-docker
# Run target (execute compiled JavaScript)
run: build
	node $(MAIN_FILE)

# Clean target (remove build artifacts)
clean:
	rm -rf $(DIST_DIR)

# Dev target (run with ts-node for live development)
dev:
	npx ts-node $(SRC_DIR)/index.ts

# Install target (install dependencies)
install:
	npm install
