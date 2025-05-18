const translations = {
  km: {
    sidebar1: `របៀប download និងតម្លើង`,
    sidebar2: "របៀប Setup Email Account",
    sidebar3: "របៀបប្តូរ Password",
    sidebar4: "របៀប setup google calendar",
    title: "របៀបតម្លើង និងការប្រើប្រាស់ Mozilla Thunderbird",
    download1: `1. ចូលទៅកាន់ website របស់ Mozilla Thunderbird (https://www.thunderbird.net/en-US/) នោះយើងនឹងឃើញ
                button មានពាក្យថា download មួយដូច្នេះយើងធ្វើការចុចលើវាដើម្បី
                download ជាការស្រេច។`,
    download2: `2. បន្ទាប់ពី download រួចធ្វើការស្វែងរក file exe ដែលយើងបាន
              download នោះរួច run file វានឹងលោតផ្ទាំងមួយសូមធ្វើការចុច yes។`,
    download3: `3. បន្ទាប់មកធ្វើការចុច next តាមដំណាក់កាលដែលគេបានដាក់បន្ទាប់មកយើងនឹងជួបផ្ទាំងមួយដែលយើងអាចរើសចង់បាន
                default setting ឬចង់ custom ខ្លួនឯង។`,
    download4: `4. ធ្វើការរើស drive ដែលយើងចង់ store soure file ទុក តែបើសិនគ្រាន់តែប្រើសម្រាប់តេស្តខ្ញុំសូមណែនាំឲ្យលុបធីកចេញវិញរួចធ្វើការចុច Install ជាការស្រេច។`,
    download5: `5. បន្ទាប់ពី Install រួចគ្រាន់តែចុចពាក្យ Finsh អ្នកអាចប្រើប្រាស់វាបាន។`,
    email1: `1. ធ្វើការបើក app រួចស្វែងរក tab Account Setup ដែលគេដាក់ឲ្យមកបន្ទាប់មកធ្វើការបំពេញព័ត៌មានរួចចុច continue បន្ទាប់មកវានិងបង្ហាញថា configuration success រួចចុច done។`,
    email2: `2. បន្ទាប់ពីចុច done នោះនឹងមាន pop up មួយលោតមកឲ្យយើងចូលទៅក្នុងគណនី google របស់យើងដើម្បី setup setting ផ្សេងៗ។`,
    email3: `3. នៅពេល login ចូលក្នុង google account របស់អ្នកនោះគេនឹងឲ្យយើងជ្រើសនូវ second verification ដើម្បីសុវត្ថិភាព បន្ទាប់មកទៀតធ្វើការចុច allow ដើម្បីអាចប្រើប្រាស់ email បាន។`,
    email4: `4. ដើម្បីបញ្ជាក់ថាយើងបង្កើត user account បានជោគជ័យចូលទៅកាន់ Account Setup បើឃើញ Account Successfully Created នោះអ្នកបង្កើតបានជោគជ័យហើយ។`,
    changepass1: `1. ចុចទៅលើរូបកូនសោរ`,
    changepass2: `2. បន្ទាប់ធ្វើការស្វែងរកពាក្យ password រួចចុច change primary password។`,
    changepass3: `3. នោះនឹងមាន popup មួយលោតមកដែលអាចឲ្យយើងប្តូរបានហើយ។`,
  },
  en: {
    sidebar1: "Download and Install",
    sidebar2: "Setup Email Account",
    sidebar3: "Change Password",
    sidebar4: "Setup google calendar",
    title: "Downloading and using Mozilla Thunderbird tutorial",
    download1: `1. First go to Mozilla Thunderbird website (https://www.thunderbird.net/en-US/), 
    you will see a download button, so click on that button the download will start.`,
    download2: `2. After finishing download go and find exe file that you download
              then run that exe file and one popup will appear and click yes.`,
    download3: `3. Click next and following the steps you will see one popup 
    which gives you two options such as default setting or custom your own setting to choose.`,
    download4: `4. Choose the drive that you want to store If you just testing the app I recommend to untick this and click install.`,
    download5: `5. After installing, just click Finish and you can use it.`,
    email1: `1. Open the app and then find Account Setup tab which is default tab, so you need to fill in the information and click continue, After that it will show configuration success and click done.`,
    email2: `2. There will be a pop up after you click done and it is for you to setup some settings if you want to.`,
    email3: `3. When you log into your account there will be some options for you to choose to set up second verification for security.Then, click allow to use your email in mozilla.`,
    email4: `4. To verify that you created user successfully go to Account Setup tab if you see Account Successfully Created means that you successfully created the account.`,
    changepass1: `1. click on setting`,
    changepass2: `2. After that search for password and click change primary password.`,
    changepass3: `3. There will be a popup that you can change your password.`,
  },
};
document.getElementById("switchlang").addEventListener("change", function () {
  const selectedLang = this.value;
  sessionStorage.setItem("selectedLang", selectedLang);
  switchLang(selectedLang);
});
function switchLang(lang) {
  document.querySelectorAll("[data-translate]").forEach((ele) => {
    const key = ele.getAttribute("data-translate");
    const translatedText = translations[lang][key];

    const textSpan = ele.querySelector(".translation-text");
    if (textSpan) {
      // Use span if it exists (for elements with icons, etc.)
      textSpan.textContent = translatedText;
    } else {
      // For plain elements, just set textContent
      ele.textContent = translatedText;
    }
  });
}
// switchLang("km");
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = sessionStorage.getItem("selectedLang") || "km";
  document.getElementById("switchlang").value = savedLang;
  switchLang(savedLang);
});
var activePage = window.location.pathname;
if (activePage.toString() == "/index.html") {
  document.getElementById("download").classList.add("active");
  document.getElementById("download-text").classList.add("test");
} else if (activePage.toString() == "/pages/email.html") {
  document.getElementById("email").classList.add("active");
  document.getElementById("email-text").classList.add("test");
} else if (activePage.toString() == "/pages/changepass.html") {
  document.getElementById("changepass").classList.add("active");
  document.getElementById("changepass-text").classList.add("test");
} 