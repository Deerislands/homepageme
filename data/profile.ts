export const navigationItems = [
  { id: 'home', label: '首頁' },
  { id: 'about', label: '關於我' },
  { id: 'career', label: '職涯測驗結果' },
  { id: 'job', label: '理想職缺' },
  { id: 'biography', label: '自傳與履歷' },
  { id: 'future', label: '未來規劃' },
  { id: 'contact', label: '聯絡方式' },
];

export const heroData = {
  chineseName: '鹿島浩市',
  englishName: 'Koichi Kashima',
  school: '靜宜大學',
  department: '資訊管理學系',
  grade: '二年級',
  tagline: '對資訊管理、系統管理與資料應用有興趣的學生',
  intro:
    '我目前就讀資訊管理學系，對企業內部資訊支援、系統管理、資料整理與資訊整合有濃厚興趣。希望透過課程學習、專案實作與技術累積，逐步朝 MIS 與資訊管理相關職位發展。',
  ctas: [
    { label: '查看履歷', href: '#resume' },
    { label: '查看理想職缺', href: '#job' },
  ],
};

export const aboutData = {
  basicInfo: [
    ['中文姓名', '鹿島浩市'] as [string, string],
    ['英文姓名', 'Koichi Kashima'] as [string, string],
    ['學校', '靜宜大學'] as [string, string],
    ['科系', '資訊管理學系'] as [string, string],
    ['年級', '二年級'] as [string, string],
    ['國籍', '日本'] as [string, string],
  ],
  studyBackground:
    '目前在台灣就讀大學，持續累積跨語言與跨文化學習經驗，並透過課程、專案與實習接觸，逐步建立資訊管理與流程改善相關基礎。',
  interests: ['MIS', '資訊管理', '系統管理', '資料處理', '基礎網路管理', '資訊整合'],
  traits: [
    '願意學習',
    '喜歡整理資訊',
    '對系統管理有興趣',
    '樂於分析問題',
    '願意持續累積技術能力',
    '具有跨語言溝通能力',
  ],
  skills: [
    'HTML / CSS：具備基本網頁排版與介面製作能力，可設計個人網站與表單型畫面',
    'JavaScript：可用於實作基礎互動功能，理解前端行為與資料處理邏輯',
    'Python：可進行資料整理、讀取、簡單分析與練習型專案開發',
    'Java：具備物件導向程式設計基礎，接觸過類別、繼承、例外處理、介面與抽象類別',
    'MySQL：了解資料表、基本查詢與資料庫概念，能理解資料管理基礎',
    'Flask：曾用於簡單網站或系統後端練習，理解 route、資料處理與前後端整合',
    'Google Apps Script（GAS）：了解如何搭配 Google Workspace 工具進行簡單自動化，對業務流程效率化有初步實作經驗',
    '資料整理與流程思考：對資訊分類、資料彙整與重複性工作的優化有興趣，並願意從實作中持續改進',
  ],
};

export const footerData = {
  name: '鹿島浩市',
  copyright: '© 2026 MIS職涯個人網站. 保留所有權利。',
  closing:
    '感謝您的瀏覽，我會持續累積資訊管理與系統整合能力，朝理想的 MIS 職涯前進。',
};
