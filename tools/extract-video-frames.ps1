$video = "C:\Users\LENOVO\Downloads\WhatsApp Video 2026-09-05 at 1.17.19 PM.mp4"
$out = "D:\SPITEL_INTERNSHIP\RECALL_COMMUNICATION\recall-communications\video-frames"

New-Item -ItemType Directory -Force -Path $out | Out-Null
Add-Type -AssemblyName PresentationCore, WindowsBase

$player = New-Object System.Windows.Media.MediaPlayer
$player.ScrubbingEnabled = $true
$player.Open([Uri]$video)
Start-Sleep -Milliseconds 1500

$duration = $player.NaturalDuration.TimeSpan.TotalSeconds
$width = $player.NaturalVideoWidth
$height = $player.NaturalVideoHeight

if ($width -le 0 -or $height -le 0) {
  throw "Could not read video dimensions"
}

$times = @(0.2, $duration * 0.25, $duration * 0.5, $duration * 0.75, [Math]::Max(0.2, $duration - 0.2))

for ($i = 0; $i -lt $times.Count; $i++) {
  $player.Position = [TimeSpan]::FromSeconds($times[$i])
  Start-Sleep -Milliseconds 650

  $visual = New-Object System.Windows.Media.DrawingVisual
  $context = $visual.RenderOpen()
  $context.DrawVideo($player, (New-Object System.Windows.Rect 0, 0, $width, $height))
  $context.Close()

  $bitmap = New-Object System.Windows.Media.Imaging.RenderTargetBitmap $width, $height, 96, 96, ([System.Windows.Media.PixelFormats]::Pbgra32)
  $bitmap.Render($visual)

  $encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
  $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bitmap))

  $stream = [System.IO.File]::Create((Join-Path $out ("frame-$i.png")))
  $encoder.Save($stream)
  $stream.Close()
}

$player.Close()
Write-Output "duration=$duration width=$width height=$height out=$out"
