
all: build

build: update-rune tak.json

rune:
	git clone https://github.com/hyperifyio/rune.git rune

update-rune: rune
	cd rune && git pull

clean:
	rm -f tak.json

tak.json: *.yml *.html ./translations/*.json rune rune/rune.py Makefile
	rune/rune.py . json > $@
