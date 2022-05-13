---

title: Keycloak - Spring Boot 整合 - 上
created: 2022-05-08
summary: 使用Keycloak處理用戶認證
# tags: 
#     - spring-boot
#     - java
#     - keycloak
flags:
    - unlisted
---

## 前言

當你有多過一個Client App，又想用戶可以用同一個Account登入唔同Apps嘅時候，就可以考慮用 Identity and Access Management（俗稱"IAM"）工具，而Keycloak就係其中之一。以下會教各位用Keycloak + Spring Boot寫個普通嘅Restful API Service。

## 正文

### 系統架構

User首先向 Keycloak 獲取JWT Token，然後再用 Token 通過 Spring Boot Security 嘅驗證。

### 安裝

1. 去 **[Keycloak官網](https://www.keycloak.org/downloads)** download 最新版 Keycloak 嘅 Server Zip檔案。
2. 解壓縮至任意文件夾
3. 使用cmd在bin文件夾中輸入指令：

```bash
./kc.sh start-dev
```

4. 之後應該會見到以下Log Message：

```bash
...
2022-05-13 09:45:01,778 INFO  [org.keycloak.connections.infinispan.DefaultInfinispanConnectionProviderFactory] (main) Node name: node_882291, Site name: null
2022-05-13 09:45:02,061 INFO  [io.quarkus] (main) Keycloak 18.0.0 on JVM (powered by Quarkus 2.7.5.Final) started in 6.398s. Listening on: http://0.0.0.0:8080
...
```

### 設定

1. 用瀏覽器進入 localhost:8080，會見到登入 Portal
2. 喺左邊 Administration Console 創建一個 Admin Account
3. 創建 **Realm**， 你可以想像一個 Realm 代表一Group Users嘅所有設定，包括登入資料，登入方法，用戶群組，權限等等。



4. 創建 **Client**，Client 指會用到 Keycloak 嘅 Application。即係我哋嘅 Spring Boot Application

### 測試

## 總結
