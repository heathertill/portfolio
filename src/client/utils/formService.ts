

export const handleAnimation = (element: string, animate: boolean) => {
    const expandFunc = () => {
        let slide = document.querySelector(element);
        slide.classList.add('toggled');
        console.log('expand')
    }

    const closeFunc = () => {
        let slide = document.querySelector(element);
        slide.classList.remove('toggled');
        console.log('close')
    }

       
            if (animate !== true) {
                expandFunc()
            } else {
                closeFunc()
            }
        
    

}