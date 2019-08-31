# Django React Integration 

### Step by step guide for  creating fullstack application usig django for backend and react for front-end


------------

Django  Basic Setup and Configuration
- Create django project  by using command `django-admin startproject myproject`
- Make sure your django server is up and running by using the command `python manage.py runserver` you will be able to see django's default  page.

- Let's make some basic configuration changes in settings.py file to serve html files from templates directory which will help us to keep our project well structured.

- Add following line at starting of settings.py file after 'BASE_DIR'
	
		```
        # Template directory to serve html templates
        TEMPLATE_DIR = os.path.join(BASE_DIR, 'template')
        ```
		
- Then add "TEMPLATE_DIRS" in your template module in settings.py file, which will look something like below 
	   
       {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [TEMPLATE_DIR,],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
- Now let's create template directory in our projects root directory which will contains all our html files.

- Similary we will create a static folder to serve static files and add following lines at bottom of our settings.py file.

	` STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
] `

- Lets's create  simple html file 'index.html' in our template file

  ```html
  <html>
      <head>
          <title>Index</title>
      </head>
      <body>
          <div id="root"> Simple Html </div>
      </body>
  </html>

  ```
- Create views.py file inside mysite and add following function.
    ```
	from django.shortcuts import render
    def index(request):
        return render(request, "index.html")
	```

- Now to import our view in urls.py file which will look like this
		
        from . import views
		
		urlpatterns = [ 
				path('', views.index), 
				path('admin/', admin.site.urls),
		]

- To make sure we all are align together, checkout your folder structure which should look like this  
	```	
		- mysite
			__init__.py
			settings.py
			urls.py
			views.py
			wsgi.py
		- static
		- template
			index.html
		manage.py
  ```

- Now let's run django server and you will be able to see the Simple Html on your browser page.


We have alsmost finished with our django setup and now we will go ahead and integrate front-end framework React. 


------------
        
