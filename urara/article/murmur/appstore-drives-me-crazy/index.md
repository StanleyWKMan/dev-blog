---

title: 苦難之路 - 上架 App Store
created: 2022-05-23
updated: 2022-05-25
summary: iOS App Development 終極難題
tags: 
    - murmur
    - ios
---

> Thank you for submitting your items for review. We noticed an issue with your submission that requires your attention.

## 引言

時至今日，筆者已經比Apple Store Reject咗三次了。每次fix完一個問題，等兩日，佢又再比另一個拒絕原因你。相反，Play Store係Apple Store第二次審查嘅時候已經開放下載了。

筆者會喺呢板紀錄App Store審查紀錄。

## 紀錄

### 2022-05-17

- #### Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage

| 原因     | App需要用戶登入但功能並非Account Based |
| -------- | -------------------------------------- |
|解釋| App入面嘅功能並不需要用戶登錄，正如一個Ecommerce App係用戶登入前都會睇到入面嘅嘢|
| 解決方法 | 新增訪客模式，限制非註冊用戶功能       |


### 2022-05-20

- #### Guideline 1.5 - Safety - Developer Information

| 原因     | Supported Url中冇聯絡資料 |
| -------- | -------------------------------------- |
| 解決方法 | 喺網站入面加多板 'Contact Us'      |

- #### Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage

| 原因     | 冇解釋App Permissions用途 |
| -------- | -------------------------------------- |
| 解決方法 | 喺Info.plist入面加翻相機、圖庫嘅用途  |

```xml title="Info.plist"
<dict>
    ...
    <key>NSCamerayUsageDescription</key>
    <string>用於拍攝照片，上傳至聊天室</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>用於拍攝影片，上傳至聊天室</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>用於上傳或保存聊天室的多媒體檔案</string>
    ... 
</dict>

```

### 2022-05-23

- #### Guideline 1.2 - Safety - User Generated Content


| 原因     | 冇對應User Generated Content嘅Precaution |
| -------- | -------------------------------------- |
| 解決方法 | <ol><li> 允許用戶封鎖其他用戶 </li><li> 允許用戶舉報其他用戶 </li><li> 屏蔽不雅/不合適嘅內容 </li><li> 加EULA比用戶註冊時同意 </li></ol> |

### 2022-05-25

> Congratulations! We're pleased to let you know that your app, Neverland, has been approved for the App Store. Once your app has been released, it can take up to 24 hours before your app becomes available on the App Store.

建議各位上app要預留一兩個禮拜，審多兩審，就會過埋deadline。