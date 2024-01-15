let Ajax = {
	csrf: function (obj) {
		obj = obj == undefined ? 'meta[name="csrf-token"]' : obj;
		let token = $(obj).attr('content');
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': token,
			}
		});
	},
};

let Action = {
	links: function (obj) {
		let self = this;
		$(obj).click(function (e) {
			self.prevent(e);
		});
	},
	prevent: function (event) {
		event.preventDefault();
	},
};

let Auth = {
	exit: function (obj) {
		$(obj).click(function (e) {
			Action.prevent(e);
			$(e.target).parent().find('.logout-form').submit();
		});
	},
};

let Footer = {
	DEF: {
		object: '.footer',
		fixed: 'footer_attached-bottom',
	},
	object: null,
	fixed: null,
	init: function () {
		this.object = $(this.DEF.object);
		this.fixed = this.DEF.fixed;
		return this.object.length == true;
	},
	fix: function (timeout) {
		let self = this;
		timeout = timeout == undefined ? 100 : timeout;

		if(!self.init()) {
			return false;
		}
		setTimeout(function () {
			let screen = $(window).innerHeight();
			let height = self.object.outerHeight();
			let body = self.object.offset().top + height;
			if(body <= screen) {
				self.object.addClass(self.fixed);
			}
		}, timeout);
	},
};

let Form = {
	style: function (types) {
		types = types.split(' ');
		let selector = '';
		types.forEach(function (type) {
			if(type == 'file') {
				selector += 'input[type="'+ type +'"]';
			}
		});
		$(selector).styler();
	},
	wysiwyg: function () {
		if(!$('.wysiwyg').length) {
			return false;
		}
		$('.wysiwyg').each(function () {
			new Jodit(this,
			{
				language: 'ru',
				buttons: [
					'paragraph', 'align',            '|',
					'bold', 'underline', 'italic',   '|',
					'ul', 'ol',                      '|',
					'link', 'image', 'video',        '|',
					'table',                         '|',
					'undo', 'redo',                  '|',
					'fullsize', 'print',             '|',
					'source',
				],
				editorCssClass: 'format',
				addNewLineOnDBLClick: false,
				link: {
					followOnDblClick: false,
				},
				useNativeTooltip: true,
				events: {
					afterInit: function (e) {
						var t = this;
					},
				},
				uploader: {
					url: $(this).data('uploader'),
					format: 'json',
					headers: {
						'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
					},
					isSuccess: function (e) {
						console.log(e);
						return e.success;
					},
					error: function(e) {
						console.log('error', e);
						// alert('Ошибка. Подробности в консоли');
					},
					contentType: function(e){
						return (void 0 === this.jodit.ownerWindow.FormData || 'string' == typeof e) && 'application/x-www-form-urlencoded; charset=UTF-8';
					}
				},
				filebrowser: {
					buttons: [
						"filebrowser.update",
						"filebrowser.remove",
						"filebrowser.select",
						"|",
						"filebrowser.tiles",
						"filebrowser.list",
						"|",
						"filebrowser.sort"
					],
					deleteFolder: false,
					ajax: {
						url: $(this).data('filebrowser'),
						method: 'POST',
						headers: {
							'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
						},
					},
					isSuccess: function (e) {
						console.log(e);
						// console.log(e.debug);
						return e.success;
					},
					error: function(e) {
						console.log('error', e);
						// alert('Ошибка. Подробности в консоли');
					},
				}
			});
		});
	},
	files: function () {
		$('input.js-files__input').each(function (index, input) {
			input = $(input);
			let line = input.closest('.form__line');
			line.addClass('js-files');
		});
		$('input.js-files__input').change(function () {
			let line = $(this).closest('.js-files');
			let list = line.find('.js-files__list');
			let multiple = this.multiple;
			let files = this.files;
			if(!files) {
				return false;
			}
			if(!multiple) {
				list.html('');
			}
			for (var i = 0; i < files.length; i++) {
				let reader = new FileReader();
				reader.onload = function (e) {
					// PREVIEW create
					let preview = '';
					if(e.target.is_image) {
						preview = '<img src="' + e.target.result + '" alt="" class="files__img">';
					}
					else {
						let ico = 'far fa-file';
						if(e.target.f_type == 'application/pdf') ico = 'far fa-file-pdf';
						preview = '<div class="files__ico">\
							<i class="'+ ico +'"></i>\
						</div>';
					}

					// PREVIEW attach
					list.append('<div class="files__item">'+
						preview +'\
						<div class="files__mime">'+ e.target.f_type +'</div>\
					</div>');
				}
				// READER attach
				reader.f_name = files[i].name;
				reader.f_type = files[i].type;
				reader.is_image = files[i].type.match('image.*') ? true : false;

				reader.readAsDataURL(files[i]);
			}
		});
	},
};

let List = {
	bindDeletes: function () {
		$('.js-delete').click(function (e) {
			let item = $(this).closest('.list__item');
			let id = item.find('.list__id').text();
			if(!confirm('Удалить безвозвратно элемент #'+ id)) {
				return false;
			}
			let	href = $(this).attr('href');
			let header = $('.content__header');

			$.ajax({
				url: href,
				method: 'DELETE',
				success: function(response) {
					item.stop().slideUp(300, function () {
						$(this).remove();
					});

					if($('.alert').length == 0) {
						header.after('<div class="alert" style="display:none;"></div>');
					}
					$('.alert').html(response).slideDown(300);
					$('.errors').slideUp(300, function () {
						$(this).remove();
					});
				},
				error: function(response) {
					if($('.errors').length == 0) {
						header.after('<div class="errors"><div class="errors__item" style="display:none;"></div></div>');
					}
					$('.errors__item').html('ERROR: <b>'+ response.status +'</b><br>'+ response.responseJSON).slideDown(300);
					$('.alert').slideUp(300, function () {
						$(this).remove();
					});
				}
			});
			Action.prevent(e);
		});
	},
};

let Images = {
	fancy: function () {
		$('.js-fancy').fancybox({
			infobar: "true",
			toolbar: "true",
			buttons: [
				"zoom",
				"share",
				// "slideShow",
				"fullScreen",
				// "thumbs",
				"close"
			],
			animationEffect: "zoom",
		});
	},
};
