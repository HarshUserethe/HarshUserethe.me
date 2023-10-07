var blog = [{topic: "Technology", title: "Add Your Title-1", sum: "Type Your Blog Summary Here...", para1: "Your Paragraph Number-1", para2: "Your Paragraph Number-2", para3: "Your Paragraph Number-3", src: "Image URL"},
            {topic: "Technology", title: "Add Your Title-2", sum: "Type Your Blog Summary Here...", para1: "Your Paragraph Number-1", para2: "Your Paragraph Number-2", para3: "Your Paragraph Number-3", src: "Image URL"},
            {topic: "Technology", title: "Add Your Title-3", sum: "Type Your Blog Summary Here...", para1: "Your Paragraph Number-1", para2: "Your Paragraph Number-2", para3: "Your Paragraph Number-3", src: "Image URL"},
           ]

 

           document.querySelector("#blogOne").addEventListener("click", function(){
            document.querySelector(".topic").innerHTML = "Gaming";
            document.querySelector(".headline").innerHTML = blog[0].title;
            document.querySelector(".blog-sum").innerHTML = blog[0].sum;
            document.querySelector(".first-image>img").innerHTML = blog[0].src;
            document.querySelector(".first-para>p").innerHTML = blog[0].para3;
            document.querySelector(".second-para>p").innerHTML =blog[0].para2;
            document.querySelector(".third-para>p").innerHTML = blog[0].para3;
           })


           document.querySelector("#blogTwo").addEventListener("click", function(){
            document.querySelector(".topic").innerHTML = blog[1].topic;
            document.querySelector(".headline").innerHTML = blog[1].title;
            document.querySelector(".blog-sum").innerHTML = blog[1].sum;
            document.querySelector(".first-image>img").innerHTML = blog[1].src;
            document.querySelector(".first-para>p").innerHTML = blog[1].para3;
            document.querySelector(".second-para>p").innerHTML =blog[1].para2;
            document.querySelector(".third-para>p").innerHTML = blog[1].para3;
           })


           document.querySelector("#blogThree").addEventListener("click", function(){
            document.querySelector(".topic").innerHTML = blog[2].topic;
            document.querySelector(".headline").innerHTML = blog[2].title;
            document.querySelector(".blog-sum").innerHTML = blog[2].sum;
            document.querySelector(".first-image>img").innerHTML = blog[2].src;
            document.querySelector(".first-para>p").innerHTML = blog[2].para3;
            document.querySelector(".second-para>p").innerHTML =blog[2].para2;
            document.querySelector(".third-para>p").innerHTML = blog[2].para3;
           })