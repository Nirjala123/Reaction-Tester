appearShape();
            function appearShape(){
                var width = (Math.random() * 400) +100;
                var top = Math.random() * 700;
                var left = Math.random() * 1600;
                if (Math.random() > 0.5)
                    {
                        document.getElementById("div").style.borderRadius = "50%";
                    }
                else
                    {
                    
                        document.getElementById("div").style.borderRadius = "0";
                    
                    }
                document.getElementById("div").style.backgroundColor = getRandomColor();
                document.getElementById("div").style.width = width +"px";
                document.getElementById("div").style.height = width + "px";
                document.getElementById("div").style.top = top +"px";
                document.getElementById("div").style.left = left + "px";
                start = new Date().getTime();
                document.getElementById("div").style.display = "block";
                
                
            }
            var bestScore = 0;
            var start = new Date().getTime();
            function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
             }
        
            
            
            document.getElementById("div").onclick = function(){
                var stop = new Date().getTime();
                var time = stop - start;
                time = time /1000;
                if (bestScore == 0 || bestScore > time)
                    {
                        bestScore = time;
                    }
                document.getElementById("time").innerHTML = time +"s";
                document.getElementById("div").style.display = "none";
                setTimeout(appearShape, Math.random());
            }
            document.getElementById("end").onclick = function(){
                
                document.getElementById("display").innerHTML = "Your best score is " + bestScore +"s";      
                
            }