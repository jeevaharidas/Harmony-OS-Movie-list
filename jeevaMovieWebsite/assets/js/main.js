 $(document).ready(function(){
          function add(Name,URL,Rating=0.0,tag="",year =""){
                $(".testing").append($(`
                              
                <div class="movie-card">
                <div class="card-head">
                  <img src=" ${URL}" alt="" class="card-img">

                  <div class="card-overlay">
                    <div class="rating">
                      <ion-icon name="star-outline"></ion-icon>
                      <span>${Rating}</span>
                    </div>
                    <div class="play">
                      <ion-icon name="play-circle-outline"></ion-icon>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h3 class="card-title">${Name}</h3>
                  <div class="card-info">
                    <span class="genre">${tag}</span>
                    <span class="year">${year}</span>
                  </div>
                </div>
              </div>`));
          }

          var Movie = [
            {"Name":"RRR","url":"./assets/images/movies/RRR.jpeg","rating":4,"year":2022,"tag":"Tamil"},
            {"Name":"1917","url":"./assets/images/movies/1917.jpg","rating":6.5,"year":2019,"tag":"English"},
            {"Name":"Don","url":"./assets/images/movies/Don.jpg","rating":9,"year":2022,"tag":"Tamil"},
            {"Name":"Endgame","url":"./assets/images/movies/endgame.jpg","rating":7.8,"year":2019,"tag":"English"},
            {"Name":"Red-Notice","url":"./assets/images/movies/red-notice.jpg","rating":7.8,"year":2021,"tag":"English"},
            {"Name":"Doctor-Strange","url":"./assets/images/movies/doctor strange.jpg","rating":3,"year":2022,"tag":"English"},
            {"Name":"Hridayam ","url":"./assets/images/movies/hridayam.jpg","rating":3,"year":2022,"tag":"Malayalam"},
            {"Name":"BheeshmaParvam","url":"./assets/images/movies/BheeshmaParvam.jpg","rating":3,"year":2022,"tag":"Malayalam"},
            {"Name":"Love Moctail 2","url":"./assets/images/movies/Love Moctail 2.jpg","rating":3,"year":2022,"tag":"Kannada"},
          ]
          Movie.forEach(myFunction);

          function myFunction(value) {  
                add(value.Name,value.url,value.rating,value.tag,value.year);
          }

          $('.load-more').on('click', function(e) {
            e.preventDefault();
            $('.modal-toggle').toggleClass('is-visible');
          });

          var filePath;

          $('#sumit').click(function () {
            filePath=document.getElementById("url");
            rating=document.getElementById("rating");
            tag=document.getElementById("tag");
            year=document.getElementById("year");
            console.log(filePath);
            var Name = document.getElementById("name");
            Movie.push({"Name":Name.value,"url":filePath.value,"rating":rating.value,"year":year.value,"tag":tag.value});
            add(Name.value,filePath.value,rating.value,year.value,tag.value);
            document.getElementById("inputfrom").reset();
          });


          $("#rating").change(function() {

            
            var filter = $(this).val(),
              count = 0;
      
            
            if(filter!="All"){
            $('.movies-grid .movie-card').each(function() {
      
      
              
              if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();  
      
               
              } else {
                $(this).show(); 
                count++;
              }
      
            });}else{

              $('.movies-grid .movie-card').each(function() {
                  $(this).show(); 
              
                }
          )}
          });
          $(".radio").change(function() {
            var filter = $(this).val()
            console.log(filter)
            if(filter=="HL"){
                Movie.sort(function(a, b){return b.rating - a.rating});
            }else{
              Movie.sort(function(a, b){return a.rating - b.rating});
            }
            document.getElementById("MovieGrid").innerHTML="";
            Movie.forEach(myFunction);
          });
        });