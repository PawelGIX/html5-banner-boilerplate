<?php
$baseDir = './build/'; // Change this to your directory containing subdirectories
$deployDirs = ['./deploy/', './deploy-wp-builder/'];
$directories = array_filter(glob($baseDir . '*'), 'is_dir');

$parentDirname = basename(realpath($baseDir . '..'));

function getDirectorySize($dir)
{
    $size = 0;
    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS)) as $file) {
        $size += $file->getSize();
    }
    return round($size / 1024, 2); // Convert to KB
}

$sortedDirectories = ['square' => [], 'tall' => [], 'wide' => []];
foreach ($directories as $dir) {
    $dirName = basename($dir);
    if (preg_match('/^(\d+)x(\d+)(.+?)*$/', $dirName, $matches)) {
        $width = (int) $matches[1];
        $height = (int) $matches[2];

        $aspectRatio = $width / $height;
        $size = getDirectorySize($dir);

        $entry = ['path' => $dir, 'name' => $dirName, 'width' => $width, 'height' => $height, 'size' => $size];
        if ($aspectRatio >= 0.8 && $aspectRatio <= 1.2) {
            $sortedDirectories['square'][] = $entry;
        } elseif ($aspectRatio < 0.8) {
            $sortedDirectories['tall'][] = $entry;
        } else {
            $sortedDirectories['wide'][] = $entry;
        }
    }
}

// Sort each group by area (smallest first)
foreach ($sortedDirectories as &$group) {
    usort($group, function ($a, $b) {
        return ($a['width'] * $a['height']) - ($b['width'] * $b['height']);
    });
}
unset($group);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $parentDirname; ?></title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">


    <style>
        body {
            font-family: 'Google Sans Code', Arial, sans-serif;
        }

        #searchBar {
            margin: 10px;
            padding: 8px;
            width: 300px;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            padding: 10px;
            border-radius: 8px;
            text-align: left;
        }

        .spacer {
            width: 100%;
            height: 10px;
            background: transparent;
        }

        .box h3 {
            text-align: left;
            margin-bottom: .1em;
            font-weight: 300;
        }

        .download-buttons {
            text-align: left;
        }

        .download-buttons a {
            padding: 0 10px;
            min-height: 25px;
            display: inline-flex;
            align-items: center;
            text-shadow: 0 1px 0 rgba(255, 255, 255, .9);
            color: #333;
            margin-bottom: 5px;
            border: 1px solid #d5d5d5;
            border-radius: 3px;
            
            font-weight: normal;
            font-size: 11px;
            line-height: 1;
            
            background: #fff;
            background-color: #eee;
            text-decoration: none;
            
        }

        /* add hover  */
        .download-buttons a:hover {
            border-color:  #aaa;
        }
        .download-buttons a:active {
            background-image: linear-gradient(to top, #ddd 10%, #eee);
            box-shadow: inset hsl(0, 0%, 50%) 2px 2px 3px 0px;
            

        }
    </style>
    <script>
        function filterBoxes() {
            let search = document.getElementById('searchBar').value.toLowerCase();
            document.querySelectorAll('.box').forEach(box => {
                box.style.display = box.dataset.name.includes(search) ? 'block' : 'none';
            });
        }
    </script>
</head>

<body>
    <input type="text" id="searchBar" onkeyup="filterBoxes()" placeholder="Search by directory name...">
    <div class="container">
        <?php foreach (["square", "tall", "wide"] as $index => $category): ?>
            <?php if ($index > 0): ?>
                <div class="spacer"></div>
            <?php endif; ?>
            <?php foreach ($sortedDirectories[$category] as $dir): ?>
                <div class="box" data-name="<?php echo strtolower($dir['name']); ?>">
                    <h3><?php echo htmlspecialchars($dir['name']); ?> (<?php echo $dir['size']; ?> KB)</h3>
                    <div class="download-buttons">
                        <?php foreach ($deployDirs as $deployDir): ?>
                            <?php $zipPath = $deployDir . "/" . $parentDirname . "-" . $dir['name'] . ".zip"; ?>
                            <?php if (file_exists($zipPath)): ?>
                                <a href="<?php echo htmlspecialchars($zipPath); ?>" download>Download from
                                    <?php echo htmlspecialchars(basename($deployDir)); ?></a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                    <iframe src="<?php echo htmlspecialchars($dir['path']); ?>/index.html?clickTag=https://www.provident.pl/"
                        width="<?php echo $dir['width']; ?>" height="<?php echo $dir['height']; ?>" style="border:0;"></iframe>
                </div>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </div>
</body>

</html>