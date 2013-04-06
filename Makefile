APPLICATION = ./assets/css/nicoespeon.css
APPLICATION_LESS = ./assets/less/nicoespeon.less
DATE = $(shell date +%I:%M\ %p)
CHECK = \033[32m✔\033[39m
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

#
# BUILD CSS/JS
#

build:
	@echo "\n${HR}"
	@echo "Building front-end..."
	@echo "${HR}\n"
	@lessc --compress ${APPLICATION_LESS} ${APPLICATION}
	@echo "Compiling LESS...                ${CHECK} Done"
	@echo "\n${HR}"
	@echo "Build successfully completed at ${DATE}."
	@echo "${HR}\n"
	@echo "Script by @nicoespeon,"
	@echo "inspired by @mdo's and @fat's Bootstrap Makefile\n"