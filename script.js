// ========================================
// 미양이네 다국어 설정
// ========================================

const translations = {

    // ====================================
    // 한국어
    // ====================================

    ko: {

        menu: "메뉴",
        liquor: "주류",
        set: "연맥 세트",
        side: "사이드",

        // 언어 선택
        language_title: "언어를 선택해주세요",
        language_text: "원하시는 언어를 선택해주세요.",

        // 이용 안내
        usage_title: "📌 이용 안내",

        usage_text:
            "기본 이용 시간은 <b>2시간</b> 입니다.<br>" +
            "테이블 및 불판이 많이 뜨겁습니다. " +
            "다리를 깊게 넣으시면 화상 위험이 있으니 " +
            "<b>주의</b> 부탁드립니다.",

        // 리필 안내
        refill_title: "🥩 리필 안내",

        refill_text:
            "리필을 원하실 경우 벨을 눌러 직원을 불러주세요!<br>" +
            "리필은 고기 지정이 <b>불가능</b>합니다.<br>" +
            "기본 리필에는 소세지 / 떡 / 새우 꼬치가 <b>포함되지 않습니다.</b><br>" +
            "원하시는 수량을 따로 말씀해주세요!!",

        // 셀프바
        selfbar_title: "🍴 셀프바 안내",

        selfbar_text:
            "기본 반찬 및 소스는 <b>셀프바</b>에서 이용하실 수 있습니다.<br>" +
            "라면은 셀프로 조리해서 드실 수 있습니다.<br>" +
            "다 드신 라면 냄비는 테이블에 두시거나 " +
            "직원에게 정리를 요청해주세요.<br>" +
            "<b>싱크대에 두시거나 버리지 말아주세요ㅠㅠ!!!!!!</b>",

        // 화장실
        bathroom_title: "🚻 화장실 안내",

        bathroom_text:
            "반층 올라가시면 미친양꼬치 전용 화장실이 있습니다!<br>" +
            "<b>입구 옆 냉장고에 붙어있는 비밀번호 확인</b>해주세요!!",

        // 문의
        contact_title: "📞 문의",

        contact_text:
            "궁금하신 사항은 직원에게 문의해주세요.",

        // 주문 팝업
        order_title: "📢 주문 안내",

        order_text:
            "주문은 직원을 불러주세요.",

        confirm: "확인",


        // ====================================
        // 메뉴
        // ====================================

        unlimited_lamb: "양꼬치 무한리필",

        unlimited_lamb_text:
            "양꼬치 + 목살꼬치 + 양삼겹꼬치 + 돈삼겹꼬치 + 소꼬치 + 소세지 / 떡 / 새우 꼬치",

        unlimited_lamb_price: "21,900원",

        no_pork_unlimited: "돼지빼고 무한리필",

        no_pork_unlimited_text:
            "양꼬치 + 양삼겹꼬치 + 소꼬치 + 소세지 / 떡 / 새우 꼬치",

        no_pork_unlimited_price: "25,900원",


        // ====================================
        // 주류
        // ====================================

        yantai_small: "연태고량 (소)",
        yantai_small_price: "15,000원",

        yantai_medium: "연태고량 (중)",
        yantai_medium_price: "25,000원",

        yantai_large: "연태고량 (대)",
        yantai_large_price: "45,000원",

        gongbugaju_small: "공부가주 (소)",
        gongbugaju_small_price: "30,000원",

        qingdao: "칭따오",
        qingdao_size: "640ml",
        qingdao_price: "8,000원",

        harbin: "하얼빈",
        harbin_size: "500ml",

        soju: "소주",
        soju_detail: "참이슬 · 처음처럼 · 진로 · 새로",
        soju_price: "6,000원",

        beer: "맥주",
        beer_detail: "카스 / 테라",
        beer_price: "6,000원",

        non_alcoholic_beer: "무알콜 맥주",
        non_alcoholic_beer_price: "3,000원",

        drinks: "음료수",

        drinks_detail:
            "콜라(일반/제로) · 사이다(일반/제로) · 환타(오렌지/파인)",

        drinks_price: "2,000원",


        // ====================================
        // 연맥 세트
        // ====================================

        set1_text:
            "연태(소)<br>" +
            "+ 칭따오 대용량 640ml 1병<br>" +
            "+ 음료 1",

        set1_price: "22,000원",

        set2_text:
            "연태(중)<br>" +
            "+ 칭따오 대용량 640ml 2병<br>" +
            "+ 음료 1",

        set2_price: "40,000원",

        set3_text:
            "연태(대)<br>" +
            "+ 칭따오 대용량 640ml 3병<br>" +
            "+ 음료 1",

        set3_price: "70,000원",


        // ====================================
        // 사이드
        // ====================================

        pineapple_sherbet: "파인애플 샤베트",
        pineapple_sherbet_price: "6,900원"
    },


    // ====================================
    // 중국어
    // ====================================

    zh: {

        menu: "菜单",
        liquor: "酒水",
        set: "套餐",
        side: "小菜",

        // 언어 선택
        language_title: "请选择语言",
        language_text: "请选择您想使用的语言。",

        // 이용 안내
        usage_title: "📌 使用须知",

        usage_text:
            "基本用餐时间为 <b>2小时</b>。<br>" +
            "桌子和烤盘温度很高，" +
            "请注意不要将腿伸得太深，以免烫伤。",

        // 리필 안내
        refill_title: "🥩 续盘说明",

        refill_text:
            "如果需要续盘，请按铃叫工作人员！<br>" +
            "续盘时<b>无法指定肉类</b>。<br>" +
            "基本续盘不包含香肠、年糕和虾串。<br>" +
            "如有需要，请另外告知工作人员数量！",

        // 셀프바
        selfbar_title: "🍴 自助区",

        selfbar_text:
            "基本小菜和酱料可以在<b>自助区</b>使用。<br>" +
            "拉面可以自行烹饪。<br>" +
            "吃完拉面后，请将锅放在桌上或请工作人员帮忙收拾。<br>" +
            "<b>请不要将锅放入水槽或直接丢弃ㅠㅠ!!!!!!</b>",

        // 화장실
        bathroom_title: "🚻 洗手间",

        bathroom_text:
            "上半层楼梯后有米亲羊肉串专用洗手间！<br>" +
            "请确认<b>入口旁冰箱上贴着的密码</b>。",

        // 문의
        contact_title: "📞 咨询",

        contact_text:
            "如有任何疑问，请咨询工作人员。",

        // 주문 팝업
        order_title: "📢 点餐",

        order_text:
            "点餐请呼叫工作人员。",

        confirm: "确认",


        // ====================================
        // 메뉴
        // ====================================

        unlimited_lamb: "羊肉串无限续",

        unlimited_lamb_text:
            "羊肉串 + 羊肩肉串 + 羊五花肉串 + 猪五花肉串 + 牛肉串 + 香肠 / 年糕 / 虾串",

        unlimited_lamb_price: "21,900韩元",

        no_pork_unlimited: "不含猪肉无限续",

        no_pork_unlimited_text:
            "羊肉串 + 羊五花肉串 + 牛肉串 + 香肠 / 年糕 / 虾串",

        no_pork_unlimited_price: "25,900韩元",


        // ====================================
        // 주류
        // ====================================

        // ★ 연태고량 → 烟台古酿
        yantai_small: "烟台古酿（小）",
        yantai_small_price: "15,000韩元",

        yantai_medium: "烟台古酿（中）",
        yantai_medium_price: "25,000韩元",

        yantai_large: "烟台古酿（大）",
        yantai_large_price: "45,000韩元",

        gongbugaju_small: "孔府家酒（小）",
        gongbugaju_small_price: "30,000韩元",

        qingdao: "青岛啤酒",
        qingdao_size: "640ml",
        qingdao_price: "8,000韩元",

        harbin: "哈尔滨啤酒",
        harbin_size: "500ml",

        soju: "烧酒",
        soju_detail: "真露 · 初饮初乐 · Jinro · Saero",
        soju_price: "6,000韩元",

        beer: "啤酒",
        beer_detail: "Cass / Terra",
        beer_price: "6,000韩元",

        non_alcoholic_beer: "无酒精啤酒",
        non_alcoholic_beer_price: "3,000韩元",

        drinks: "饮料",

        drinks_detail:
            "可乐（普通/无糖） · 七喜（普通/无糖） · 芬达（橙味/菠萝味）",

        drinks_price: "2,000韩元",


        // ====================================
        // 연맥 세트
        // ====================================

        set1_text:
            "烟台古酿（小）<br>" +
            "+ 青岛大瓶 640ml 1瓶<br>" +
            "+ 饮料 1杯",

        set1_price: "22,000韩元",

        set2_text:
            "烟台古酿（中）<br>" +
            "+ 青岛大瓶 640ml 2瓶<br>" +
            "+ 饮料 1杯",

        set2_price: "40,000韩元",

        set3_text:
            "烟台古酿（大）<br>" +
            "+ 青岛大瓶 640ml 3瓶<br>" +
            "+ 饮料 1杯",

        set3_price: "70,000韩元",


        // ====================================
        // 사이드
        // ====================================

        pineapple_sherbet: "菠萝冰沙",
        pineapple_sherbet_price: "6,900韩元"
    },


    // ====================================
    // 영어
    // ====================================

    en: {

        menu: "Menu",
        liquor: "Drinks",
        set: "Combo Sets",
        side: "Side Dishes",

        // 언어 선택
        language_title: "Please select a language",
        language_text: "Please select your preferred language.",

        // 이용 안내
        usage_title: "📌 Information",

        usage_text:
            "The basic dining time is <b>2 hours</b>.<br>" +
            "The table and grill are very hot. " +
            "Please be careful not to put your legs too far underneath the table.",

        // 리필 안내
        refill_title: "🥩 Refill Information",

        refill_text:
            "If you would like a refill, please press the bell to call a staff member!<br>" +
            "You <b>cannot choose specific types of meat</b> for refills.<br>" +
            "Basic refills do not include sausages, rice cakes, or shrimp skewers.<br>" +
            "Please tell a staff member the quantity you would like separately!",

        // 셀프바
        selfbar_title: "🍴 Self-Service Bar",

        selfbar_text:
            "Basic side dishes and sauces are available at the <b>self-service bar</b>.<br>" +
            "You can cook ramen yourself.<br>" +
            "After eating, please leave the pot on the table or ask a staff member to clean it.<br>" +
            "<b>Please do not put the pot in the sink or throw it away.ㅠㅠ!!!!!!</b>",

        // 화장실
        bathroom_title: "🚻 Restroom",

        bathroom_text:
            "The restaurant's restroom is located half a floor up!<br>" +
            "Please check the <b>password attached to the refrigerator next to the entrance</b>.",

        // 문의
        contact_title: "📞 Contact",

        contact_text:
            "If you have any questions, please ask a staff member.",

        // 주문 팝업
        order_title: "📢 Ordering",

        order_text:
            "Please call a staff member to place your order.",

        confirm: "OK",


        // ====================================
        // 메뉴
        // ====================================

        unlimited_lamb: "All-You-Can-Eat Lamb Skewers",

        unlimited_lamb_text:
            "Lamb skewers + Lamb shoulder skewers + Lamb belly skewers + Pork belly skewers + Beef skewers + Sausage / Rice cake / Shrimp skewers",

        unlimited_lamb_price: "21,900 KRW",

        no_pork_unlimited: "All-You-Can-Eat Without Pork",

        no_pork_unlimited_text:
            "Lamb skewers + Lamb belly skewers + Beef skewers + Sausage / Rice cake / Shrimp skewers",

        no_pork_unlimited_price: "25,900 KRW",


        // ====================================
        // 주류
        // ====================================

        yantai_small: "Yantai Kaoliang (Small)",
        yantai_small_price: "15,000 KRW",

        yantai_medium: "Yantai Kaoliang (Medium)",
        yantai_medium_price: "25,000 KRW",

        yantai_large: "Yantai Kaoliang (Large)",
        yantai_large_price: "45,000 KRW",

        gongbugaju_small: "Gongfu Jiajiu (Small)",
        gongbugaju_small_price: "30,000 KRW",

        qingdao: "Tsingtao",
        qingdao_size: "640ml",
        qingdao_price: "8,000 KRW",

        harbin: "Harbin Beer",
        harbin_size: "500ml",

        soju: "Soju",
        soju_detail: "Chamisul · Cheoeumcheoreom · Jinro · Saero",
        soju_price: "6,000 KRW",

        beer: "Beer",
        beer_detail: "Cass / Terra",
        beer_price: "6,000 KRW",

        non_alcoholic_beer: "Non-Alcoholic Beer",
        non_alcoholic_beer_price: "3,000 KRW",

        drinks: "Soft Drinks",

        drinks_detail:
            "Coke (Regular/Zero) · Cider (Regular/Zero) · Fanta (Orange/Pineapple)",

        drinks_price: "2,000 KRW",


        // ====================================
        // 연맥 세트
        // ====================================

        set1_text:
            "Yantai Kaoliang (Small)<br>" +
            "+ Tsingtao 640ml 1 bottle<br>" +
            "+ 1 drink",

        set1_price: "22,000 KRW",

        set2_text:
            "Yantai Kaoliang (Medium)<br>" +
            "+ Tsingtao 640ml 2 bottles<br>" +
            "+ 1 drink",

        set2_price: "40,000 KRW",

        set3_text:
            "Yantai Kaoliang (Large)<br>" +
            "+ Tsingtao 640ml 3 bottles<br>" +
            "+ 1 drink",

        set3_price: "70,000 KRW",


        // ====================================
        // 사이드
        // ====================================

        pineapple_sherbet: "Pineapple Sherbet",
        pineapple_sherbet_price: "6,900 KRW"
    }

};


// ========================================
// 언어 적용
// ========================================

function applyLanguage(language) {

    const texts = translations[language];

    if (!texts) {
        return;
    }

    // data-i18n이 붙은 요소 번역
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (texts[key] !== undefined) {
            element.innerHTML = texts[key];
        }

    });

    // HTML 언어 설정
    document.documentElement.lang = language;


    // ====================================
    // 주문 팝업
    // ====================================

    const orderTitle = document.getElementById("orderTitle");
    const orderText = document.getElementById("orderText");
    const closeButton = document.querySelector(".close-button");

    if (orderTitle) {
        orderTitle.innerHTML = texts.order_title;
    }

    if (orderText) {
        orderText.innerHTML = texts.order_text;
    }

    if (closeButton) {
        closeButton.innerHTML = texts.confirm;
    }

}


// ========================================
// 언어 선택
// ========================================

function selectLanguage(language) {

    // 선택한 언어 저장
    localStorage.setItem("miyangLanguage", language);

    // 언어 적용
    applyLanguage(language);

    // 언어 선택 팝업 닫기
    const languageModal = document.getElementById("languageModal");

    if (languageModal) {
        languageModal.style.display = "none";
    }

    // 언어 선택 후 주문 팝업
    setTimeout(() => {
        showOrderModal();
    }, 300);

}


// ========================================
// 주문 팝업
// ========================================

function showOrderModal() {

    const orderModal = document.getElementById("orderModal");

    if (orderModal) {
        orderModal.style.display = "flex";
    }

}


function closeOrderModal() {

    const orderModal = document.getElementById("orderModal");

    if (orderModal) {
        orderModal.style.display = "none";
    }

}


// ========================================
// 페이지 시작
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const savedLanguage = localStorage.getItem("miyangLanguage");

    const languageModal = document.getElementById("languageModal");


    // ====================================
    // 이미 언어를 선택한 경우
    // ====================================

    if (savedLanguage) {

        applyLanguage(savedLanguage);

        // 페이지 들어올 때마다 주문 팝업
        setTimeout(() => {
            showOrderModal();
        }, 500);

    }


    // ====================================
    // 처음 방문한 경우
    // ====================================

    else {

        // main.html에서 언어 선택
        if (languageModal) {

            languageModal.style.display = "flex";

        }

    }

});