var app = new Vue({
    el: '.main',
    data: {
  
      showInfoBlock: true,
      showFormBlock: false,
      first_name:'',
      adress:'',
      phone:'',
      date:'',
      tarif:'',
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
            first_name: this.first_name,
            adress: this.adress,
            phone:this.phone,
            date:this.date,
            comments:this.comments,
            tarif:this.tarif,
            status:"succes"
        }
  
        this.tg.sendData(JSON.stringify(context));
        this.tg.close();
      },
    close_webapp(){
        this.tg.close();
      },
      go_to_tarifs(){
        window.location.href = "https://i3cpu.github.io/webapp/tarif.html";
      },
    },

    
  });