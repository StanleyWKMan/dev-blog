---

title: Keycloak - Spring Boot 整合 - 上
created: 2022-05-08
summary: 使用Keycloak處理用戶認證
tags: 
    - spring-boot
    - java
    - keycloak

---

## 前言

當你有多過一個Client App，又想用戶可以用同一個Account登入唔同Apps嘅時候，就可以考慮用 Identity and Access Management（俗稱"IAM"）工具，而Keycloak就係其中之一。以下會教各位用Keycloak + Spring Boot寫個普通嘅Restful API Service。

## 正文

### 安裝

1. 去[Keycloak官網](https://www.keycloak.org/downloads) download 最新版 Keycloak 嘅 Server Zip檔案。
2. 解壓縮至任意文件夾
3. 使用cmd在bin文件夾中輸入指令：
```bash
./kc.sh start-dev
```

### 設定

#### Realm

## 總結