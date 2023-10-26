#!/usr/local/bin/bash -l
set -e
if [ "$#" -eq 0 ]; then
  cp -r /app/dist/* /deliver/
  ls -R /deliver/
else
  exec "$@"
fi
