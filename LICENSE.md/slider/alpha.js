try{
    jQuery = $;
}catch(e){
    console.log('jQuery doesnot exist');
}
var $ = function (selector) {
    if(selector.includes('#') && (!selector.includes(' ') || selector.includes(','))){
        var item = document.querySelector(selector);
        if(item){
            return item;
        }
        else{
            return [];
        }
    }
    else{
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }
};
String.prototype.title = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
create = function(element){
    return document.createElement(element);
};
log = function(log){
    console.log(log);
};
window.width = window.innerWidth;
Element.prototype.grid = function(){
    this.style.display = 'grid';
};
Element.prototype.next = function(){
    return this.nextElementSibling;
};
Element.prototype.prev = function(){
    return this.previousElementSibling;
};
Element.prototype.last = function(){
    return this.lastElementChild;
};
Element.prototype.active = function(){
    if(this.className.includes('active')){
        this.removeClass('active');
    }else{
        this.addClass('active');
    }
};
Element.prototype.parent = function(){
    return this.parentElement;
};
Element.prototype.find = function(selector){
    try{
        if(selector.includes('#') && (!selector.includes(' ') || selector.includes(','))){
            return this.querySelector(selector);
        }else{
            return Array.prototype.slice.call(this.querySelectorAll(selector));
        }
    }catch(e){
        log(e);
    }
};
Element.prototype.replace = function(n,o){
    this.replaceChild(n,o);
};
Element.prototype.append = function(child){
    if(child){this.appendChild(child);}
};
Element.prototype.before = function(child,before){
    if(child){
        if(!before)
            before = this.childNodes[0];
        else{
            before = this.childNodes[before];
        }
        this.insertBefore(child,before);
    }
};
Element.prototype.clear = function(){
    while(this.firstChild){
        this.removeChild(this.firstChild);
    }
};
Element.prototype.each = function(func){
    for(i=0;i<this.children.length;i++){
        func(this.children[i]);
    }
};
Element.prototype.attr = function(name){
    return this.getAttribute(name)
};
Element.prototype.get = function(name){
    return this.getAttribute(name)
};
Element.prototype.set = function(name,value){
    return this.setAttribute(name,value);
};
Element.prototype.removeAttr = function(name){
    return this.removeAttribute(name);
};
Element.prototype.html = function(html){
    if(html)
        this.innerHTML = html;
    else{
        return this.innerHTML;
    }
};
Element.prototype.first = function(){
    return this.firstElementChild;
};
Element.prototype.show = function(){
    this.style.display = 'block';
};
Element.prototype.hide = function(){
    this.style.display = 'none';
};
Element.prototype.addClass = function(name){
    this.className += ' ' + name;
};
Element.prototype.removeClass = function(name){
    this.className = this.className.replace(name,'');
};
Element.prototype.hasClass = function(name){
    if(this.className.includes(name))
        return true;
    else{
        return false
    }
};
Element.prototype.on = function(events,listener){
    events = events.split(' ');
    for(event in events){
        this.addEventListener(events[event],listener)
    }
};
Array.prototype.each = function(func){
    for(i=0;i < this.length;i++){
        func(this[i]);
    }
};
Array.prototype.next = function(){
    return this[0].nextElementSibling;
};
Array.prototype.on = function(event,listener,selector){
    events = event.split(' ');
    this.forEach(function(elem){
        for(event in events){
            elem.addEventListener(events[event],listener)
        }
    }) 
};
Array.prototype.append = function(child){
    this.forEach(function(elem){
        elem.append(child)
    })
};
Array.prototype.active = function(){
    this.forEach(function(elem){
        if(elem.className.includes('active')){
            elem.removeClass('active');
        }else{
            elem.addClass('active');
        }
    })
};
Array.prototype.before = function(child,before){
    this.forEach(function(elem){
        if(!before)
            before = elem.childNodes[0];
        else{
            before = elem.childNodes[before];
        }
        elem.insertBefore(child,before)
    })
};
Array.prototype.hasClass = function(name){
    if(this[0].className.includes(name))
        return true;
    else{
        return false
    }
};
Array.prototype.html = function(html){
    this.forEach(function(elem){
        elem.innerHTML = html;
    })
};
Array.prototype.set = function(name,value){
    this.forEach(function(elem){
        elem.setAttribute(name,value);
    })
};
Array.prototype.text = function(text){
    if(text){
        try{
            this[0].firstChild.nodeValue = text;
        }catch(e){
            t = document.createTextNode(text);
            this.append(t);
        }
    }
    else{
        try{
            return this[0].firstChild.nodeValue;
        }catch(e){
            return undefined;
        }
    }
};
Array.prototype.width = function(){
    return this[0].clientWidth;
};
Array.prototype.height = function(){
    return this[0].clientHeight;
};
Element.prototype.height = function(){
    return this.clientHeight;
};
Element.prototype.text = function(text){
    if(text){
        try{
            this.firstChild.nodeValue = text;
        }catch(e){
            t = document.createTextNode(text);
            this.append(t);
        }
    }
    else{
        return this.firstChild.nodeValue;
    }
};
Element.prototype.width = function(){
    return this.clientWidth;
};
Element.prototype.top = function(value){
    this.style['top'] = value;
};
Element.prototype.enable = function(){
    this.removeAttr('disabled');
};
Element.prototype.disable = function(){
    this.set('disabled','');
};
HTMLElement.prototype.css = function(attr,value){
    this.style[attr] = value;
};
function serialize(){
    var i, j, q = [];
    var data = new FormData();
    for (i = this.elements.length - 1; i >= 0; i = i - 1) {
        if (this.elements[i].name === "") {
            continue;
        }
        switch (this.elements[i].nodeName) {
        case 'INPUT':
            switch (this.elements[i].type) {
            case 'text':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'submit':
            case 'number':
            case 'date':
                if(this.elements[i].value)
                    data.append(this.elements[i].name, this.elements[i].value);
                break;
            case 'checkbox':
            case 'radio':
                if (this.elements[i].checked) {
                    data.append(this.elements[i].name, this.elements[i].value);
                }
                break;
            case 'file':
                file = this.elements[i].files[0];
                if(file){
                    data.append(file.name, file);
                }
                break;
            }
            break; 
        case 'TEXTAREA':
            if(this.elements[i].value)
                data.append(this.elements[i].name, this.elements[i].value);
            break;
        case 'SELECT':
            switch (this.elements[i].type) {
            case 'select-one':
                if(this.elements[i].value)
                    data.append(this.elements[i].name, this.elements[i].value);
                break;
            case 'select-multiple':
                for (j = this.elements[i].options.length - 1; j >= 0; j = j - 1) {
                    if (this.elements[i].options[j].selected) {
                        data.append(this.elements[i].name, this.elements[i].options[j].value);
                    }
                }
                break;
            }
            break;
        case 'BUTTON':
            switch (this.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
                data.append(this.elements[i].name, this.elements[i].value);
                break;
            }
            break;
        }
    }
    return data;
}
function serializeJSON(){
    var i, j, q = [];
    var data = {};
    for (i = this.elements.length - 1; i >= 0; i = i - 1) {
        if (this.elements[i].name === "") {
            continue;
        }
        switch (this.elements[i].nodeName) {
        case 'INPUT':
            switch (this.elements[i].type) {
            case 'text':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'submit':
            case 'number':
            case 'date':
            case 'email':
            case 'tel':
                if(this.elements[i].name.includes('[]') && this.elements[i].value){
                    name = this.elements[i].name.replace('[]','');
                    if(!data[name])
                        data[name] = [];
                    data[name].push(this.elements[i].value);
                }
                else if(this.elements[i].value)
                    data[this.elements[i].name] = this.elements[i].value;
                break;
            case 'checkbox':
            case 'radio':
                if (this.elements[i].checked) {
                    data[this.elements[i].name] = this.elements[i].value;
                }
                break;
            case 'file':
                if(this.elements[i].name == 'images'){
                    if(!data['images'])
                        data['images'] = [];
                    data['images'].push(this.elements[i].get('value'));
                }else{
                    data[this.elements[i].name] = this.elements[i].get('value');
                }
                break;
            }
            break; 
        case 'TEXTAREA':
            if(this.elements[i].value)
                data[this.elements[i].name] = this.elements[i].value;
            break;
        case 'SELECT':
            switch (this.elements[i].type) {
            case 'select-one':
                if(this.elements[i].name.includes('[]') && this.elements[i].value){
                    name = this.elements[i].name.replace('[]','');
                    if(!data[name])
                        data[name] = [];
                    data[name].push(this.elements[i].value);
                }
                else if(this.elements[i].value)
                    data[this.elements[i].name] = this.elements[i].value;
                break;
            case 'select-multiple':
                for (j = this.elements[i].options.length - 1; j >= 0; j = j - 1) {
                    if (this.elements[i].options[j].selected) {
                        data[this.elements[i].name] = this.elements[i].options[j].value;
                    }
                }
                break;
            }
            break;
        case 'BUTTON':
            switch (this.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
                data[this.elements[i].name] = this.elements[i].value;
                break;
            }
            break;
        }
    }
    return data;
}
HTMLFormElement.prototype.serializeJSON = serializeJSON;
HTMLFormElement.prototype.serialize = serialize;
Array.prototype.serialize = function(){
    return this[0].serialize();
};
Array.prototype.serializeJSON = function(){
    return this[0].serializeJSON();
};
cookie = function(){};
cookie.toString = function(){return document.cookie;};
cookie.get = function (cname) {
    name = cname + "=";
    decodedCookie = decodeURIComponent(cookie);
    ca = decodedCookie.split(';');
    for(i = 0; i <ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
// storage = localStorage;
history = window.history;

function render(template,block,data){
    var block = $(block);
    block.html(templates[template](data));
}