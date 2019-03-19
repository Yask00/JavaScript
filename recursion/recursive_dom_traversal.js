let documentBody = document.body;

function recursiveRotation(el) {
    let childrenArray = Array.from(el.children);
    if (childrenArray.length > 0) {
        childrenArray.forEach(child => {
            rotateChilds(child);
            if (Array.from(child.children).length > 0) {
                
                Array.from(child.children).forEach(subChild => {
                    rotateChilds(subChild);
                    recursiveRotation(subChild);
                });
            }
        });
    } else {
        if(el.nextElementSibling) {
            recursiveRotation(el.nextElementSibling);
        }
    }
}

function rotateChilds (el) {
    Array.from(el.children).forEach((child, i) => {
        let switchSide = Math.round(Math.random());
        if(switchSide === 0) {
            if (isHTMLElement(child)) {
                rotateElementRight(child);
            }
        } else {
            if (isHTMLElement(child)) {
                rotateElementLeft(child);
            }
        }
    })
}

function isHTMLElement (el) {
    return el instanceof HTMLElement;
}

function rotateElementRight (el) {
    el.style.transform = 'scale(0.9)';
    el.style.transform = 'rotate(' + (Math.random() * 100) + 'deg)';
}

function rotateElementLeft (el) {
    el.style.transform = 'scale(0.9)';
    el.style.transform = 'rotate(' + (Math.random() * -100) + 'deg)';
}

recursiveRotation(documentBody);

