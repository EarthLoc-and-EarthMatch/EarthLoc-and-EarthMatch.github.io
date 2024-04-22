#!/bin/bash

# Loop through each subdirectory and process the files
for dir in */*/*; do
    #echo "Processing files in directory: $dir"
    files=$(ls -v "$dir"/*_pred_*matches_*.jpg)  # Sort files numerically by '_pred_' substring
    #echo $files
    convert -delay 40 $files "$dir/output.gif"
    echo "Output GIF created for directory: $dir"
done

