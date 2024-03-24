var ul = document.getElementById('ul');

var  navs = ul.getElementsByNames('nav-item');

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click",function(){
        var current = document.getElementsByClassName('active');
        if(current.length > 0){
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active" 
    });
}