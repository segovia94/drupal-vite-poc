# Drupal and Vite proof of concept

This is a theme to demonstrate using [Vite](https://vitejs.dev/) inside of Drupal.

It is assumed that this theme will be inside a Drupal project running on its own local server like `my-site.local`.

To enable the Vite development server, first add the following into your `settings.php` (preferably `settings.local.php`) file.
```
$settings['hot_module_replacement'] = TRUE;
```

Next, install the required Node modules from the theme directory with:
```
npm install
```

Finally, start up the Vite development server:
```
npm start
```

Assets such as JS and CSS will now be served from Vite's `http://localhost:12321`.
