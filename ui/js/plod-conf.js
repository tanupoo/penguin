
const plod_locale = "ja";

/* header columns of listview */
const headers_base = [
    {
        "key": "dataSource",
        "notation": "情報の参照元",
        "list": false,
        "orderable": false
    },
    {
        "key": "publisher",
        "notation": "所轄の自治体名",
        "list": true,
        "orderable": true
    },
    {
        "key": "localId",
        "notation": "管理No.",
        "list": true,
        "orderable": true
    },
    {
        "key": "dateConfirmed",
        "notation": "患者の状態が確認された日付",
        "list": false,
        "orderable": true
    },
    {
        "key": "disease",
        "notation": "患者の病名",
        "list": true,
        "orderable": true
    },
    {
        "key": "age",
        "notation": "患者の年代",
        "list": true,
        "orderable": true
    },
    {
        "key": "gender",
        "notation": "患者の性別",
        "list": true,
        "orderable": true
    },
    {
        "key": "residence",
        "notation": "患者の居住地域",
        "list": true,
        "orderable": true
    },
    {
        "key": "closeContacts",
        "notation": "濃厚接触者情報",
        "list": false,
        "orderable": false
    },
    {
        "key": "reportId",
        "notation": "reportId",
        "list": true,
        "orderable": false
    },
];

const headers_PLH = [
    {
        "key": "departureDate",
        "notation": "出発日",
        "list": true,
    },
    {
        "key": "departureTime",
        "notation": "出発時間",
        "list": true,
    },
    {
        "key": "departureFrom",
        "notation": "出発地",
        "list": true,
    },
    {
        "key": "departureFromAnnex",
        "notation": "出発地備考",
        "list": true,
    },
    {
        "key": "arrivalDate",
        "notation": "到着日",
        "list": true,
    },
    {
        "key": "arrivalTime",
        "notation": "到着時間",
        "list": true,
    },
    {
        "key": "arrivalIn",
        "notation": "到着地",
        "list": true,
    },
    {
        "key": "arrivalInAnnex",
        "notation": "到着地備考",
        "list": true,
    },
    {
        "key": "vehicles",
        "notation": "移動方法(複数選択可)",
        "list": true,
    },
    {
        "key": "details",
        "notation": "所見や患者の行動等",
        "list": true,
    },
];

const headers_PCH = [
    {
        "key": "conditionDate",
        "notation": "日付",
        "list": true
    },
    {
        "key": "conditionTime",
        "notation": "時刻",
        "list": true
    },
    {
        "key": "conditions",
        "notation": "状態",
        "list": true
    },
    {
        "key": "details",
        "notation": "備考",
        "list": true
    }
];

/*
 * XXX need to align below structures of key/value data into above key/notation.
 */

/* age */
const ageList = [
    { "key":"0-9",  "value":"0s" },
    { "key":"10代", "value":"10s" },
    { "key":"20代", "value":"20s" },
    { "key":"30代", "value":"30s" },
    { "key":"40代", "value":"40s" },
    { "key":"50代", "value":"50s" },
    { "key":"60代", "value":"60s" },
    { "key":"70代", "value":"70s" },
    { "key":"80代", "value":"80s" },
    { "key":"90代", "value":"90s" },
    { "key":"不明", "value":"Unspecified" },
];

/* gender */
const genderList = [
    { "key":"男性", "value":"Male" },
    { "key":"女性", "value":"Female" },
    { "key":"不明", "value":"Unspecified" },
];

/* disease */
const diseaseList = [
    { "key":"新型コロナウイルス", "value":"COVID-2019" },
    { "key":"麻疹", "value":"Measles" },
    { "key":"その他", "value":"Other" },
];

/* patientCondition + name */
const patientConditionList = [
    { "notation": "倦怠感", "key": "Malaise", "group": 0 },
    { "notation": "喀痰", "key": "Sputum", "group": 0 },
    { "notation": "発熱", "key": "Fever", "group": 0 },
    { "notation": "悪寒", "key": "Chill", "group": 0 },
    { "notation": "咳", "key": "Cough", "group": 0 },
    { "notation": "鼻水", "key": "RunnyNose", "group": 0 },
    { "notation": "肺炎", "key": "Pneumonia", "group": 0 },
    { "notation": "陽性", "key": "Positive", "group": 1 },
    { "notation": "陰性", "key": "Negative", "group": 1 },
    { "notation": "入院", "key": "Hospitalized", "group": 2 },
    { "notation": "退院", "key": "Discharge", "group": 2 },
];

/* vehicles + name */
const vehiclesList = [
    { "notation": "タクシー", "key": "Taxi", "group": 0 },
    { "notation": "バス", "key": "Bus", "group": 0 },
    { "notation": "電車", "key": "Train", "group": 0 },
    { "notation": "飛行機", "key": "Airplane", "group": 0 },
    { "notation": "船", "key": "Ship", "group": 0 },
    { "notation": "徒歩", "key": "Walk", "group": 0 },
    { "notation": "自家用車", "key": "PrivateCar", "group": 1 },
    { "notation": "自転車", "key": "Bicycle", "group": 1 },
    { "notation": "バイク", "key": "MotorBike", "group": 1 },
    { "notation": "不明", "key": "Unknown", "group": 3 },
];

const time_list = [
    { "id": "Dawn", "text": "明け方", "inc": [
        {"id": "03:00", "text": "03:00"}, 
        {"id": "04:00", "text": "04:00"}, 
        {"id": "05:00", "text": "05:00"}, 
        {"id": "06:00", "text": "06:00"}, ] },
    { "id": "EarlyMorning", "text": "朝", "inc": [
        {"id": "05:00", "text": "05:00"}, 
        {"id": "06:00", "text": "06:00"}, 
        {"id": "07:00", "text": "07:00"}, 
        {"id": "08:00", "text": "08:00"}, 
        {"id": "09:00", "text": "09:00"}, ] },
    { "id": "Morning", "text": "午前", "inc": [
        {"id": "06:00", "text": "06:00"}, 
        {"id": "07:00", "text": "07:00"}, 
        {"id": "08:00", "text": "08:00"}, 
        {"id": "09:00", "text": "09:00"}, 
        {"id": "10:00", "text": "10:00"},
        {"id": "11:00", "text": "11:00"},
        {"id": "12:00", "text": "12:00"}, ] },
    { "id": "Noon", "text": "昼", "inc": [
        {"id": "12:00", "text": "12:00"}, 
        {"id": "13:00", "text": "13:00"},
        {"id": "14:00", "text": "14:00"}, ] },
    { "id": "Afternoon", "text": "午後", "inc": [
        {"id": "12:00", "text": "12:00"}, 
        {"id": "13:00", "text": "13:00"}, 
        {"id": "14:00", "text": "14:00"}, 
        {"id": "15:00", "text": "15:00"}, 
        {"id": "16:00", "text": "16:00"},
        {"id": "17:00", "text": "17:00"},
        {"id": "18:00", "text": "18:00"}, ] },
    { "id": "Evening", "text": "夕方", "inc": [
        {"id": "17:00", "text": "17:00"}, 
        {"id": "18:00", "text": "18:00"}, 
        {"id": "19:00", "text": "19:00"},
        {"id": "20:00", "text": "20:00"},
        {"id": "21:00", "text": "21:00"}, ] },
    { "id": "Night", "text": "夜", "inc": [
        {"id": "19:00", "text": "19:00"}, 
        {"id": "20:00", "text": "20:00"}, 
        {"id": "21:00", "text": "21:00"}, 
        {"id": "22:00", "text": "22:00"}, 
        {"id": "23:00", "text": "23:00"},
        {"id": "01:00", "text": "01:00"},
        {"id": "02:00", "text": "02:00"},
        {"id": "03:00", "text": "03:00"},
        {"id": "04:00", "text": "04:00"}, ] },
    { "id": "LateNight", "text": "深夜", "inc": [
        {"id": "23:00", "text": "23:00"}, 
        {"id": "24:00", "text": "24:00"}, 
        {"id": "01:00", "text": "01:00"}, 
        {"id": "02:00", "text": "02:00"}, 
        {"id": "03:00", "text": "03:00"}, ] },
    ]

const DEFAULT_PLOD = {
    "dataSource": "",
    "publisher": "厚労省",
    "publisherOthers": "",
    "localId": "",
    "disease": "COVID-2019",
    "diseaseOthers": "",
    "dateConfirmed": "",
    "age": "Unspecified",
    "gender": "Unspecified",
    "residence": "Unspecified",
    "residenceAnnex": "",
    "closeContacts": "",
    "locationHistory": [
    ],
    "conditionHistory": [
    ],
};

const M_PLACEHOLDER_SELECT_OTHER_AND_INPUT = "選択肢にない場合、その他を選んでから記述する。";
const M_PLACEHOLDER_DATASOURCE = "プレスリリースの場合はURLを入力する。";
const M_PLACEHOLDER_LOCATION_ANNEX = "建物名や駅名など、補足情報などがあれば入力する。";
const M_PLACEHOLDER_TIME = "可能ならば時刻を入力する。";
const M_PLACEHOLDER_PLH_DETAILS = "表記以外の移動手段、その他備考など自由記述。";
const M_PLACEHOLDER_PCH_DETAILS = "所見、患者の健康状態、検査機関、その他";
const M_PLACEHOLDER_LOCALID = "所轄で管理している識別子や検索用キーなどあれば入力する。";
const M_PLACEHOLDER_RESIDENCEANNEX = "補足情報などがあれば入力する。";
const M_PLACEHOLDER_CLOSECONTACTS = "濃厚接触者の情報を列挙する。記述方法は要検討。";

const M_BUTTON_DELETE_THIS = "←削除";
const M_BUTTON_ADD_ABOVE = "↑追加";

const M_CONFIRM_SUBMIT_DATA = "登録しますか？";
const M_CONFIRM_CANCEL_SUBMISSION = "取り消しますか？";
const M_CONFIRM_PLOD_FAILED_CREATION = "登録に失敗しました。";
const M_CONFIRM_PLOD_FAILED_DELETION = "削除に失敗しました。";
const M_CONFIRM_PLOD_CREATED = "登録されました。";
const M_CONFIRM_PLOD_DELETED = "削除されました。";
const M_CONFIRM_PLOD_ASK_DELETION = "削除しますか？";
const M_ALERT_SELECT_OTHERS_AND_INPUT = "その他のフィールドに値を入れる場合は、選択肢からその他を選択してください。";
const M_ALERT_SELECT_DATA = "データを選択してください。";

const SELECT_OPT_OTHER = { "id": "Other", "text": "その他" };
const SELECT_OPT_ABROAD = { "id": "Abroad", "text": "海外" };
const SELECT_OPT_UNSPECIFIED = { "id": "Unspecified", "text": "不明" };
const SELECT_OPT_JAPAN = { "id": "Japan", "text": "日本" };
const SELECT_OPT_MHLW = { "id": "厚労省", "text": "厚労省" };

