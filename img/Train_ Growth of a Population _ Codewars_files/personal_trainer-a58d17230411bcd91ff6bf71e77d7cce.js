(function(){App.ns("Controls.PersonalTrainer.SetupController",App.Control({init:function(){return this.updateFormLanguages(),this.trackingName="Trainer Setup",this.track("Loaded")},events:{".js-save click":function(){return this.track("Save"),this.save()},".icon-list a click":function(e){return e.toggleClass("is-active"),this.updateFormLanguages()}},updateFormLanguages:function(){var e;return e=$(".icon-list a.is-active").map(function(){var e;return e=$(this),{id:e.data("language"),name:e.data("language-formatted")||e.find("p").text()}}),this.currentLanguages={},e.toArray().each(function(e){return function(t){return e.currentLanguages[t.id]={id:t.id,name:t.name,value:$("[name='"+t.id+"']").val()}}}(this)),this.currentLanguages},save:function(){var e;return e={weekly_newsletter:!!$("#user_weekly_newsletter_true:checked").val(),experience:$(".user_experience input:checked").val(),languages:$(".icon-list a.is-active").map(function(){var e;return e=$(this),{name:e.data("language")}}).toArray()},e.experience?$.post(App.route("save"),e,function(e){return e.success?(App.alerts.success('<i class="icon-moon-check"></i> Settings saved'),App.load(App.route("post_save"))):App.alerts.fail("Failed to save settings. Please try again")}):$(".radio_buttons").addClass("has-error")}}))}).call(this);