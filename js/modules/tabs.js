function tabs(tabSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    
    let tabParent = document.querySelector (tabsParentSelector),
        tabButton = document.querySelectorAll(tabSelector),
        tabContent = document.querySelectorAll(tabsContentSelector);

    function hideTabs () {
    tabContent.forEach(item =>{
        item.style.display = 'none';
    });

    tabButton.forEach(item =>{
        item.classList.remove(activeClass);
    });
    }

    function showTabs (i = 0) {
    tabContent[i].style.display = 'block';
        
    tabButton[i].classList.add(activeClass);
    
    }
    hideTabs();
    showTabs();

    tabParent.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(tabSelector.slice(1))) {
        tabButton.forEach((btn, i) => {
            if(e.target == btn){
                hideTabs();
                showTabs(i);                
            }
        });
    }
    });
}

export default tabs;