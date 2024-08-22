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

 //  define variables
 const cd= $('.cd')
 const heading= $('h5.playing-song-name')
 const cdThumb=$('.cd-thumbnail')
 const audio=$('#audio')
 const playBtn=$('.btn-toggle-play')
 const player = $('.player')
 const progress=$('#progress')
 const nextBtn=$('.btn-next')
 const prevBtn=$('.btn-prev')
 const repeatBtn=$('.btn-repeat')
 const suffleBtn=$('.btn-shuffle')

 const app = {
     currentIndex:0,
     isPlaying:false,
     songs: [
         {
             index: 0,
             name: 'Chiều Hôm Ấy',
             singer: 'JayKii',
             path: "./music/ChieuHomAy.mp3",
             image: './image/ChieuHomAy.jpg'
         },
         {
             name: 'Chiụ cách mình nói thua',
             singer: 'Rhyder',
             path: "./music/ChiuCachMinhNoiThua.mp3",
             image: './image/ChiuCachMinhNoiThua.jpg'
         },
         {
             index: 1,
             name: 'Không phải gu',
             singer: 'HIEUTHUHAI',
             path: "./music/KhongPhaiGu.mp3",
             image: './image/KhongPhaiGu.jpg'
         },
         {
             index: 2,
             name: 'Không Thể Say',
             singer: 'HIEUTHUHAI',
             path: "./music/KhongTheSay.mp3",
             image: './image/KhongTheSay.jpg'
         },
         {
             index: 3,
             name: 'MONGYU',
             singer: 'AMEE&MCK',
             path: "./music/MONGYU.mp3",
             image: './image/MongYu.jpg'
         },
         {
             index: 4,
             name: 'Rồi ta sẽ ngắm pháo hoa cùng nhau',
             singer: 'Olew',
             path: "./music/RoiTaSeNgamPhaoHoaCungNhau.mp3",
             image: './image/RoiTaSeNgamPhaoHoaCungNhau.jpg'
         },
         {
             index: 5,
             name: 'Sài Gòn đau lòng quá',
             singer: 'Hứa Kim Tuyền',
             path: "./music/SaiGonDauLongQua.mp3",
             image: './image/SaiGonDauLongQua.jpg'
         },
         {
             index: 6,
             name: 'Sài Gòn hôm nay mưa',
             singer: 'Jsol & Hoàng Duyên',
             path: "./music/SaiGonHomNayMua.mp3",
             image: './image/SaiGonHomNayMua.jpg'
         },
     ],
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
                        <i class="song-favorite-${index} btn song-favorite fa-regular fa-heart" onclick="handleFavorite(event)"></i>
                        <i class="btn song-remove-${index} fa-solid fa-xmark" onclick="handleRemove(event)"></i>
                    </div>
                </div>
            </div>
             `

         })
         $('.playlist').innerHTML = htmls.join('')
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
            _this.nextSong()
        }
     },
     loadCurrentSong: function (){
        heading.textContent=this.currentSong.name
        cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`
        audio.src=this.currentSong.path
     },
     nextSong: function (){
        this.currentIndex++;
        if (this.currentIndex >= this.length)
        {
            this.currentSong=0
        }
        this.loadCurrentSong()
     }
     ,
     start: function () {
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