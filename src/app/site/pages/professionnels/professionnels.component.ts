import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionnels',
  templateUrl: './professionnels.component.html',
  styleUrls: ['./professionnels.component.css']
})
export class ProfessionnelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initTabs();
    this.initAccordions();
    this.initDropdowns()
  }
	/* 

	5. Init Tabs

	*/

initTabs()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);

				var panels = $('.tab_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}
/* 

	6. Init Accordions

	*/

	 initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

	/* 

	7. Init Dropdowns

	*/

	 initDropdowns()
	{
		if($('.dropdowns li').length)
		{
			var dropdowns = $('.dropdowns li');

			dropdowns.each(function()
			{
				var dropdown = $(this);
				if(dropdown.hasClass('has_children'))
				{
					if(dropdown.hasClass('active'))
					{
						var panel = $(dropdown.find('> ul'));
						var panelH = panel.prop('scrollHeight') + "px";

						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						}
					}

					dropdown.find(' > .dropdown_item').on('click', function()
					{
						var panel = $(dropdown.find('> ul'));
						var panelH = panel.prop('scrollHeight') + "px";
						dropdown.toggleClass('active');

						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						}
					});
				}
			});
		}
	}
}
