export function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith1 = tuplePairCreator(1);
const val = toTupleWith1(2); // [number, number]
const val2 = toTupleWith1('score'); // [number, string]
// ----------------------------------------------------------------
export function createMap(list) {
    return function (cb) {
        const result = [];
        for (const el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3]);
const result = mapNums(num => num + 2);
class SlashX {
    constructor(options) {
        this.options = options;
        if (!options.items.left || !options.items.right) {
            throw new Error('Left and right banner elements must be provided');
        }
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.container.style.width = `${options.size.width}px`;
        this.container.style.height = `${options.size.height}px`;
        this.container.style.overflow = 'hidden';
        this.slashElement = document.createElement('div');
        this.slashElement.style.position = 'absolute';
        this.slashElement.style.zIndex = '10';
        this.slashElement.style.width = `${options.slash.thickness}px`;
        this.slashElement.style.height = '100%';
        this.slashElement.style.backgroundColor = options.slash.color;
        this.leftBanner = options.items.left;
        this.rightBanner = options.items.right;
        this.container.appendChild(this.leftBanner);
        this.container.appendChild(this.slashElement);
        this.container.appendChild(this.rightBanner);
        this.setupEventListeners();
    }
    setupEventListeners() {
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    updateSlashPosition(xPos) {
        const slashWidth = this.slashElement.offsetWidth;
        const containerWidth = this.container.offsetWidth;
        const leftPosition = Math.min(Math.max(xPos - slashWidth / 2, 0), containerWidth - slashWidth);
        const rightPosition = containerWidth - leftPosition - slashWidth;
        this.slashElement.style.left = `${leftPosition}px`;
        const leftBannerWidth = (leftPosition / containerWidth) * 100;
        const rightBannerWidth = (rightPosition / containerWidth) * 100;
        this.leftBanner.style.width = `${leftBannerWidth}%`;
        this.rightBanner.style.width = `${rightBannerWidth}%`;
        const rightBannerPosition = (leftPosition + slashWidth) / containerWidth * 100;
        this.rightBanner.style.left = `${rightBannerPosition}%`;
    }
    onMouseMove(event) {
        const xPos = event.clientX - this.container.getBoundingClientRect().left;
        this.updateSlashPosition(xPos);
    }
    getContainer() {
        return this.container;
    }
}
// Example
const slashOptionsX = {
    size: { width: 300, height: 250 },
    items: {
        left: document.createElement('div'),
        right: document.createElement('div')
    },
    slash: { color: 'red', thickness: 4 }
};
const bannerStyleX = `
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;
slashOptionsX.items.left.setAttribute('style', bannerStyleX);
slashOptionsX.items.right.setAttribute('style', bannerStyleX);
const rightImgUrlX = 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const leftImgUrlX = 'https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
slashOptionsX.items.left.innerHTML = `<img src="${leftImgUrlX}" style="width: 100%; height: 100%;" />`;
slashOptionsX.items.right.innerHTML = `<img src="${rightImgUrlX}" style="width: 100%; height: 100%;" />`;
const slashX = new SlashX(slashOptionsX);
document.body.appendChild(slashX.getContainer());
const imgUrl = 'https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
class Slash {
    constructor(options) {
        this.slashOptions = options;
        this.container = document.createElement('div');
        this.slashLine = document.createElement('div');
        this.leftBanner = this.slashOptions.items.left;
        this.rightBanner = this.slashOptions.items.right;
        this.delta = 0;
        this.isDragging = false;
        this.initElements();
        this.setupStyles();
        this.setupEventListeners();
    }
    initElements() {
        this.container.appendChild(this.leftBanner);
        this.container.appendChild(this.rightBanner);
        this.container.appendChild(this.slashLine);
    }
    setupStyles() {
        const { width, height } = this.slashOptions.size;
        this.container.style.position = 'relative';
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        this.container.style.overflow = 'hidden';
        this.slashLine.style.position = 'absolute';
        this.slashLine.style.top = '0';
        this.slashLine.style.zIndex = '10';
        this.slashLine.style.backgroundColor = this.slashOptions.slash.color;
        this.slashLine.style.width = `${this.slashOptions.slash.thickness}px`;
        this.slashLine.style.height = '100%';
        this.slashLine.style.cursor = 'e-resize';
        const bannerStyleRight = `
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(0%);
            z-index: 2;
            width: 100%;
            height: 100%;
            white-space: nowrap;
            overflow: hidden;
        `;
        const bannerStyleLeft = `
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            white-space: nowrap;
            overflow: hidden;
        `;
        this.leftBanner.style.cssText = bannerStyleLeft;
        this.rightBanner.style.cssText = bannerStyleRight;
    }
    setupEventListeners() {
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.container.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.slashLine.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.container.addEventListener('touchstart', this.onTouchStart.bind(this));
    }
    onMouseMove(e) {
        if (this.isDragging) {
            const containerRect = this.container.getBoundingClientRect();
            let mouseX = e.clientX - containerRect.left;
            const containerWidth = this.container.offsetWidth;
            mouseX = Math.max(0, Math.min(containerWidth - this.slashOptions.slash.thickness, mouseX));
            this.delta = mouseX;
            this.slashLine.style.left = mouseX + 'px';
            this.leftBanner.style.width = `${mouseX}px`;
            this.rightBanner.style.width = `${containerWidth - mouseX}px`;
            this.rightBanner.style.left = `${mouseX}px`;
        }
    }
    onMouseDown(e) {
        e.preventDefault();
        this.isDragging = true;
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    onMouseUp() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    }
    onTouchStart(e) {
        e.preventDefault();
        this.isDragging = true;
        document.addEventListener('touchmove', this.onTouchMove.bind(this));
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
    }
    onTouchMove(e) {
        if (this.isDragging) {
            const containerRect = this.container.getBoundingClientRect();
            const touchX = e.touches[0].clientX - containerRect.left;
            const containerWidth = this.container.offsetWidth;
            this.delta = touchX;
            this.slashLine.style.left = touchX + 'px';
            this.leftBanner.style.width = `${touchX}px`;
            this.rightBanner.style.width = `${containerWidth - touchX}px`;
            this.rightBanner.style.left = `${touchX}px`;
        }
    }
    onTouchEnd() {
        this.isDragging = false;
        document.removeEventListener('touchmove', this.onTouchMove.bind(this));
        document.removeEventListener('touchend', this.onTouchEnd.bind(this));
    }
    getContainer() {
        return this.container;
    }
}
// Usage
const options = {
    size: { width: 300, height: 250 },
    items: {
        left: document.createElement('div'),
        right: document.createElement('div'),
    },
    slash: {
        color: '#ffffff',
        thickness: 4,
    },
};
const bannerStyleRight = `
    height: 100%;
    background-image: url(${imgUrl}); 
    background-repeat: no-repeat; 
    background-position: right center; 
    background-size: cover; 
`;
const bannerStyleLeft = `
    height: 100%;
    background-image: url(${imgUrl}); 
    background-repeat: no-repeat; 
    background-position: left center; 
    background-size: cover; 
`;
const bannerStyleTop = `
    width: 100%;
    padding: 4px 10px;
    font-size: 12px;
    background-color: #7bbe9a;
    overflow: hidden;
`;
const bannerLStyleTop = `
    width: 100%;
    padding: 4px 10px;
    font-size: 12px;
    background-color: #686965;
    overflow: hidden;
`;
options.items.right.innerHTML = `
<div style="${bannerStyleRight}">
        <p style="${bannerStyleTop}">
        Meets the power to recline
        </p>
        </div>
`;
options.items.left.innerHTML = `
<div style="${bannerStyleLeft}">
<p style="${bannerLStyleTop}">
The power to turn heads
</p>
</div>
`;
const slashInstance = new Slash(options);
document.body.appendChild(slashInstance.getContainer());
// options.items.left.innerText = `The power to turn heads`;
// options.items.right.innerText = `The power to turn heads`;
// if (globalContainer !== null) {
//     (globalContainer as HTMLElement).style.background = `url(${imgUrl}) no-repeat center center / cover`;
//     document.body.appendChild(globalContainer);
// }
// if (this.container) {
//     globalContainer = this.container
// }
//# sourceMappingURL=07-type-scope.js.map