import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';

import flag_sa from "../assets/images/flag-sa.png"
import flag_sk from "../assets/images/sk-flag.png"
import flag_gb from "../assets/images/english-flag.png"
import flag_uzb from "../assets/images/flag-uz.png"
import flag_ru from "../assets/images/flag-ru.png"

export const version = "0.0.3";

export const navigation = [{

    name: "COMPANY", children: [
        { name: "ABOUT US", path: "aboutus" },
        { name: "ORGANIZATION & PARTNERS", path: "org&prtns" },
        { name: "HISTORY", path: "history" },
        { name: "PATENT & CERTIFICATION", path: "patent&cert" },
        { name: "CONTACT US", path: "contactus" },
    ]
}, {

    name: "PRODUCTS", children: [
        { name: "SUSPENSION PARTS", path: "suspension-parts" },
        { name: "DOMO-BEARINGS", path: "domo-bearings" },
        { name: "ENGINE PARTS", path: "engine-parts" },
        // { name: "RE-BUILT PARTS", path: "rebuild-parts" },
        // { name: "COMMERCIAL PARTS", path: "commercial-parts" },
        // { name: "OE & GENUINE PARTS", path: "oe&-genuine-parts" },
        // { name: "PVC FLOORING", path: "pvc-flooring" },
    ]
}, {

    name: "CUSTOMER SERVICE", children: [
        { name: "NEWS & NOTICE", path: "news&notice" },
        // { name: "SPECIAL ORDER & STOCK", path: "special-order&stock" },
        { name: "CATALOGUE DOWNLOAD", path: "catalogue-download" },
    ]
}, { name: "INQUIRY", children: [{ name: "Inquiry", path: "inquiry" },] },]


export const logo_box_data = [
    { name: "CP-TECH", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/KIA_motors.png/1024px-KIA_motors.png" },
    { name: "DOMO BEARINGS", img: "https://logodownload.org/wp-content/uploads/2019/08/gm-motors-logo-0.png" },
    { name: "ENGINE OIL", img: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png" },
    { name: "RE-BUILT PARTS", img: "https://www.pngmart.com/files/22/Hyundai-Logo-PNG-HD-Isolated.png" },
    // { name: "COMMERCIAL PARTS", img: "https://c8.alamy.com/comp/2EJ4W5C/logo-of-the-car-brand-opel-free-space-on-white-background-2EJ4W5C.jpg" },
    // { name: "OE & GENUINE PARTS", img: "https://c8.alamy.com/comp/2EJ4W6Y/logo-of-the-car-brand-mitsubishi-motors-free-space-on-white-background-2EJ4W6Y.jpg" }
]

export const box_info = [
    {
        header: "box-info-h-1",
        content: "box-info-p-1",
        img_src: "aboutus-0"
    },
    {
        header: "box-info-h-2",
        content: "box-info-p-2",
        img_src: "aboutus-1"
    },
    {
        header: "box-info-h-3",
        content: "box-info-p-3",
        img_src: "aboutus-2"
    },
]

export const map_coordinates = {
    posX: "37.5641159325404",
    posY: "127.057985766197"
}

export const contact_info = [
    {
        icon: <LocationOnIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "ADDRESS",
        p: "Korea: 서울 동대문구 답십리동 961-9 | Uzbekistan: Toshkent shahar Sergili tumani, Sergeli mashina bozori, 2.4.-Blok 22-magazin",
        link: ""
    },
    {
        icon: <LocalPhoneIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "TEL",
        p: "Korea: 02 6949 5745 | Uzbekistan: +998555005655, +998972550070",
        link: ""
    },
    {
        icon: <FaxIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "FAX",
        p: "Korea: 02 6949 5746",
        link: ""
    },
    {
        icon: <EmailIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "EMAIL",
        p: "boskos@naver.com | khon.uzbek@gmail.com",
        link: ""
    },
    {
        icon: <TelegramIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "TELEGRAM",
        p: "BOSKOS_UZ",
        link: "https://t.me/BOSKOS_UZ"
    },
    {
        icon: <InstagramIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "INSTAGRAM",
        p: "BOSKOS_UZ",
        link: "https://instagram.com/BOSKOS_UZ"
    },
]

export const product_list_1 = [
    "SHOCK ABSORBER",
    "BALL JOINT",
    "COIL SPRING",
    "POWER STEERING GEAR",
    "RACK END",
    "TIE ROD END",
    "WHEEL HUB ASSY",
    "BRAKE PAD",
    "BRAKE SHOE",
    "STABILIZER LINK",
    "C.V JOINT",
    "BRAKE DISK",
]
export const product_list_2 = [
    "WHEEL-HUB BALL BEARING",
    "WHEEL-HUB BALL BEARING KIT",
    "WHEEL-HUB TAPER BEARING",
    "WHEEL-HUB TAPER BEARING KIT",
    "TIMING TENSIONER",
    "IDLER PULLEY",
    "CLUTCH RELEASE BEARING",
    "TIMING BELT KIT",
]

export const product_list_3 = [
    "CAMSHAFT",
    "CRANKSHAFT",
    "OIL PUMP",
    "CYLINDER HEAD",
    "CONNECTING ROD",
    "HEAD GASKET",
    "CLUTCH RELEASE BEARING",
    "PISTON",
    "FUEL PUMP",
    "RADIATOR",
    "IGNITION COIL",
]

export const lng_params = [
    {
        name: "KOREAN",
        short_name: "kr",
        flag: flag_sk,
        prompt: "Korean"
    },
    {
        name: "ENGLISH",
        short_name: "en",
        flag: flag_gb,
        prompt: "English"
    },
    {
        name: "RUSSIAN",
        short_name: "ru",
        flag: flag_ru,
        prompt: "Russian"
    },
    {
        name: "ARABIC",
        short_name: "sa",
        flag: flag_sa,
        prompt: "Arabic"
    },
    {
        name: "UZBEK",
        short_name: "uz",
        flag: flag_uzb,
        prompt: "Uzbek"
    },

]
