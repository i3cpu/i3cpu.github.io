new Vue({
    el: '#main',
    data: {
      selectedImage: null,
    },
    methods: {
      
      onImageClick(character) {
        this.selectedImage = image;
        context = {
            character: character,
            status:"succes"
        }
  
        this.tg.sendData(JSON.stringify(context));
        this.tg.close();
      },
    },
  });
  