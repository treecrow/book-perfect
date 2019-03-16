# [inAppPurchase](https://electronjs.org/docs/api/in-app-purchase)

> Mac App Store中的应用内购买

## api 列表

| api                                                          | more                                                                                                                    |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| inAppPurchase.purchaseProduct(productID, quantity, callback) | You should listen for the transactions-updated event as soon as possible and certainly before you call purchaseProduct. |
| inAppPurchase.getProducts(productIDs, callback)              | Retrieves the product descriptions.                                                                                     |
| inAppPurchase.canMakePayments()                              | 返回 Boolean, 用来判断用户是否可以发起支付.                                                                             |
| inAppPurchase.getReceiptURL()                                | 返回 String, 指收据路径.                                                                                                |
| inAppPurchase.finishAllTransactions()                        | Completes all pending transactions.                                                                                     |
| inAppPurchase.finishTransactionByDate(date)                  | Completes the pending transactions corresponding to the date.                                                           |

## 事件列表

| event                | more                                         |
| -------------------- | -------------------------------------------- |
| transactions-updated | 一个或多个 transactions 更新时会触发这一事件 |