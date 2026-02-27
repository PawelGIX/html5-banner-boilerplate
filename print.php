<?php

// Directory to read
$directory = './build/';

// Check if the directory exists
if (is_dir($directory)) {
    // Open the directory
    if ($handle = opendir($directory)) {

        // Loop through each item in the directory
        while (($item = readdir($handle)) !== false) {
            // Match directories with the format [0-9]x[0-9]
            if (preg_match('/^(\d+)x(\d+)$/', $item, $matches)) {
                // Extract width and height from the directory name
                $width = $matches[1];
                $height = $matches[2];

                // Generate the iframe HTML with width, height, and source URL
                echo '<div style="margin-top:20px">'. "$width x $height" .'<br><iframe width="' . $width . '" height="' . $height . '" src="./build/' . $item . '/index.html?clickTag=https://www.provident.pl/" frameborder="0"></iframe></div>' . PHP_EOL;
            }
        }

        // Close the directory
        closedir($handle);
    } else {
        echo "Unable to open the directory.";
    }
} else {
    echo "Directory does not exist.";
}
