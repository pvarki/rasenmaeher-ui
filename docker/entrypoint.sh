#!/bin/bash -l
set -e
if [ "$#" -eq 0 ]; then
  npx http-server /app/dist --port 8002
else
  exec "$@"
fi
