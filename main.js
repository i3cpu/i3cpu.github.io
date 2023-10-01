var app = new Vue({
  el: '.main',
  data: {
    showChannelsBlock: true,
    showPlayerBlock: false,
    tg: window.Telegram.WebApp,
    channel: '',
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
      karusel:'https://tbs01-edge11.itdc.ge/karusel/tracks-v1a1/mono.m3u8',
      match_planeta:'https://tbs01-edge11.itdc.ge/matchplaneta/tracks-v1a1/mono.m3u8',
      my5:'https://s05.watcher.uz/66/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sevimli:'https://s04.watcher.uz/72/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzbekistan24:'https://s04.watcher.uz/8/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',

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
      else{
        this.channel="Tv"
      }
      this.$nextTick(function () {
        this.autoplay(channel_name);
      });
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
