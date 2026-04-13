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
    '目前在台灣就讀大學，持續累積跨語言與跨文化學習經驗，並從課程與專案中逐步建立資訊管理相關基礎。',
  interests: ['MIS', '系統管理', '資料處理', '基礎網路管理', '企業資訊支援'],
  traits: [
    '願意學習',
    '對資訊系統有興趣',
    '喜歡整理資訊與分析問題',
    '願意持續累積技術能力',
    '具有跨語言溝通能力',
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'MySQL', 'Flask', '基礎網路概念'],
};

export const footerData = {
  name: '鹿島浩市',
  copyright: '© 2026 MIS職涯個人網站. 保留所有權利。',
  closing:
    '感謝您的瀏覽，我會持續累積資訊管理與系統整合能力，朝理想的 MIS 職涯前進。',
};
