---
title: 'Hierarchical Determinstic Wallet'
created: 2023-01-10
updated: 2023-01-10
flags: ['unlisted']
tags: []
summary: ""
---

非HD錢包遇到嘅問題

假設你係一個幾出名嘅人，如果你淨係用一個地址交易，而且被別人發現你的錢包地址，那麼你所有交易記錄都會被看得一清二楚，所以為顧及匿名性，大多數人都選擇不重用地址。

如想在傳統錢包上保留交易的匿名性，你必須為每一筆交易創建一組新、隨機的KeyPair，而每生成一組新的帳號，你便需要維護多一組帳號。

傳統錢包示意圖，一個錢包內每個帳號都是獨立的，需要各自記下他們的Private Key

而HD錢包解決需要管理過多帳號問題的方法，便是使用讓一組Seed生成所有帳號。在理解其工作原理前，我們可以先了解BIP的意思。



HD錢包的原理

我們都知道HD錢包使用Seed產生不同的Addresses，以下將詳述具體是如何定義一個新的地址。首先要了解什麼是 Derivation Path，Derivation Path的意思可簡單理解為HD錢包尋找地址的方法，可以參考以下圖片：

BIP-32 定義但錢包架構，也是AET Node的設計

BIP-32：m / account / chains / address

除了 m 不會變，chains只有0和1外，其他都是0 - i

我想以一個簡單的方式去解釋這個設計：

1. 老闆使用 m 這個 wallet，若有Auditing的需要，他可以交出 m 的extended public key (xpub)，這樣Audit的人可以透過這個xpub生成所有m產生的public keys，再將addresses從這些public keys提取出來以查看每個與公司關聯的地址的交易紀錄。
2. 可以使用account這個代表Offices，m/0 是香港總部，m/1 是馬來西亞分公司，m/2 是泰國分公司等。
3. 公司與其他交易所合作，可以提供 m/3/1的xpub予對方，對方透過這個xpub生成不同的addresses再發送交易，減低資金被追蹤的風險。