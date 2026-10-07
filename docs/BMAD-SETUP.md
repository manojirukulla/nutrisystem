# BMAD setup

Installed and verified on 2026-10-07 in `C:\Repos\nutrisystem`.

## Installed components

- Git repository initialized with branch `main`; no remote configured.
- BMAD 6.12.1, pinned stable version; built-in Core and BMM modules.
- Codex integration: 29 project-local skills in `.agents/skills/`.
- Shared scripts and configuration in `_bmad/`.
- uv 0.12.23 in ignored `.tools/uv/`, with no system PATH/profile changes.
- Existing Codex bundled Python 3.12.14 reused on this machine.

No application, cloud accounts, or product specifications were created by setup.

## Prepare a PowerShell session

From the repository root:

```powershell
. ./scripts/Set-BmadEnvironment.ps1
uv --version
uv run _bmad/scripts/resolve_config.py --project-root (Get-Location).Path
uv run --no-cache _bmad/scripts/render_skill.py --help
```

The launcher changes only the current process environment. Its local tools and caches are ignored by Git. On machines without the bundled interpreter, it permits uv to provision Python 3.12 under `.tools/python/`.

## Reproduce the installation on another checkout

Install Node.js 20.12 or newer and Git first. Provide uv locally using its [official Windows installer](https://docs.astral.sh/uv/reference/installer/), without changing shell profiles:

```powershell
New-Item -ItemType Directory -Force -Path .tools | Out-Null
Invoke-WebRequest -Uri 'https://astral.sh/uv/install.ps1' -OutFile .tools/install-uv.ps1
$env:UV_UNMANAGED_INSTALL = Join-Path (Get-Location).Path '.tools/uv'
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .tools/install-uv.ps1 -NoModifyPath
. ./scripts/Set-BmadEnvironment.ps1
```

The installer URL resolves the current uv release; this setup used 0.12.23. Review upgrades deliberately. Then use the pinned BMAD installer:

```powershell
npx.cmd --yes bmad-method@6.12.1 install --directory (Get-Location).Path --modules bmm --tools codex --user-name Harsh --communication-language English --document-output-language English --output-folder '_bmad-output' --no-shims --yes
```

## Workflow and storage

- Start a fresh chat in this project and invoke `bmad-help` for guidance.
- Start product definition with `bmad-product-brief`, then `bmad-prd`.
- Planning artifacts: `_bmad-output/planning-artifacts/`.
- Implementation artifacts: `_bmad-output/implementation-artifacts/`.
- Long-term project knowledge: `docs/`.
- Shared customizations: `_bmad/custom/`; personal configuration is ignored.

Installed skill definitions and the installed help catalog take precedence over documentation from another BMAD release. See the [6.12.1 installation guidance](https://github.com/bmad-code-org/BMAD-METHOD/blob/v6.12.1/docs/start/install-bmad.md).

## Verification performed

The installer exited successfully, detecting uv. The installation manifest reports 6.12.1, Core, BMM, and Codex. All 29 skill entry points are present. The configuration resolver and renderer CLI both run with the bundled interpreter. Resolved paths match the directories above.

Git account authentication is unnecessary for local work. A remote and account authentication can be configured when publishing the repository. No commit was created: no Git author name/email is configured on this machine.
