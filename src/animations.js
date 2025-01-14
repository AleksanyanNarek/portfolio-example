export const pageAnimation = {
    hidden:{
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    },
}

export const slideFromRigth = {
    hidden: { 
        x: 200,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut", },
    },
}