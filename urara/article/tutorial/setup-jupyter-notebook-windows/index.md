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

<script>
    import Alert from '$lib/components/extra/alert.svelte'
</script>

## 前言
本文講述使用Chocolatey安裝JupyterLab嘅流程。Chocolatey作爲軟件管理工具非常方便，用家唔需要上網周圍搵資源搵Updates，軟件更新和移除只需打Command就搞掂。

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
      
<Alert title="或需要重新開機" description="若果Log有提示需要Reboot" status="info" />

4. 檢查python版本
``` powershell
    python --version 
    python3 --version # 如果上則指令出到Python2.X.X就用呢個
```

## 安裝 JupyterLab
1. 檢查pip版本```pip --version```
2. 安裝 JupyterLab
``` powershell 
    pip install jupyterlab
```

## 運行 JupyterLab
1. 指定運行JupyterLab嘅目錄
```bash
    jupyter lab --app_dir=E:/ --preferred_dir E:/Documents/Somewhere/Else
```
2. 之後會自動用瀏覽器開JupyterLab，如果冇，可以喺Log搵到好似👇：
```log
    [C 2022-06-08 09:57:34.568 ServerApp]
        To access the server, open this file in a browser:
            file:///Users/wingstako/Library/Jupyter/runtime/jpserver-15557-open.html
        Or copy and paste one of these URLs:
            http://localhost:8888/lab?token=db7b7535886eef447a7bb1a1bac8b3b982e3bdf310fcb8e6
        or http://127.0.0.1:8888/lab?token=db7b7535886eef447a7bb1a1bac8b3b982e3bdf310fcb8e6
    [I 2022-06-08 09:57:37.804 LabApp] Build is up to date
```
3. 複製Url再喺瀏覽器打開亦可
![tada](setup-jupyter-notebook-windows/assets/jupyterlab.png)