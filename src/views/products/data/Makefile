
all: build

build: update-rune tak-en.json tak-fi.json

rune:
	git clone https://github.com/hyperifyio/rune.git rune

update-rune: rune
	cd rune && git pull

tak-en.json: *.en.yml rune rune/rune Makefile
	rune/rune . json en > tak-en.json

tak-fi.json: *.fi.yml rune rune/rune Makefile
	rune/rune . json fi > tak-fi.json
