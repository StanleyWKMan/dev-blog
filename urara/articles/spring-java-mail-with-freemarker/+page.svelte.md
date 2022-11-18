---
title: '使用Spring Mail及FreeMarker發送電郵'
created: 2022-11-17
updated: 2022-11-17
tags:
  - 'java'
  - 'spring-boot'
  - 'java-mail'
  - 'spring-mail'
  - 'freemarker'
  - 'tutorial'
---


## 咩係 Spring Mail

Spring Mail

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

## Implementation

### 發送純文字Email

```java title="MailServiceImpl.java"

@Service // MVC格式，implement一個interface再寫implementation
public class MailServiceImpl implements MailService {

    // Autowired JavaMailSender
    @Autowired private JavaMailSender mailSender;

    // 定義發送者電郵地址，常見嘅有no-reply@email.com
    private static final String SENDER_ADDRESS = "test-sender-3029@email.com";

    // 發送純文字電郵
    public void sendPlainTextEmail(String subject, String content, String... recipientEmailAddresses) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject(subject); // 郵件標題
        message.setFrom(SENDER_ADDRESS);
        message.setTo(recipientEmailAddresses); // 收件人電郵地址
        message.setText(content); // 郵件內容

        this.mailSender.send(message);
    }

}
```

### 發送Html Email

```java title="MailServiceImpl.java"
@Service // MVC格式，implement一個interface再寫implementation
public class MailServiceImpl implements MailService {

    // Autowired JavaMailSender
    @Autowired private JavaMailSender mailSender;

    // 定義發送者電郵地址，常見嘅有no-reply@email.com
    private static final String SENDER_ADDRESS = "test-sender-3029@email.com";

    // 發送HTML Email
    public void sendHtmlEmail(String subject, String htmlContent, String... recipientEmailAddresses) throws MessagingException {
          MimeMessage mimeMessage = mailSender.createMimeMessage();
          MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
          helper.setSubject(subject); // 郵件標題
          helper.setFrom(SENDER_ADDRESS);
          helper.setTo(recipientEmailAddresses); // 收件人電郵地址
          helper.setText(htmlContent, true); // 使用Html格式的郵件內容
          mailSender.send(mimeMessage);
    }
}
```

### 複數SMTP senders

如果你想一個Application可以用多過一個嘅SMTP Sender去send email，你就無可以就咁喺```application.yml```度設定，需要到Code層面去起唔同Sender嘅Instance。

```java 



```
