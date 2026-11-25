# convert-heic.ps1
# Dùng Windows Imaging Component (WIC) để convert HEIC → JPG
# Chạy: powershell -ExecutionPolicy Bypass -File scripts\convert-heic.ps1

Add-Type -AssemblyName System.Drawing

$imgDir = Join-Path $PSScriptRoot "..\public\images"
$heicFiles = Get-ChildItem -Path $imgDir -Include "*.heic","*.HEIC" -Recurse

Write-Host "Tim thay $($heicFiles.Count) file HEIC..." -ForegroundColor Cyan

foreach ($file in $heicFiles) {
    $outName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name) + ".jpg"
    $outPath = Join-Path $imgDir $outName

    if (Test-Path $outPath) {
        Write-Host "Bo qua (da co): $outName" -ForegroundColor Yellow
        continue
    }

    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, [long]90
        )
        $img.Save($outPath, $jpegCodec, $encoderParams)
        $img.Dispose()
        Write-Host "OK: $($file.Name) -> $outName" -ForegroundColor Green
    } catch {
        Write-Host "LOI: $($file.Name) - $_" -ForegroundColor Red
    }
}

Write-Host "`nHoan tat!" -ForegroundColor Cyan
