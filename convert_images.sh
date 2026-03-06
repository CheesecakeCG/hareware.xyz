#!/bin/bash
for i in *.png;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  ffmpeg -i  "$i" -c:v libwebp -pix_fmt yuv420p -quality 94 "${name}.webp"
done

# rm *.png
