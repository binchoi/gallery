.PHONY: help 

default: help

help:
	@echo 'Management commands for Life Gallery:'
	@echo
	@echo 'Usage:'
	@echo '    make piece id=<id>   Create piece for given id.'
	@echo


DEFAULT_PIECE_MD = archetypes/default.md
OUTPUT_MD = $(id).md

piece:
ifndef id
	$(error id is not set)
endif
	@cp $(DEFAULT_PIECE_MD) pieces/$(OUTPUT_MD)
