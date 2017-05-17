# redactor-plugins-lineheight
# Makefile

docs:
	rst2html README.rst > index.html && zip docs.zip index.html

clear:
	rm -rf index.html docs.zip

minify-js:
	curl -s  -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@./lineheight.js" http://closure-compiler.appspot.com/compile > ./lineheight.min.js
