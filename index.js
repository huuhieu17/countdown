    demNguoc("01/22/2023 12:00 AM")
    function demNguoc(dt)
    {   
        var end = new Date(dt);

        var sec = 1000;
        var min = sec * 60;
        var hour = min * 60;
        var day = hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance <= 0) {

                clearInterval(timer);
                // show phao hoa here
                const bg = document.getElementById("bg");
                const content = document.getElementById("content");
                bg.remove()
                content.remove()
                const html =  document.createRange().createContextualFragment('<div class="stage-container remove" id="stagger">'+
                    '<div class="canvas-container">'+
                      '<canvas id="trails-canvas"></canvas>'+
                      '<canvas id="main-canvas"></canvas>'+
                    '</div>'+
                    '<script src="./assets/fscreen.js"></script>'+
                    '<script src="./assets/MyMath.js"></script>'+
                    '<script src="./assets/Stage.js"></script>'+
                    '<script src="./assets/script.js"></script>'+
                  '</div>')
                document.body.appendChild(html);
                init()
                return;
            }
            var days = Math.floor(distance / day);
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / min);
            var seconds = Math.floor((distance % min) / sec);

            document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
            document.getElementById("hour").innerHTML =  hours < 10 ? "0" + hours : hours;
            document.getElementById("minute").innerHTML =  minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("second").innerHTML =  seconds < 10 ? "0" + seconds : seconds;
        }

        timer = setInterval(showRemaining, 1000);
    }