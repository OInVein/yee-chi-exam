## Question 1

#### Run Dev

```sh
pnpm i
pnpm dev
```

#### Live Demo

https://yee-chi-exam.vercel.app/

## Question 2

#### Run Result

```sh
node question2.js
```

## Question 3

#### 3-1

Flux 是一種 architecture pattern，為單向數據流，用以解決複雜的狀態管理。
在 Flux 中，一個 App 包含，

- **Action** - 事件觸發
- **Dispatcher** - 發送區，接收到 Actions，並發送到 Store 更新狀態
- **Store** - 負責管理整個 App 的狀態
  1. 可以有多個 store
  2. 狀態為 mutable
- **View** - 視圖

Redux 是基於 Flux 架構的 library。在 Redux 中，一個 App 包含，

- **Action** - 事件觸發
- **Reducer** - 為 pure function, 根據 Action 更新狀態
- **Store** - 負責管理整個 App 的狀態
  1. 只能有 1 個 store
  2. 狀態為 immutable
  3. 僅能透過 Reducer 派發來的 Action 來更新 store

Vuex 同樣也是基於 Flux 架構的 library。在 Vuex 中，一個 App 包含，

- **State** - 單一對象狀態
  1. 狀態為 mutable
  2. 調用到該 state 的元件可以直接 mutate 以更新狀態
- **Mutation** - 為用於同步更新 state 資料的函數
  1. 與 Reducer 類似皆為同步操作
- **Action** - 為用於處理非同步更新及提交 muation 的函數，接收 context 做為參數，可用該 context 提交 mutaion 或派發別的 action
- **Getter** - 可用以計算 store 的狀態
- **Module** - 可將龐大的 store 切分成不同 module 管理，每個 module 都擁有自己的 state, mutation, action 以及 getter

#### 3-2
單向資料流指資料在一個 App 裡面，只能由父元件向子元件傳遞資料，子元件不能直接修改父元件的狀態，而是必須透過向父元件發送事件來更新狀態。
雙向資料流指資料在一個 App 裡面，可以由父元件向子元件傳遞資料，亦可由子元件向父元件傳遞，亦可直接改變父元件狀態。

#### 3-3
單向資料流的設計，主要是為了讓資料流可預測且清楚明瞭，使 developer 對於資料流的掌握度更高。
- **優點**
  - 資料流易於維護及除錯追蹤
  - 性能更好，不需持續監控數據的變化
- **缺點**
  - 需要撰寫不少 boilerplate code
  - 彈性更少，因為數據流只有定向流動

雙向資料流的設計，主要是為了資料流與 UI 的交互及響應性，讓 App 可以及時反應 user 的操作。
- **優點**
  - 開發人員可以撰寫更少 code
  - 專注在數據更即時的 UI 反應上
- **缺點**
  - 當 App 非常龐大的時候，資料流難以維護及除錯
  - 性能可能較低，因為需要持續監控數據的變化