// Credits: https://codepen.io/geoffgraham/pen/BpwqOE

 StarWars = (function() {
            
            /* 
            * Constructor
            */
            function StarWars(args) {
            // Context wrapper
            this.el = $(args.el);
            
            // Audio to play the opening crawl
            this.audio = this.el.find('audio').get(0);
            
            
             this.audio.play();
            
            
            // Reset the animation and shows the start screen
            $(this.audio).bind('ended', $.proxy(function() {
             this.audio.currentTime = 0;
             this.reset();
            }, this));
            }
            
            var myBox = document.getElementById('sky');
            var myBox1 = document.getElementById('wrapper');
            myBox.addEventListener('webkitAnimationEnd',function( event ) { 
            myBox.style.display = 'none'; 
            myBox1.style.display = 'block';
            }, false);
            
            return StarWars;
            })();
            
            new StarWars({
            el : '.starwars-demo'
            });
            
