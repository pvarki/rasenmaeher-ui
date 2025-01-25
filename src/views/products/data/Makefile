
all: build

build: update-rune tak.json

rune:
	git clone https://github.com/hyperifyio/rune.git rune

update-rune: rune
	cd rune && git pull

clean:
	rm -f tak.json

tak.json: tak/*.yml tak/*.html tak/translations rune rune/rune.py Makefile
	rune/rune.py tak json > $@
