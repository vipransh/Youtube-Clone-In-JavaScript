let subscribeDiv=document.querySelector(".subscibe-div");
let subscibeText=document.querySelector(".subscibe-text");
let playlistSection=document.querySelector(".playlist-div");
let sidebarIcon=document.querySelector(".sidebar-icon");
let sideBar=document.querySelector(".side-bar");
let header=document.querySelector(".target-1");
let hero=document.querySelector(".target-2");
let videoElement=document.querySelector(".video-player");
let vTitle=document.querySelector(".video-title");


let sidebarFlag=true;



// array of video object
let videos=[{
    title: "Big Buck Bunny",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "resources/bigBunny.png",
    views: "630K",
    duration: "9:56",
    likes: "140"
},
{
    title: "Elephant Dream",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "resources/elephantdream.png",
    views: "480K",
    duration: "10:53",
    likes: "140"
},
{
    title: "For Bigger Blazes",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "resources/forbiggerblaze.png",
    views: "730K",
    duration: "00:15",
    likes: "140"
},
{
    title: "For Bigger Escape",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "resources/forbiggerescape.png",
    views: "537K",
    duration: "00:15",
    likes: "140"
},
{
    title: "Subaru Outback On Street And Dirt",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "resources/subaruoutbreak.png",
    views: "645K",
    duration: "9:54",
    likes: "140"
},
{
    title: "For Bigger Fun",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "resources/forbiggerfun.png",
    views: "482K",
    duration: "1:00",
    likes: "140"
},
{
    title: "For Bigger Joyrides",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "resources/biggerjoyrides.png",
    views: "812K",
    duration: "00:15",
    likes: "140"
},
{
    title: "For Bigger Meltdowns",
    source: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "resources/biggermenltdown.png",
    views: "280K",
    duration: "00:15",
    likes: "140"
}
];

showPlayList();

playVideo(0);

// video player function
function playVideo(index){
    videoElement.innerHTML="";
    videoElement.poster=videos[index].thumbnail;
    vTitle.innerText=videos[index].title;
    let source = document.createElement('source');
    source.setAttribute('src',`${videos[index].source}`);
    source.setAttribute('type','video/mp4');
    videoElement.append(source);
    videoElement.load();
    // videoElement.play();
}


// subscribe function
function subscribe(){
    subscribeDiv.classList.remove("bg-myRed");
    subscribeDiv.classList.add("bg-darkgrey");
    subscibeText.classList.remove("text-white");
    subscibeText.classList.add("text-black");
}

// show/hide sidebar function 
function showSidebar(){
    if(sidebarFlag)
    {
        sideBar.classList.remove("hidden");
        sidebarFlag=false;
        header.classList.add("opacity-20");
        hero.classList.add("opacity-20");
        
    }
    else
    {
        sideBar.classList.add("hidden");
        sidebarFlag=true;
        header.classList.remove("opacity-20");
        hero.classList.remove("opacity-20");
    }
    
}

// show playlist
function showPlayList(){
    let html='';
    for(let index=0;index<videos.length;index++)
    {  
        html+=`
        <div class="flex flex-row  mb-3" onclick="playVideo(${index})">
        <img class="playlist-img" src=${videos[index].thumbnail} alt="">
        <div class="ml-4">
          <h2 class="text-black">${videos[index].title}</h2>
          <p class="flex flex-row items-center">Creaters Club <img class="w-3 h-3 ml-1 rounded-lg" src="resources/icons8-tick-24.png" alt=""></p>
          <p>${videos[index].views} views .${videos[index].duration}min</p>
        </div>
        </div>
      `;
      playlistSection.innerHTML=html;
    }
}