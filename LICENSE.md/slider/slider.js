class Slider{
    constructor(){
        this.html = $('#slider');
        this.container = $('#photo');
        this.currentSlide = 0;
        this.appendImage();
        this.containerWidth = this.container.width();
        this.sliderWidth = $('#slider img').length * this.containerWidth;
        this.last = this.sliderWidth - this.containerWidth; 
        this.html.css('width',`${this.sliderWidth}px`);
        $('#photo .prev').on('click',this.prev);
        $('#photo .next').on('click',this.next);
        this.dots();
    }
    dots(){
        var dots = create('div');
        dots.set('id','dots');
        for(var i=0;i<photos.length;i++){
            var dot = create('div');
            if(i == 0){
                dot.addClass('active dot');
                this.activeDot = dot;
            }
            else{
                dot.set('class','dot');
            }
            dot.set('left',this.containerWidth * i);
            dots.append(dot);
            dot.on('click',function(event){
                if(slider.interval || slider.activeDot == event.target)
                    return false;
                slider.activateDot(this);

                slider.end = event.target.get('left');
                if (slider.end < slider.currentSlide)
                    slider.animate(true);
                else{
                    slider.animate();
                }
                // slider.html.css('left',`-${event.target.get('left')}px`);
            });
        }
        this.container.before(dots);
    }
    activateDot(target){
        if(!target)
            target = $('.dot')[0];
        if(slider.activeDot)
            slider.activeDot.removeClass('active');
        slider.activeDot = target;
        target.addClass('active');
    }
    prev(){
        if(slider.interval)
            return false;
        if(slider.currentSlide <= 0){
            slider.currentSlide = slider.sliderWidth - slider.containerWidth;
            slider.end = slider.currentSlide - slider.containerWidth;
            slider.html.css('left',`${slider.currentSlide}px`);
        }else{
            slider.end = slider.currentSlide - slider.containerWidth;
        }
        slider.animate(true);
    }
    next(){
        if(slider.interval)
            return false;
        if(slider.currentSlide >= slider.last){
            slider.currentSlide = 0;
            slider.html.css('left',`0px`);
        }
        slider.end = slider.currentSlide + slider.containerWidth;
        slider.animate();
    }
    animate(reverse){
        slider.activateDot($(`.dot[left="${slider.end}"]`)[0]);
        this.interval = setInterval(function(){
            if(reverse)
                slider.currentSlide -= 8;
            else{
                slider.currentSlide += 8;
            }
            slider.html.css('left',`-${slider.currentSlide}px`);
            if(reverse){
                if(slider.currentSlide <= slider.end){
                    clearInterval(slider.interval);
                    slider.interval = false;
                }
            }else if(slider.currentSlide >= slider.end){
                clearInterval(slider.interval);
                slider.interval = false;
            }
        },1);
    }
    appendImage(){
        this.img = create('img');
        this.img.src = `${photos[0]}`;
        this.html.append(this.img);
    }
    destroy(){
        $('#dots').remove();
        this.html.innerHTML = '';
        this.html.css('left',`0px`);
    }
}