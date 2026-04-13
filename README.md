# MIS職涯個人網站（Vercel 提交優先版）

這是一個使用 `Next.js`、`TypeScript`、`Tailwind CSS` 製作的單頁式個人網站，內容以「資訊管理學系二年級學生」的職涯整理為主題，並以 **穩定、簡潔、最容易部署到 Vercel** 為最高優先。

## 專案位置

請確認你目前操作的專案根目錄是：

```bash
/Users/koichi/Desktop/VScode/資料
```

也就是執行 `pwd` 時，應該看到：

```bash
/Users/koichi/Desktop/VScode/資料
```

## 如何啟動專案

### 1. 進入專案資料夾

```bash
cd /Users/koichi/Desktop/VScode/資料
```

### 2. 安裝依賴

如果尚未安裝套件，先執行：

```bash
npm install
```

### 重要說明

本專案：

- 不使用後端
- 不使用資料庫
- 不使用 `.env`
- 不依賴外部 API
- 不需要登入系統
- 可直接部署到 Vercel

### 3. 啟動開發伺服器

```bash
npm run dev
```

看到類似以下訊息代表成功：

```bash
Local: http://localhost:3000
```

接著在瀏覽器打開：

```bash
http://localhost:3000
```

## 如果啟動失敗

### 情況一：出現 `Couldn't find any pages or app directory`

請先確認目前路徑是不是專案根目錄：

```bash
pwd
```

正確結果應為：

```bash
/Users/koichi/Desktop/VScode/資料
```

再確認是否有 `app` 資料夾：

```bash
ls app
```

應至少看到：

```bash
globals.css
layout.tsx
page.tsx
```

如果檔案都有，但仍出現錯誤，請清除快取後重開：

```bash
rm -rf .next
npm run dev
```

也可以改用：

```bash
npx next dev
```

### 情況二：3000 port 已被占用

可改用其他 port：

```bash
npx next dev -p 3001
```

然後打開：

```bash
http://localhost:3001
```

## 建置與正式啟動

### 建置專案

```bash
npm run build
```

### 以正式模式啟動

```bash
npm run start
```

## 專案結構

```bash
資料/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
├─ data/
│  ├─ profile.ts
│  ├─ career.ts
│  ├─ job.ts
│  ├─ resume.ts
│  ├─ futurePlan.ts
│  └─ contact.ts
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
└─ postcss.config.js
```

## 主要檔案說明

- `app/page.tsx`：首頁主頁面
- `app/layout.tsx`：全站 layout 與 metadata
- `app/globals.css`：全域樣式
- `components/`：各 section 與共用 UI 元件
- `data/`：網站內容資料，後續可直接改這裡更新內容

## Vercel 部署

本專案為標準 Next.js 結構，可直接部署到 Vercel。

部署前建議先在本機確認：

```bash
npm run build
```

## 備註

這個專案不是直接打開 `index.html` 的靜態網站，而是 `Next.js` 專案。
因此需要透過開發伺服器或部署後的網址來瀏覽畫面。
