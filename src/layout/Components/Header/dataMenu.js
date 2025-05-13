const MENU_ITEMS = [
    {
        icon: <i className="fa-solid fa-earth-americas"></i>,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese'
                }
            ]
        }
    },
    {
        icon: <i className="fa-solid fa-circle-question"></i>,
        title: "Feedback and help",
        to: "/feeback"
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: "Keyboard shortcuts",
        to: ""
    }
]

export const userMenu = [
    {
        icon: <i className="fa-regular fa-user"></i>,
        title: "View profile",
        to: "/feeback"
    },
    {
        icon: <i className="fa-brands fa-bitcoin"></i>,
        title: "Get coins",
        to: "/feeback"
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        title: "Settings",
        to: "/feeback"
    },
    ...MENU_ITEMS,
    {
        icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
        title: "Sign out",
        to: "/feeback",
        separate: true
    },
]

export default MENU_ITEMS