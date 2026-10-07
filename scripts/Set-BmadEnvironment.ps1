# Dot-source this script to prepare the current PowerShell process for BMAD.
$bmadProjectRoot = Split-Path -Parent $PSScriptRoot
$bmadUvDirectory = Join-Path $bmadProjectRoot '.tools\uv'
$bmadUvExecutable = Join-Path $bmadUvDirectory 'uv.exe'

if (-not (Test-Path -LiteralPath $bmadUvExecutable)) {
    throw 'Repo-local uv is missing. Follow docs/BMAD-SETUP.md before running BMAD.'
}

if (($env:Path -split ';') -notcontains $bmadUvDirectory) {
    $env:Path = $bmadUvDirectory + ';' + $env:Path
}
$env:UV_CACHE_DIR = Join-Path $bmadProjectRoot '.tools\uv-cache'
$env:npm_config_cache = Join-Path $bmadProjectRoot '.tools\npm-cache'

$bmadBundledPython = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
if (Test-Path -LiteralPath $bmadBundledPython) {
    $env:UV_PYTHON = $bmadBundledPython
    $env:UV_PYTHON_DOWNLOADS = 'never'
} else {
    # On another machine, allow uv to provision a supported interpreter locally.
    $env:UV_PYTHON = '3.12'
    $env:UV_PYTHON_INSTALL_DIR = Join-Path $bmadProjectRoot '.tools\python'
    $env:UV_PYTHON_DOWNLOADS = 'automatic'
}
