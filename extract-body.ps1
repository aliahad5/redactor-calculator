$src = 'C:\Users\Ahad9\Downloads\redactor-pricing-calculator.html'
$dst = 'C:\Users\Ahad9\OneDrive\Desktop\Competative Analysis\redactor-calculator\content\body.html'

$content = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)

$bodyOpenIdx = $content.IndexOf('<body>')
$bodyCloseIdx = $content.IndexOf('</body>')
$body = $content.Substring($bodyOpenIdx + '<body>'.Length, $bodyCloseIdx - $bodyOpenIdx - '<body>'.Length)

# Strip the trailing inline <script>...</script> block (last one in the body)
$scriptIdx = $body.LastIndexOf('<script>')
if ($scriptIdx -ge 0) {
    $body = $body.Substring(0, $scriptIdx)
}

$body = $body.Trim()

New-Item -ItemType Directory -Force -Path (Split-Path -Parent $dst) | Out-Null

# Write as UTF-8 without BOM
$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($dst, $body, $utf8)

Write-Host "Wrote $($body.Length) chars to $dst"
