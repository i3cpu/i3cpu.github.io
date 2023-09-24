var app = new Vue({
  el: '.main',
  data: {
    showChannelsBlock: true,
    showPlayerBlock: false,
    tg: window.Telegram.WebApp,
    channel_name: '',
    videoSources: {
      zortv: 'https://s04.watcher.uz/6/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      milliy: 'https://s05.watcher.uz/70/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      uzreport: 'https://s03.watcher.uz/75/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15',
      sport: 'https://s04.watcher.uz/59/video.m3u8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdF9pZCI6MjcwMTc3LCJsb2dpbiI6InR2LTI3MDE3NyIsInRlbXBvcmFyeSI6ZmFsc2UsImlzX29hdXRoIjpmYWxzZSwiY3JlYXRlZF90aW1lIjoxNjUwMjgzMDI3fQ.LadLj4b6plIxTGCWntQQqsQGZ3R9EsvwhaXQd1sur2g%3A15'
    }
  },
  methods: {

    onImageClick(channel_name) {
      this.showPlayerBlock = true;
      this.showChannelsBlock = false;
      this.channel_name = channel_name;
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
