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
    if (preg_match('/^(\d+)x(\d+)$/', $dirName, $matches)) {
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
    <style>
        body {
            font-family: Arial, sans-serif;
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
        }

        .download-buttons {
            text-align: left;
        }

        .download-buttons a {
            margin: 10px 1px;
            display: inline-block;
            text-decoration: none;
            background-image: linear-gradient(to top, #555 70%, #888);
            border: 1px solid #555;
            border-radius: 4px;
            padding: .5em 1em;

            color: #fff;
            font-size: 11px;
        }

        /* add hover  */
        .download-buttons a:hover {
            background-image: linear-gradient(to top, #666 70%, #999);
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
                            <?php $zipPath = $deployDir . "PROV-382_ProviSmartPromocja1000zl_pefo_text-" . $dir['name'] . ".zip"; ?>
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