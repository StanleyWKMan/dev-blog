---

title: 淺談程式運作
created: 2022-05-07
summary: 帶你認識一個程式嘅運作
tags: 
    - murmur

---

## 前言

最近多咗機會同non-technical background嘅人合作之後，發現好多人都唔太了解一個App係點Work。有見及此，決定出Po同各位淺談程式運作。

## 正文

一個App其實就好似一間餐廳噉。餐廳有樓面同廚房，程式有Frontend（前端）同Backend（後端）。
Frontend泛指用戶可以見到、互動嘅嘢，例如排版、字體、按鈕等等，可以係一個手機App或者網站。
Backend泛指用戶睇唔到嘅嘢，例如用戶㩒完登入之後，系統認證用戶嘅部分，抑或你喺連登出Post之後，系統Save低你個Post嘅部分。

以下我用喺連登網站睇一個Post作為例子：

1. 用戶㩒落一個Post標題度
2. 網站向Server發起攞Post嘅請求
3. Server從資料庫獲取相應嘅Post
4. Server send翻資料去網站
5. 網站將得到嘅資料執翻靚仔比用戶睇

套用翻餐廳嘅例子就係：

1. 顧客同侍應講佢想食乜
2. 侍應落單話比廚房知要煮咩
3. 廚師攞相應食材煮嘢食
4. 廚師煮好後比侍應送餐
5. 侍應再將個餐比個客

或者直接啲，你打開瀏覽器嘅Network Tab（Win: F12, Mac: Option + CMD + I），就會發現大部分互動都會Trigger network request。

![Lihkg-web](/article/1/assets/lihkg-network.png)

可以睇得出，所有互動都係不斷重複緊步驟 1 至 5 所得出嘅結果。

## 總結

呢篇文簡單講咗一個程式係地點樣運作，重有好多Concept未Cover到，嚟緊有時間會逐Part細講。