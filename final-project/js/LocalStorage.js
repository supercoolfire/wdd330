export class LocalityStorageModel {
    constructor(parent) {
        this.parent = parent;
        this.parentElement = null;
    }
    init() {
        this.parentElement =  document.querySelector(this.parent);
    }

}
export class LocalController {
    constructor(listElement) {
        this.listElement = listElement;
        this.localModel = new LocalityStorageModel('history');
    }
    RenderView(list, element) {

    }

}

export function RenderView(list, element) {
    console.log(list);
    element.innerHTML = '';
  
    list.forEach(value => {
        const item = document.createElement('li');
        
    
        item.innerHTML = `${formattedDate}: ${value.value}`;
        element.appendChild(item);
      });
}
