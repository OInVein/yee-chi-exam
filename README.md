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

- Action - 事件觸發
- Dispatcher - 發送區，接收到 Actions，並發送到 Store 更新狀態
- Store - 負責管理整個 App 的狀態
  1. 可以有多個 store
  2. 狀態為 mutable
- View - 視圖

Redux 是基於 Flux 架構的 library。在 Redux 中，一個 App 包含，

- Action - 事件觸發
- Reducer - 為 pure function, 根據 Action 更新狀態
- Store - 負責管理整個 App 的狀態
  1. 只能有 1 個 store
  2. 狀態為 immutable
  3. 僅能透過 Reducer 派發來的 Action 來更新 store

Vuex 同樣也是基於 Flux 架構的 library。在 Vuex 中，一個 App 包含，

- State - 單一對象狀態
  1. 狀態為 mutable
  2. 調用到該 state 的元件可以直接 mutate 以更新狀態
- Mutation - 為用於同步更新 state 資料的函數
  1. 與 Reducer 類似皆為同步操作
- Action - 為用於處理非同步更新及提交 muation 的函數，接收 context 做為參數，可用該 context 提交 mutaion 或派發別的 action
- Getter - 可用以計算 store 的狀態
- Module - 可將龐大的 store 切分成不同 module 管理，每個 module 都擁有自己的 state, mutation, action 以及 getter
