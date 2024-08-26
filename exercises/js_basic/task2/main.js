 /**
         * 1. Render songs
         * 2. Sccroll top
         * 3. Play/ pause/ stop
         * 4. CD rotate
         * 5. Next/ Previous
         * 6. Random
         * 7. Next/ Repeat when ended
         * 8. Active song
         * 9. Scroll active song into view
         * 10. Play song when click
         */
 const $ = document.querySelector.bind(document)
 const $$ = document.querySelectorAll.bind(document)


 const PLAYER_STORAGE_KEY="CODE_PLAYER"
 //  define variables
 const cd= $('.cd')
 const heading= $('h5.playing-song-name')
 const artist=$('p.playing-song-artist')
 const cdThumb=$('.cd-thumbnail')
 const audio=$('#audio')
 const playBtn=$('.btn-toggle-play')
 const player = $('.player')
 const progress=$('#progress')
 const nextBtn=$('.btn-next')
 const prevBtn=$('.btn-prev')
 const repeatBtn=$('.btn-repeat')
 const suffleBtn=$('.btn-shuffle')
 const playlist=$('.playlist')

 const app = {
     currentIndex:0,
     isPlaying:false,
     isRandom:false,
     isRepeat:false,
     config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
     songs: [
         {
             index: 0,
             name: 'Chiều Hôm Ấy',
             singer: 'JayKii',
             path: "./music/ChieuHomAy.mp3",
             image: './image/ChieuHomAy.jpg',
             isFavorite: false,
         },
         {
             index:1,
             name: 'Chiụ cách mình nói thua',
             singer: 'Rhyder',
             path: "./music/ChiuCachMinhNoiThua.mp3",
             image: './image/ChiuCachMinhNoiThua.jpg',
             isFavorite: false,
         },
         {
             index: 2,
             name: 'Không phải gu',
             singer: 'HIEUTHUHAI',
             path: "./music/KhongPhaiGu.mp3",
             image: './image/KhongPhaiGu.jpg',
             isFavorite: false,
         },
         {
             index: 3,
             name: 'Không Thể Say',
             singer: 'HIEUTHUHAI',
             path: "./music/KhongTheSay.mp3",
             image: './image/KhongTheSay.jpg',
             isFavorite: false,
         },
         {
             index: 4,
             name: 'MONGYU',
             singer: 'AMEE&MCK',
             path: "./music/MONGYU.mp3",
             image: './image/MongYu.jpg',
             isFavorite: false,
         },
         {
             index: 5,
             name: 'Rồi ta sẽ ngắm pháo hoa cùng nhau',
             singer: 'Olew',
             path: "./music/RoiTaSeNgamPhaoHoaCungNhau.mp3",
             image: './image/RoiTaSeNgamPhaoHoaCungNhau.jpg',
             isFavorite: false,
         },
         {
             index: 6,
             name: 'Sài Gòn đau lòng quá',
             singer: 'Hứa Kim Tuyền',
             path: "./music/SaiGonDauLongQua.mp3",
             image: './image/SaiGonDauLongQua.jpg',
             isFavorite: false,
         },
         {
             index: 7,
             name: 'Sài Gòn hôm nay mưa',
             singer: 'Jsol & Hoàng Duyên',
             path: "./music/SaiGonHomNayMua.mp3",
             image: './image/SaiGonHomNayMua.jpg',
             isFavorite: false,
         },
     ],
     setConfig: function(key, value){
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
     },
     render: function () {
         const htmls = this.songs.map((song, index) => {
             return `
             <div class="song ${index == this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="song-contain">
                    <div class="song-img" style="background-image: url('${song.image}')" alt="" class="song-image"></div>
                    <div class="song-text">
                        <h5 class="song-name">${song.name}</h5>
                        <p class="song-artist">${song.singer}</p>
                    </div>
                </div>

                <div class="song-contain song-select">
                    <div>
                        <i class="song-favorite-${index} btn song-favorite fa-heart ${song.isFavorite == true ? 'fa-solid' : 'fa-regular'}"></i>
                        <i class="btn song-remove-${index} fa-solid fa-xmark" onclick="handleRemove(event)"></i>
                    </div>
                </div>
            </div>
             `

         })
         playlist.innerHTML = htmls.join('')
     },
     definedProperties:function(){
        Object.defineProperty(this, 'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
     }
     ,
     handleEvents: function(){
        const _this=this;
        cdWidth= cd.offsetWidth

        // Xử lý CD quay / dừng
        const cdThumbAnimate=cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }],
            {
                duration: 20000,
                interation:Infinity
                // timing function
            }
        )
        cdThumbAnimate.pause()
        // cdThumb.pause()

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll=function(){
            // document.documentElement.scrollTop= window.scrollY (cách dùng)
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newWidth = cdWidth-scrollTop

            cd.style.width= newWidth>0?newWidth + 'px':0
            // if (newWidth <= 0) cd.style.height=0
            cd.style.opacity= newWidth/cdWidth
        }  

        // Xử lý khi click play
        playBtn.onclick=function(){
            if (_this.isPlaying) {
                _this.isPlaying=false
                audio.pause()
                playBtn.classList.remove("song-playing")
            }
            else{
                audio.play()
            }
        }

        // Khi song được play
        audio.onplay=function(){
            _this.isPlaying=true
            playBtn.classList.add("song-playing")
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause=function(){
            _this.isPlaying=false
            playBtn.classList.remove("song-playing")
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate=function(){
            if (audio.duration){
                const progressPercent= Math.floor(audio.currentTime/audio.duration*100)
                progress.value=progressPercent
            }
        }

        // Xử lý khi tua song
        progress.onchange=function(e){
            const seekTime = e.target.value*audio.duration/100;
            audio.currentTime = seekTime;
        }

        // Xử lý khi click next
        nextBtn.onclick=function(){
            if (_this.isRandom){
                _this.randomSong()
            } else{
                _this.nextSong()
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong()
        }

        // Xử lý khi click prev
        prevBtn.onclick=function(){
            if (_this.isRandom){
                _this.randomSong()
            } else{
                _this.prevSong()
            }
            audio.play();
            _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý khi bật / tắt nút random
        suffleBtn.onclick=function(){
            _this.isRandom=!_this.isRandom
            _this.setConfig('isRandom',_this.isRandom)
            suffleBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lý lặp lại một song
        repeatBtn.onclick=function(){
            _this.isRepeat=!_this.isRepeat
            _this.setConfig('isRepeat',_this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
            if (_this.isRepeat){
                audio.play
            } else{
                audio.loop=false
            }
        }

        // Xử lý next song khi audio ended
        audio.onended =function(){
            if (_this.isRandom){
                _this.randomSong()
            } else{
                if (_this.isRepeat){}
                else{
                    _this.nextSong()
                }
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong()
        }

        // delegate
        // Lắng nghe hành vi click vào playlist
        playlist.onclick= function(event){
            const songNode = event.target.closest('.song:not(.active)');
            if (event.target.closest('.song:not(.active)')||event.target.closest('.song-favorite')){
                if (event.target.closest('.song-favorite')){
                    _this.handleFavoriteIcon(event)
                } else {
                    if (event.target.closest('.song-remove')){
                        _this.handleRemoveIcon(event)
                    }
                    else {
                        _this.currentIndex=Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()
                        _this.render()
                    }
                }
                
            } 
        }
     },
     scrollToActiveSong: function () {
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block:'nearest',
            })
        }, 100)
        // check + px
     },
     loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat

        if (app.isRepeat) {
            repeatBtn.classList.add('active')
        }

        if (app.isRandom) {
            suffleBtn.classList.add('active')
        }
     }
     ,
     loadCurrentSong: function (){
        heading.textContent=this.currentSong.name
        cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`
        audio.src=this.currentSong.path
        artist.textContent=this.currentSong.singer
        // app.render(this.currentSong)
     },
     nextSong: function (){
        this.currentIndex++;
        if (this.currentIndex > this.songs.length-1)
        {
            this.currentIndex=0
        }
        this.loadCurrentSong()
     }
     ,
     prevSong: function (){
        this.currentIndex--
        if (this.currentIndex < 0){
            this.currentIndex=this.songs.length-1
        }
        this.loadCurrentSong()
     },
     randomSong: function(){
        let newIndex 
        do{
            newIndex=Math.floor(Math.random()*this.songs.length)
        } while(this.currentIndex===newIndex)
        this.currentIndex=newIndex
        this.loadCurrentSong()
     },
     handleFavoriteIcon:function(event) {
        const favoriteBtn = event.target
        const songFavoriteIndex = Number(favoriteBtn.closest('.song').dataset.index)
        if (favoriteBtn.classList.contains('fa-regular')){
            console.log(songFavoriteIndex)
            favoriteBtn.classList.add('fa-solid')
            favoriteBtn.classList.remove('fa-regular')
            this.songs[songFavoriteIndex].isFavorite=true
        } 
        else{
            favoriteBtn.classList.remove('fa-solid')
            favoriteBtn.classList.add('fa-regular')
            this.songs[songFavoriteIndex].isFavorite=false
        }
        
     },
     handleRemoveIcon:function(){

     }
     ,
     start: function () {
        // Gán cấu hình từ config vào ứng dụng
        this.loadConfig()

        // định nghĩa các thuộc tính cho object
        this.definedProperties()

        // Lắng nghe/ xử lý các sự kiện DOM event
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên khi vào UI
        this.loadCurrentSong()

        // render playlist
        this.render()
     }
 }
 app.start()