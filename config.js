// =============================================================
//  إعدادات مَسار — راجع ملف README.md (الخطوة 3)
//
//  اترك قيم firebase فارغة ليعمل النظام في "الوضع المحلي" (للتجربة فقط).
// =============================================================
window.MASAR_CONFIG = {
  // بريد المدير المالي (مالك النظام). لأن المستودع عام، لا يُكتب البريد هنا نصاً،
  // بل بصمته (SHA-256) للبريد بأحرف صغيرة. ويمكن بدلاً من ذلك كتابته صراحةً في ownerEmail.
  ownerEmail: "",
  ownerEmailSha256: "630dc85e778590f0ce07d8b86c2dc8dfc4f8caa19b869f1959c9361a63dd8dbc",

  // من: Firebase Console ← Project settings ← Your apps ← Config
  firebase: {
    apiKey: "AIzaSyBn9wopg56m9mNDdVs1NRtBq0uPrF8VM-0",
    authDomain: "to-do-today-7e19e.firebaseapp.com",
    projectId: "to-do-today-7e19e",
    storageBucket: "to-do-today-7e19e.firebasestorage.app",
    messagingSenderId: "204271972911",
    appId: "1:204271972911:web:fb2fcbcbd15f3afe178cda"
  }
};
