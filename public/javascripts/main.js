

var skills = [{skillName: "Front-end Development", proficiency: "80%", rate: 80},
             {skillName: "Back-end Development", proficiency: "78%", rate: 78},
             {skillName: "Graphic Desgin", proficiency: "60%", rate: 68},
             {skillName: "Data Structure & Algo", proficiency: "30%", rate: 30},
            ]


var projects = [{pname: "Full Stack - Amazon Clone Web App", img:"/images/P1.png", url:"https://amazonclone-webproject.onrender.com/"},
                {pname: "Full Stack - Spotify Music Streaming", img:"/images/P2.png", url:"https://spotifyclone-3s1m.onrender.com/"},
                {pname: "Live Weather Forecasting WebApp ", img:"/images/P3.png", url:"https://harshuserethe.github.io/Weather-Forecast-WebApp/"},
                {pname: "Farm Rental Farmer's Website", img:"/images/P4.png", url:"https://harshuserethe.github.io/Farm-Rental-Website/"},
                {pname: "Animated Award Winning Website", img:"/images/P5.png", url:"https://www.behance.net/gallery/167749685/Sell-or-Create-Your-NFT-UI-Design-NFT-Landing-Page"},
                {pname: "BARREL - Mens Fashion Web design", img:"/images/P6.png", url:"https://harshuserethe.github.io/BARREL-MensFashion/"},
                {pname: "Instagram Web Clone (Front-end)", img:"/images/P7.png", url:"https://harshuserethe.github.io/instagram-clone/"},
                {pname: "RocketAir Awwwards Website Clone", img:"/images/P8.png", url:"https://harshuserethe.github.io/RocketAir-Clone/"},
               ]

               var certificates = [{cname: "Flipkart Grid 5.0", cdesc:"Participation certificate of flipkart GRID 5.0", year:"Aug-2023", img: "/images/1217101_flipkart_icon.svg", img1:"/images/Certificates/C1.png", url:"https://drive.google.com/file/d/1ZKnYrHbhuvyXxJbEZxwYPMk5O8bmuOBv/view?usp=sharing"},
               {cname: "MI Code2 Oth", cdesc:"Participation certificate of Code2Oth", year:"Aug-2023", img: "/images/mi.png", img1:"/images/Certificates/C2.png", url:"https://drive.google.com/file/d/1GVukh1QgsJRVKVpO_9XYxPpqD0HkLzWD/view?usp=drive_link"},
               {cname: "TVS Epic 5.0", cdesc:"Participation certificate of TVS Epic 5.0", year:"Aug-2023", img: "/images/tvs.png", img1:"/images/Certificates/C3.png", url:"https://drive.google.com/file/d/1SsE5n57nSzEy0SZrMzXgYe0kDu-aB__Z/view?usp=drive_link"},
               {cname: "Hackathon", cdesc:"Secured 2<sup>nd</sup> position in presentation-codebite", year:"Mar-2023", img: "/images/codeicon.png", img1:"/images/Certificates/C0.png", url:""},
               {cname: "Back-end Dev", cdesc:"Certified in 3-month backend web dev course", year:"Mar-2023", img: "/images/backend.png", img1:"/images/Certificates/C5.png", url:"https://drive.google.com/file/d/1SV9S_YFFnpBMSa03Lbld1h-08dTWShqk/view?usp=drive_link"},
               {cname: "Front-end Dev", cdesc:"Certified in 3-month frontend web dev course", year:"Oct-2022", img: "/images/frontend.png", img1:"/images/Certificates/C4.png", url:"https://drive.google.com/file/d/1r-drfobgiSlpFryKvDTTcKrIDRb-pK3c/view?usp=drive_link"},
               {cname: "UI/UX", cdesc:"Certified in UI/UX from Great Learning platform", year:"Oct-2022", img: "/images/ui.png", img1:"/images/Certificates/C9.png", url:"https://drive.google.com/file/d/1pYwzQJ_vOOFvGb-3YDeKl0GiS0oxzG3E/view?usp=drive_link"},
               {cname: "Google Cloud", cdesc:"Certified in Google cloud fundamentals core infrastructure", year:"Sep-2022", img: "/images/google.png", img1:"/images/Certificates/C6.png", url:"https://drive.google.com/file/d/1qK8U7QdGZr6AjYEYIwZo9hFbfSxYjLaX/view?usp=drive_link"},]

             
            var skillChart = document.querySelector(".skill-chart");

            skills.forEach(function(skill){
                skillChart.innerHTML += ` <div class="wrapper">
                <div class="skill-name">
                  <h5 id="name">${skill.skillName}</h5>
                  <h5 id="percent">${skill.proficiency}</h5>
                </div>
                <div class="bar">
                  <div class="inner-bar" style="width:${skill.rate}%"></div>
                </div>
              </div>` 
            })


            var porjectArea = document.querySelector(".prj-cards");

            projects.forEach(function(project){
              porjectArea.innerHTML += `<a href="${project.url}" target="_blank"><div class="card">
              <div class="frame"><img src="${project.img}" alt=""></div>
              <div class="about-project"><p>${project.pname}</p></div>
            </div></a>`
            })

            //Certificate Section ----------->

             var certificateArea = document.querySelector(".certify");
             
              certificates.forEach((cert, index) => {
                
               certificateArea.innerHTML += `  <a href="${cert.url}" target="_blank"><div class="certificate-card" id=fine${index}>
               <div class="jump-card" id=jump${index}>
               <img src="${cert.img1}" alt="">
               </div>
               <div class="certificate-icon"><img src="${cert.img}" alt=""></div>
               <div class="certificate-title">${cert.cname}</div>
               <div class="certificate-desc">${cert.cdesc}</div>
               <div class="certificate-year">${cert.year}</div>
               </div></a>`

              })

             
                
               var jumpCard =document.querySelectorAll(".jump-card");
               var certificateCard = document.querySelectorAll(".certificate-card");
               
               certificateCard.forEach(function(elem, index){
               document.getElementById(elem.id).addEventListener("mouseenter", function(){
                gsap.to(jumpCard[index], {
                       y: -170,
                       opacity: 1,
                       rotate: "-10deg",
                       ease: "elastic.out(1, 0.3)",
                       duration: 2,
                     })
               })


               document.getElementById(elem.id).addEventListener("mouseleave", function(){
                gsap.to(".jump-card", {
                       y: 0,
                       opacity: 0,
                       rotate: "10deg",
                       ease: "elastic.out(1, 0.3)",
                       duration: 2,
                     })
               })
              
               })
               

              
            //sweeper js code
            var swiper = new Swiper(".mySwiper", {
              grabCursor: true,
              effect: "creative",
              creativeEffect: {
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              },
            });
            var swiper2 = new Swiper(".mySwiper2", {
              grabCursor: true,
              effect: "creative",
              creativeEffect: {
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              },
            });


         
 
        
       var navigationBar = document.querySelector(".nav-bar");

            window.addEventListener('wheel', (event) => {
             if(event.wheelDeltaY === -120){
              
               navigationBar.style.top = "-10vh";

             }else{
           
              navigationBar.style.top = "0vh";
             }
            });
            


