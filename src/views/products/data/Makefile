all: build

build: tak.json livelog.json

clean:
	rm -f tak.json livelog.json

tak.json: Makefile
	wget https://github.com/pvarki/rune-tak-metadata/releases/latest/download/rune.json -O $@

livelog.json: Makefile
	wget https://github.com/pvarki/rune-livelog-metadata/releases/latest/download/rune.json -O $@
