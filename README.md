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

### Integrating React  with Django

- To integrate any front-end framework we need to install npm to manage all the packages. If you don't have npm install in your system then checkout any online resources to install node.

- First we will initialize npm in our project. 
	``` 
	 in terminal go to your static directory, type npm init and hit enter 
	 ```

- This will create a package.json file in static directory, now lets install the required packsge with following command
	```
    npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader 	css-loader  webpack webpack-loader webpack-dev-server
	```
- After all dependencies installed your package.json will look like this 
	```json
	{
	  "name": "django-react",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"webpack": "webpack"
	  },
	  "author": "",
	  "license": "ISC",
	  "devDependencies": {
		"@babel/core": "^7.5.5",
		"@babel/preset-env": "^7.5.5",
		"@babel/preset-react": "^7.0.0",
		"babel-loader": "^8.0.6",
		"css-loader": "^3.2.0",
		"node-sass": "^4.12.0",
		"webpack": "^4.39.3",
		"webpack-cli": "^3.3.7",
		"webpack-dev-server": "^3.8.0",
		"webpack-loader": "0.0.1"
	  },
	}

	```

- Also let's install react packges with npm 
	```
        npm install react react-dom
	```
- Now create webpack.config.json in static directory and add following code snippet.
	```javascript
	const path = require('path');

	module.exports = {
	  entry: {
		app: './src/index.js'
	  },
	  watch: true,
	  devtool: 'source-map',
	  output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	  },
	  mode: 'development',
	  module: {
		rules: [
		  {
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: 'babel-loader',
			  query: {
				 presets: ["@babel/preset-env","@babel/preset-react"]
			  }
		  }
		]
	  },
	  resolve: {
		  extensions: [
			 '.js'
		  ]
	  }
	}

	```

- Under static directory create src folder  and add index.js file which will be the entry point for our react app.

- Add following code in your index.js file 
	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';

	const element = (
	  <div>
		<h1>Simple Html</h1>
	  </div>
	);

	ReactDOM.render(
	  element,
	  document.getElementById('root')
	)

	```

- Now change your index.html file in template directory, so that it can render React Components.
	```html
	{% load static %}
	<html>
		<head>
			<title>INdex</title>
		</head>
		<body>
			<div id="root"></div>
			<script src="{% static 'dist/app.bundle.js' %}"></script>
		</body>
	</html>

	```

- Directory structure will look like this 
	```
    	- static/
		 	-src/
            	index.js
        - node_modules/       
        - package.json
        - webpack.config.js
    ```

- Now run django server in one console  
		python manage.py runserver 
and run the npm server to watch webpack in another console
		npm run webpack
		

------------


### Finally we have successfully completed the integration of react with django.

Please fill free to raise issue if you find any difficulty.
        
