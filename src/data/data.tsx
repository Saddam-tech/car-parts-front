import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';

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
        { name: "CP-TECH", path: "cp-tech" },
        { name: "DOMO-BEARINGS", path: "domo-bearings" },
        { name: "ENGINE-OIL", path: "engine-oil" },
        { name: "RE-BUILT PARTS", path: "rebuild-parts" },
        { name: "COMMERCIAL PARTS", path: "commercial-parts" },
        { name: "OE & GENUINE PARTS", path: "oe&-genuine-parts" },
        { name: "PVC FLOORING", path: "pvc-flooring" },
    ]
}, {

    name: "CUSTOMER SERVICE", children: [
        { name: "NEWS & NOTICE", path: "news&notice" },
        { name: "SPECIAL ORDER & STOCK", path: "special-order&stock" },
        { name: "CATALOGUE DOWNLOAD", path: "catalogue-download" },
    ]
}, { name: "INQUIRY", children: [] }]


export const logo_box_data = [
    { name: "CP-TECH", img: "https://c8.alamy.com/comp/2EJ4W5T/logo-of-the-car-brand-mercedes-benz-mercedes-cutout-on-white-background-2EJ4W5T.jpg" },
    { name: "DOMO BEARINGS", img: "https://c8.alamy.com/comp/2EJ4W6F/logo-of-the-car-brand-subaru-free-space-on-white-background-2EJ4W6F.jpg" },
    { name: "ENGINE OIL", img: "https://c8.alamy.com/comp/2EJ4W4Y/logo-of-the-car-brand-skoda-free-space-on-white-background-2EJ4W4Y.jpg" },
    { name: "RE-BUILT PARTS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQsC-LLxj_3ez66957oLdPVfFPr2bJp55wQ&usqp=CAU" },
    { name: "COMMERCIAL PARTS", img: "https://c8.alamy.com/comp/2EJ4W5C/logo-of-the-car-brand-opel-free-space-on-white-background-2EJ4W5C.jpg" },
    { name: "OE & GENUINE PARTS", img: "https://c8.alamy.com/comp/2EJ4W6Y/logo-of-the-car-brand-mitsubishi-motors-free-space-on-white-background-2EJ4W6Y.jpg" }
]

export const box_info = {
    header: "box-info-h-1",
    content: "box-info-p-1",
    img_src: "https://t4.ftcdn.net/jpg/05/11/10/45/360_F_511104500_QgSrSsX7nwAW6j5vFPc4Ftwy0LhvJdYu.jpg"
}

export const map_coordinates = {
    posX: "37.552350958321",
    posY: "127.070906508666"
}

export const contact_info = [
    {
        icon: <LocationOnIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "ADDRESS",
        p: "32-11, Munbong-gil 62beon-gil, Ilsandong-gu, Goyang-si, Gyeonggi-do, South Korea. 10257"
    },
    {
        icon: <LocalPhoneIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "TEL",
        p: "+82-31-967-1500"
    },
    {
        icon: <FaxIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "FAX",
        p: "+82-31-967-2900"
    },
    {
        icon: <EmailIcon fontSize="large" sx={{ color: "#1CA2FE" }} />,
        header: "EMAIL",
        p: "wato@wato.co.kr"
    },
]

export const product_list_1 = [
    "ALTERNATOR & STARTER",
    "ELECTRIC COMPONENT PARTS",
    "WHEEL HUB ASSY",
    "AIR & OIL FILTER",
    "POWER STEERING GEAR",
    "POWER OIL PUMP",
    "SHOCK ABSORBER",
    "DRIVE SHAFT & BOOT KIT",
    "SUSPENSION PARTS",
    "GASKET KIT",
    "FUEL PUMP MODULE",
    "BRAKE PAD & SHOE",
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