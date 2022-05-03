setInterval(()=>{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();
    day = days[d.getDay()];
    date=d.getDate();
    month = months[d.getMonth()];
     year=d.getFullYear();
    hrotate=30*h + m/2;
    mrotate=6*m;
    srotate=6*s;
    t= h+":"+m+":"+s;
    x= day+" "+date+" "+month+", "+year;
    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
    document.getElementById("time").innerHTML= t;
    document.getElementById("date").innerHTML= x;
},1000)

