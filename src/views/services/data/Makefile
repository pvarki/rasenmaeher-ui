
all: build

build: tak-en.json tak-fi.json

tak-en.json: *.en.yml build.py Makefile
	./build.py . json en > tak-en.json

tak-fi.json: *.fi.yml build.py Makefile
	./build.py . json fi > tak-fi.json
