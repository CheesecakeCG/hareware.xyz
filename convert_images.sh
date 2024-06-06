#!/bin/bash
for i in *.png;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  convert "$i" "${name}.jpg"
done
# rm *.png