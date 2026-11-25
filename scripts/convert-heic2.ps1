Add-Type -AssemblyName PresentationCore

$dir = "C:\Users\DELL\.gemini\antigravity\scratch\cosmic-birthday\public\images"
$heicFiles = Get-ChildItem -Path $dir | Where-Object { $_.Extension -match '\.heic' }

Write-Host "Tim thay $($heicFiles.Count) file HEIC..." -ForegroundColor Cyan

foreach ($f in $heicFiles) {
    $out = [System.IO.Path]::ChangeExtension($f.FullName, ".jpg")
    if (Test-Path $out) {
        Write-Host "Bo qua: $($f.Name)" -ForegroundColor Yellow
        continue
    }
    try {
        $bi = New-Object System.Windows.Media.Imaging.BitmapImage
        $bi.BeginInit()
        $bi.UriSource = [Uri]("file:///" + $f.FullName.Replace("\", "/"))
        $bi.CacheOption = [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
        $bi.EndInit()
        $bi.Freeze()

        $enc = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
        $enc.QualityLevel = 90
        $enc.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bi))

        $fs = [System.IO.File]::OpenWrite($out)
        $enc.Save($fs)
        $fs.Close()
        Write-Host "OK: $($f.Name) -> $([System.IO.Path]::GetFileName($out))" -ForegroundColor Green
    } catch {
        Write-Host "LOI: $($f.Name) -- $_" -ForegroundColor Red
    }
}

Write-Host "`nHoan tat!" -ForegroundColor Cyan
