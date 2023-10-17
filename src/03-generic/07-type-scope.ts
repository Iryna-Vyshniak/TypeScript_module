export function tuplePairCreator<T>(first: T) {
    return function <U>(second: U): [T, U] {
        return [first, second]
    }
}


const toTupleWith1 = tuplePairCreator(1)
const val = toTupleWith1(2) // [number, number]
const val2 = toTupleWith1('score') // [number, string]


// ----------------------------------------------------------------

export function createMap<T>(list: T[]) {
    return function <U>(cb: (x: T) => U): U[] {
        const result = [];

        for (const el of list) {
            result.push(cb(el))
        }

        return result;
    }
}


const mapNums = createMap([1, 2, 3])
const result = mapNums(num => num + 2)

// -----------------------------------------------------------------------

interface ISlashOptions {
    size: { width: number; height: number };
    items: { left: HTMLElement; right: HTMLElement };
    slash: { color: string; thickness: number };
}

interface HasHTMLContent {
    getContainer(): HTMLElement;
}

class SlashX implements HasHTMLContent {
    private container: HTMLElement;
    private slashElement: HTMLElement;
    private leftBanner: HTMLElement;
    private rightBanner: HTMLElement;

    constructor(private options: ISlashOptions) {
        if (!options.items.left || !options.items.right) {
            throw new Error('Left and right banner elements must be provided')
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

    private setupEventListeners() {
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    private updateSlashPosition(xPos: number) {
        const slashWidth = this.slashElement.offsetWidth;
        const containerWidth = this.container.offsetWidth;

        const leftPosition = Math.min(
            Math.max(xPos - slashWidth / 2, 0),
            containerWidth - slashWidth
        );
        const rightPosition = containerWidth - leftPosition - slashWidth;

        this.slashElement.style.left = `${leftPosition}px`;

        const leftBannerWidth = (leftPosition / containerWidth) * 100;
        const rightBannerWidth = (rightPosition / containerWidth) * 100;

        this.leftBanner.style.width = `${leftBannerWidth}%`;
        this.rightBanner.style.width = `${rightBannerWidth}%`;

        const rightBannerPosition = (leftPosition + slashWidth) / containerWidth * 100;
        this.rightBanner.style.left = `${rightBannerPosition}%`;
    }

    private onMouseMove(event: MouseEvent) {
        const xPos = event.clientX - this.container.getBoundingClientRect().left;
        this.updateSlashPosition(xPos);
    }

    public getContainer(): HTMLElement {
        return this.container;
    }
}

// Example
const slashOptionsX: ISlashOptions = {
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

const rightImgUrlX = 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
const leftImgUrlX = 'https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

slashOptionsX.items.left.innerHTML = `<img src="${leftImgUrlX}" style="width: 100%; height: 100%;" />`;
slashOptionsX.items.right.innerHTML = `<img src="${rightImgUrlX}" style="width: 100%; height: 100%;" />`;

const slashX = new SlashX(slashOptionsX);
document.body.appendChild(slashX.getContainer());



// -----------------------------------------------------------------------

//let globalContainer: HTMLElement | null = null;

interface SlashOptions {
    size: { width: number; height: number };
    items: { left: HTMLElement; right: HTMLElement };
    slash: { color: string; thickness: number };
}

interface HasHTMLContent {
    getContainer(): HTMLElement;
}

const imgUrl = 'https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

class Slash implements HasHTMLContent {
    private container: HTMLElement;
    private leftBanner: HTMLElement;
    private rightBanner: HTMLElement;

    private slashLine: HTMLElement;
    private slashOptions: SlashOptions;
    private delta: number;
    private isDragging: boolean;

    constructor(options: SlashOptions) {
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

    private initElements() {
        this.container.appendChild(this.leftBanner);
        this.container.appendChild(this.rightBanner);
        this.container.appendChild(this.slashLine);
    }

    private setupStyles() {
        const { width, height } = this.slashOptions.size;
        this.container.style.position = 'relative';
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        this.container.style.overflow = 'hidden';
        this.container.style.display = 'flex';

        this.slashLine.style.position = 'absolute';
        this.slashLine.style.top = '0';
        this.slashLine.style.zIndex = '10';
        this.slashLine.style.backgroundColor = this.slashOptions.slash.color;
        this.slashLine.style.width = `${this.slashOptions.slash.thickness}px`;
        this.slashLine.style.borderColor = `transparent`;
        this.slashLine.style.borderWidth = `12px`;
        this.slashLine.style.height = '100%';
        this.slashLine.style.cursor = 'e-resize';

        const bannerStyleRight = `
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
        `;

        const bannerStyleLeft = `
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;

            width: 100%;
            height: 100%;
        `;

        this.leftBanner.style.cssText = bannerStyleLeft;
        this.rightBanner.style.cssText = bannerStyleRight;
    }

    private setupEventListeners() {
        this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.container.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.slashLine.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.container.addEventListener('touchstart', this.onTouchStart.bind(this));
    }

    private onMouseMove(e: MouseEvent) {
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

    private onMouseDown(e: MouseEvent): void {
        e.preventDefault();
        this.isDragging = true;
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    private onMouseUp() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.onMouseMove.bind(this));
        document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    }


    private onTouchStart(e: TouchEvent) {
        e.preventDefault();
        this.isDragging = true;

        document.addEventListener('touchmove', this.onTouchMove.bind(this));
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
    }

    private onTouchMove(e: TouchEvent) {
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

    private onTouchEnd() {
        this.isDragging = false;

        document.removeEventListener('touchmove', this.onTouchMove.bind(this));
        document.removeEventListener('touchend', this.onTouchEnd.bind(this));
    }



    getContainer(): HTMLElement {
        return this.container;
    }
}

// Usage
const options: SlashOptions = {
    size: { width: 300, height: 250 },
    items: {
        left: document.createElement('div'),
        right: document.createElement('div'),
    },
    slash: {
        color: 'transparent',
        thickness: 4,
    },
};


const bannerWStyleRight = `
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
`;

const bannerWStyleLeft = `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    flex: 1;
    // or
    //transform: translateX(0%);

    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;

    overflow: hidden; 
`;

const imgStyleL = `
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
    overflow: hidden;
`;

const imgStyleR = `
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
`;


const bannerStyleTop = `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    margin: 0;
    width: 100%;
    padding: 4px 10px;
    font-size: 12px;
    background-color: #7bbe9a;
    
`;

const bannerLStyleTop = `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    margin: 0;
    width: 100%;
    padding: 4px 10px;
    font-size: 12px;
    background-color: #686965;
`;

options.items.right.innerHTML = `
<div style="${bannerWStyleRight}">
        <p style="${bannerStyleTop}">
            Meets the power to recline
        </p>
        <img src='${imgUrl}' alt='flat' style="${imgStyleR}">
</div>
`;

options.items.left.innerHTML = `
<div style="${bannerWStyleLeft}">
        <p style="${bannerLStyleTop}">
            The power to turn heads
        </p>
        <img src='${imgUrl}' alt='flat' style="${imgStyleL}">
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