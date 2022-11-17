---
title: '使用JavaMail及FreeMarker在Spring Boot發送電郵'
created: 2022-11-17
updated: 2022-11-17
tags:
  - 'java'
  - 'spring-boot'
  - 'java-mail'
  - 'freemarker'
  - 'tutorial'
---


## 咩係 JavaMail

JavaMail

## 咩係 FreeMarker

FreeMarker係一個Template Engine，同Thymeleaf一樣可以用嚟Render Html做Server Side Render嘅網站，唔同於Thymeleaf嘅係，FreeMarker可以用喺Html以外嘅File，例如xml、yaml等，依家用嚟整Email Template都非常好用。

## 設置JavaMail Sender

我用[WPOven](https://www.wpoven.com/tools/free-smtp-server-for-testing)嘅免費SMTP Server嚟做測試，所以唔需要入Username Password，正常都係必須入的，以AWS 嘅Simple Email Service為例，你就需要Create一個專Send Email嘅IAM User。


```yaml title="application.yml"

spring:
  mail:
    host: smtp.freesmtpservers.com
    port: 25
    username: # SMTP Username
    password: # SMTP Password
    properties:
      mail:
        smtp.auth: false # 如果SMTP需要帳戶密碼，set做true

```

發送純文字Email

發送Html Email

## 複數SMTP senders

如果你想一個Application可以用多過一個嘅SMTP Sender去send email，你就無可以就咁喺```application.yml```度設定，需要到Code層面去起唔同Sender嘅Instance。

```java 



```
