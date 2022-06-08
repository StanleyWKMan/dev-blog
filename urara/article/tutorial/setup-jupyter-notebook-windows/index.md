---

title: 在Windows運行JupyterLab
created: 2022-06-06
summary: Windows JupyterLab installation for no-brainers
tags: 
    - python
    - jupyterlab
    - windows
# flags:
#     - unlisted
---

## 安裝 Chocolatey

1. 以系統管理員開啟 PowerShell
2. 設定Execution Policy 
```powershell
    Set-ExecutionPolicy AllSigned 
```
3. 安裝Chocolatey
```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    
```
4. 結束後輸入```choco```測試安裝結果

## 安裝 Python
1. 以系統管理員開啟 PowerShell
2. 輸入```choco install python```
3. 過程中需要輸入```y```或```a```確定安裝
4. 檢查python版本
``` powershell
    python --version 
    python3 --version # 如果上則指令出到Python2.X.X就用呢個
```
## 安裝 JupyterLab

## 運行 JupyterLab