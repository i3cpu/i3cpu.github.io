var app = new Vue({
    el: '.main',
    data: {
  
      showInfoBlock: true,
      showFormBlock: false,
      first_name:'',
      adress:'',
      phone:'',
      date:'',
      comments:'',
      tg:window.Telegram.WebApp,
      
    },
    mounted:function(){
        if (this.tg.isExpanded == false){
          this.tg.expand()
        }
      },
    methods: {
    to_form(){
        this.showFormBlock = true;
        this.showInfoBlock = false
      },
    send_data(){
  
        context = {
            first_name_name: this.city_name,
            adress: this.adress,
            phone:this.phone,
            date:this.date,
            comments:this.comments,
            status:"succes"
        }
  
        this.tg.sendData(JSON.stringify(context));
        this.tg.close();
      },
    close_webapp(){
        this.tg.close();
      },
    },

    
  });