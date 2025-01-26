
all: build

build: update-rune tak.json livelog.json

rune:
	git clone https://github.com/hyperifyio/rune.git rune

update-rune: rune
	cd rune && git pull

clean:
	rm -f tak.json livelog.json

tak.json: tak/**/*.yml tak/**/*.html tak/**/*.tsx tak/**/*.md tak/**/*.json rune rune/rune.py Makefile
	rune/rune.py tak json > $@

livelog.json: livelog/**/*.html livelog/**/*.md livelog/**/*.json rune rune/rune.py Makefile
	rune/rune.py livelog json > $@
