#! /usr/bin/env bash

# cd to the directory of this script
cd "$(dirname "$0")" || exit

png2webp() {
  png_file="$1"
  webp_file="${png_file%.png}.webp"
  # if the webp file exists and is newer than the png file, skip it
  if [[ -f "$webp_file" && "$webp_file" -nt "$png_file" ]]; then
    echo "Skipping $png_file"
    return
  fi
  cwebp -lossless "$png_file" -o "$webp_file"
}

export -f png2webp

dirs=(../assets)

for dir in "${dirs[@]}"; do
  find "$dir" -type f -name "*.png" | parallel -j 4 png2webp
done
