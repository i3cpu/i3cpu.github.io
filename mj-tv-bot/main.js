var app = new Vue({
  el: '.main',
  data: {
    showChannelsBlock: true,
    showPlayerBlock: false,
    tg: window.Telegram.WebApp,
    channel: '',
    lock_img_src:'lock-icon.png',
    videoSources: {
      zortv: 'https://s04.watcher.uz/6/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      milliy: 'https://s05.watcher.uz/70/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzreport: 'https://s03.watcher.uz/75/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sport: 'https://s04.watcher.uz/59/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      perviy:"https://tbs01-edge11.itdc.ge/ort/tracks-v1a1/mono.m3u8",
      sts:"https://tbs01-edge11.itdc.ge/ctctv/tracks-v1a1/mono.m3u8",
      tnt_music:"https://tbs01-edge11.itdc.ge/rutv/tracks-v1a1/mono.m3u8",
      kinopremyera:"https://tbs01-edge11.itdc.ge/kinopremyerahd/tracks-v1a1/mono.m3u8",
      pyatnitsa:"https://tbs01-edge11.itdc.ge/friday/tracks-v1a1/mono.m3u8",
      kinoxit:"https://tbs01-edge11.itdc.ge/kinohit/tracks-v1a1/mono.m3u8",
      tv1000:"https://tbs01-edge11.itdc.ge/tv1000rukino/tracks-v1a1/mono.m3u8",
      music_box:'https://tbs01-edge11.itdc.ge/musicbox/tracks-v1a1/mono.m3u8',
      karusel:'https://ucdn.beetv.kz/btv/live/hls/000000781.m3u8',
      match_planeta:'https://tbs01-edge11.itdc.ge/matchplaneta/tracks-v1a1/mono.m3u8',
      my5:'https://s05.watcher.uz/69/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sevimli:'https://s04.watcher.uz/72/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzbekistan24:'https://s04.watcher.uz/8/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
       dunyoboylab:'https://s05.watcher.uz/63/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      futboltv:'https://s03.watcher.uz/74/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      dasturxontv:'https://s03.watcher.uz/85/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      biztv:'https://st.biztv.uz/hls/stream_mid/index.m3u8',
      renessans:'https://s04.watcher.uz/83/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      yoshlar:'https://s03.watcher.uz/57/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      bolajon:'https://s05.watcher.uz/64/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      navo:'https://s05.watcher.uz/65/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzbekistan:'https://s03.watcher.uz/56/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
     rentv:'https://tbs01-edge11.itdc.ge/rentv/tracks-v1a1/mono.m3u8',
      russia_k:'https://ucdn.beetv.kz/btv/live/hls/000000066.m3u8',
      oxota_i_rybalka:'https://ucdn.beetv.kz/btv/live/hls/000002510.m3u8',
      viasat_explore:'https://tbs01-edge11.itdc.ge/viasatexp/tracks-v1a1/mono.m3u8',
      viasat_history:'https://tbs01-edge11.itdc.ge/viasathist/tracks-v1a1/mono.m3u8',
      viasat_sport:'https://tbs01-edge11.itdc.ge/viasatsport/tracks-v1a1/mono.m3u8',
        dom_kino:'https://ucdn.beetv.kz/btv/live/hls/000000050.m3u8',
      dom_kino_premium:'https://ucdn.beetv.kz/btv/live/hls/000002943.m3u8',
      kinoujas:'https://tbs01-edge11.itdc.ge/kinoujas/tracks-v1a1/mono.m3u8',
      evrokino:'https://tbs01-edge11.itdc.ge/eurokino/tracks-v1a1/mono.m3u8',
      kuxnya_tv:'https://tbs01-edge11.itdc.ge/kuxnia/tracks-v1a1/mono.m3u8',
      domashniy:'https://tbs01-edge11.itdc.ge/domashni/tracks-v1a1/mono.m3u8',
      box_tv:'https://tbs01-edge11.itdc.ge/boxtv/tracks-v1a1/mono.m3u8',
      mma_tv:'https://tbs01-edge11.itdc.ge/m1/tracks-v1a1/mono.m3u8',
      muzika_pervogo:'https://ucdn.beetv.kz/btv/live/hls/000000204.m3u8',
      stereoplus:'https://tbs01-edge11.itdc.ge/stereoplus/tracks-v1a1/mono.m3u8',
        tnt:'https://ucdn.beetv.kz/btv/live/hls/000001480.m3u8',
      tnt_4:'https://ucdn.beetv.kz/btv/live/hls/000002926.m3u8',
        setanta_s1:'https://ucdn.beetv.kz/btv/live/hls/000004498.m3u8',
      setanta_s2:'https://ucdn.beetv.kz/btv/live/hls/000004499.m3u8',
        russia_24:'https://ucdn.beetv.kz/btv/live/hls/000000198.m3u8',
      ntv_mir:'https://ucdn.beetv.kz/btv/live/hls/000000079.m3u8',
      ntv_pravo:'https://ucdn.beetv.kz/btv/live/hls/000002759.m3u8',
      ntv_serial:'https://ucdn.beetv.kz/btv/live/hls/000002760.m3u8',
      ntv_style:'https://ucdn.beetv.kz/btv/live/hls/000002761.m3u8',
      animal_planet:'https://ucdn.beetv.kz/btv/live/hls/000000216.m3u8',
      discovery:'https://ucdn.beetv.kz/btv/live/hls/000001496.m3u8',
      national_geographic:'https://ucdn.beetv.kz/btv/live/hls/000000034.m3u8',
      muz_tv:'https://ucdn.beetv.kz/btv/live/hls/000000073.m3u8',
      eurosport1:'https://ucdn.beetv.kz/btv/live/hls/000002478.m3u8',
      eurosport2:'https://ucdn.beetv.kz/btv/live/hls/000002479.m3u8',
      mz_muzzone:'https://ucdn.beetv.kz/btv/live/hls/000000783.m3u8',




    }
  },
  mounted:function(){
    if (this.tg.isExpanded == false){
      this.tg.expand()
    }
  },
  methods: {

    onImageClick(channel_name) {
      this.showPlayerBlock = true;
      this.showChannelsBlock = false;
      if (channel_name=='zortv'){
        this.channel="Zo'r tv"
      }
      else if(channel_name=='milliy'){
        this.channel="Milliy tv"
      }
      else if(channel_name=='perviy'){
        this.channel="Первый канал"
      }
      else if(channel_name=='sport'){
        this.channel="Sport tv"
      }
      else if(channel_name=='sts'){
        this.channel="СТС"
      }
      else if(channel_name=='tnt_music'){
        this.channel="TNT Music"
      }
      else if(channel_name=='kinopremyera'){
        this.channel="Кинопремьера"
      }
      else if(channel_name=='pyatnitsa'){
        this.channel="Пятница!"
      }
      else if(channel_name=='kinoxit'){
        this.channel="Кинохит"
      }
      else if(channel_name=='tv3'){
        this.channel="ТВ3"
      }
      else if(channel_name=='uzreport'){
        this.channel="Uzreport"
      }
      else if(channel_name=='tv1000'){
        this.channel="TV1000"
      }
      else if(channel_name=='music_box'){
        this.channel="Music Box"
      }
      else if(channel_name=='karusel'){
        this.channel="Карусель"
      }
      else if(channel_name=='match_planeta'){
        this.channel="Матч! Планета"
      }
      else if(channel_name=='my5'){
        this.channel="My5"
      }
      else if(channel_name=='sevimli'){
        this.channel="Sevimli Tv"
      }
      else if(channel_name=='uzbekistan24'){
        this.channel="Uzbekistan 24"
      }
      else if(channel_name=='dunyoboylab'){
        this.channel="Dunyo Bo'ylab"
      }
      else if(channel_name=='futboltv'){
        this.channel="Futbol Tv"
      }
      else if(channel_name=='dasturxontv'){
        this.channel="Dasturxon Tv"
      }
      else if(channel_name=='biztv'){
        this.channel="Biz Tv"
      }
      else if(channel_name=='renessans'){
        this.channel="Renessans Tv"
      }
      else if(channel_name=='yoshlar'){
        this.channel="Yoshlar"
      }
      else if(channel_name=='my5'){
        this.channel="My5"
      }
      else if(channel_name=='bolajon'){
        this.channel="Bolajon"
      }
      else if(channel_name=='navo'){
        this.channel="Navo"
      }
      else if(channel_name=='uzbekistan'){
        this.channel="Uzbekistan"
      }
      else if(channel_name=='rentv'){
        this.channel="Ren Tv"
      }
      else if(channel_name=='russia_k'){
        this.channel="Россия К"
      }
      else if(channel_name=='oxota_i_rybalka'){
        this.channel="Охота и Рыбалка"
      }
      else if(channel_name=='viasat_explore'){
        this.channel="Viasat Explorer"
      }
      else if(channel_name=='viasat_history'){
        this.channel="Viasat History"
      }
      else if(channel_name=='viasat_sport'){
        this.channel="Viasat Sport"
      }
      else if(channel_name=='dom_kino'){
        this.channel="Дом кино"
      }
      else if(channel_name=='kinoujas'){
        this.channel="Киноужас"
      }
      else if(channel_name=='dom_kino_premium'){
        this.channel="Дом кино премиум"
      }
      else if(channel_name=='evrokino'){
        this.channel="Еврокино"
      }
      else if(channel_name=='kuxnya_tv'){
        this.channel="Кухня Тв"
      }
      else if(channel_name=='domashniy'){
        this.channel="Домашний"
      }
      else if(channel_name=='box_tv'){
        this.channel="Бокс Тв"
      }
      else if(channel_name=='mma_tv'){
        this.channel="MMA-TV"
      }
      else if(channel_name=='muzika_pervogo'){
        this.channel="Музыка Первого"
      }
      else if(channel_name=='stereoplus'){
        this.channel="Stereoplus"
      }
      else if(channel_name=='tnt'){
        this.channel="TNT"
      }
      else if(channel_name=='tnt_4'){
        this.channel="TNT4"
      }
      else if(channel_name=='setanta_s1'){
        this.channel="Setanta Sports 1"
      }
      else if(channel_name=='setanta_s2'){
        this.channel="Setanta Sports 2"
      }
      else if(channel_name=='russia_24'){
        this.channel="Россия 24"
      }
      else if(channel_name=='ntv_mir'){
        this.channel="НТВ МИР"
      }
      else if(channel_name=='ntv_pravo'){
        this.channel="НТВ ПРАВО"
      }
      else if(channel_name=='ntv_serial'){
        this.channel="НТВ СЕРИАЛ"
      }
      else if(channel_name=='ntv_style'){
        this.channel="НТВ СТИЛЬ"
      }
      else if(channel_name=='animal_planet'){
        this.channel="Animal Planet"
      }
      else if(channel_name=='discovery'){
        this.channel="Discovery"
      }
      else if(channel_name=='national_geographic'){
        this.channel="National Geographic"
      }
      else if(channel_name=='muz_tv'){
        this.channel="Муз Тв"
      }
      else if(channel_name=='eurosport1'){
        this.channel="Eurosport 1"
      }
      else if(channel_name=='eurosport2'){
        this.channel="Eurosport 2"
      }
      else if(channel_name=='mz_muzzone'){
        this.channel="MZ Muzzone"
      }
      
      
      else{
        this.channel="Tv"
      }
      this.$nextTick(function () {
        this.autoplay(channel_name);
      });
    },
    onLockedImageClick(channel){
      this.tg.showAlert("Купи подписку черт")
    },

    autoplay(channel_name) {
    
      if (channel_name){
        streamUrl = this.videoSources[channel_name]
      }

      if (streamUrl){

        if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(streamUrl);
          hls.attachMedia(this.$refs.video);
          this.$refs.video.play();
            // this.$refs.video.requestFullscreen();
        } else if (this.$refs.video.canPlayType('application/vnd.apple.mpegurl')) {
          this.$refs.video.src = streamUrl;
          this.$refs.video.addEventListener('loadedmetadata', function () {
            this.$refs.video.play();
          }.bind(this));
        }
      }


    }, 

    close_webapp() {
      // var context = {
      //   status: "success"
      // }
      // this.tg.sendData(JSON.stringify(context));

      this.tg.close();
    },
    back(){
      this.showPlayerBlock = false;
      this.showChannelsBlock = true;
    }

  },
});
