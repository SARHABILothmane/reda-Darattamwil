import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent implements OnInit {

  initAccordions() { 
    if ($('.accordion').length) {
        var accs = $('.accordion');

        accs.each(function() {
            var acc = $(this);
 
            if (acc.hasClass('active')) {
                var panel = $(acc.next());
                var panelH = panel.prop('scrollHeight') + "px";

                if (panel.css('max-height') == "0px") {
                    panel.css('max-height', panel.prop('scrollHeight') + "px");
                } else {
                    panel.css('max-height', "0px");
                }
                $(window).trigger('resize.px.parallax');
            }

            acc.on('click', function() {
                if (acc.hasClass('active')) {
                    acc.removeClass('active');
                    var panel = $(acc.next());
                    var panelH = panel.prop('scrollHeight') + "px";

                    if (panel.css('max-height') == "0px") {
                        panel.css('max-height', panel.prop('scrollHeight') + "px");
                    } else {
                        panel.css('max-height', "0px");
                    }
                    $(window).trigger('resize.px.parallax');
                } else {
                    acc.addClass('active');
                    var panel = $(acc.next());
                    var panelH = panel.prop('scrollHeight') + "px";

                    if (panel.css('max-height') == "0px") {
                        panel.css('max-height', panel.prop('scrollHeight') + "px");
                    } else {
                        panel.css('max-height', "0px");
                    }
                    $(window).trigger('resize.px.parallax');
                }
            });
        });
    }
}

constructor() { }

ngOnInit(): void {
this.initAccordions();
}

}
