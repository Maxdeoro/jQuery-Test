import {getResource} from '../services/services.js';

function placePhotos() {
    class Photos {
        constructor(src, alt, title, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        //Создание вёрстки
        render() {
            // console.log('render is OK');
            const element = document.createElement('div');
            if(this.classes.length === 0) {
                this.element = 'gallery_item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach((className) => {
                    element.classList.add(className);
                });
            }

            element.innerHTML = `
                                 <img src=${this.src} alt=${this.alt}>
                                 <h3 class='item_title'>${this.title}</h3>
                                `;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/photos') 
            .then (data => {
                data.forEach(obj => {
                    new Photos(obj.img, obj.altimg, obj.title, '.wrapper').render();
                });
            });
}

export default placePhotos;