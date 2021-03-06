## HEROKU LINK
https://sleepy-dusk-25015.herokuapp.com/

## CREATE APP
```bash
rails new capstone-app -d postgresql -T
cd capstone-app
rails db:create
```

## ADDING RSpec
```bash
bundle add rspec-rails
rails generate rspec:install
```

## ADDING React
```bash
bundle add webpacker
bundle add react-rails
rails webpacker:install
rails webpacker:install:react
yarn add @babel/preset-react
yarn add @rails/activestorage
yarn add @rails/ujs
rails generate react:install
rails generate react:component App
```

## ADDING DEVISE
```bash
bundle add devise
rails generate devise:install
rails generate devise User
rails db:migrate
```

### config/environments/development.rb
```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

### config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

## Rails Routing
```bash
rails generate controller Home
```
- Add a file in app/views/home called index.html.erb
- Add the following:

### app/views/home/index.html.erb
```ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```
Add the following:
app/views/layouts/application.html.erb
```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```
### Adding react-bootstrap
```bash
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add react-bootstrap
```
### app/assets/stylesheets/application.scss
```scss
@import 'bootstrap';
```
### Resources
```bash
rails g scaffold Cocktail name:string image:string ingredients:text directions:text user:references --api
```
Go to cocktail migration and add the following to the ingredients and directions row;
```ruby
      t.text :ingredients, array: true, default:[]
      t.text :directions, array: true, default:[]
```
### Adding seeds
- please refer to seeds.rb

### Jest testing
```bash
yarn add jest
yarn add jest-enzyme
yarn add enzyme
yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
```

### New Driver Starting Commands
```bash
yarn
bundle
yarn add reactstrap
rails db:setup
```

## Navigation
- Added routes to **app/javascript/components/App.js** for:
  - /lastcallindex
  - /lastcallprotectedindex
  - /lastcallshow
  - /lastcallnew
  - /lastcalledit
  - /about
  - *
- NavItem from reactstrap should be used to remount components and NavLink from react-router-dom for components that do not need to be remounted.
- Header navigation to devise views require href. Using to with react-router-dom NavLink does not work until a manual refresh

- Header/Footer renders correctly
- Header/Footer have tests for rendering

### Show/Conditional Rendering
- check login status by destructuring logged_in out of props. We can use this to conditionally render the edit and delete buttons
- This component is functional because react-router-dom6 does not support params match in the route. Had to utilize useParams() hook to get the slug
- Testing was interesting because the id had to be set as undefined to get page to shallow render. All other data could be mocked to check for functionality of conditional rendering.

### Protected Index
- Rather than creating a separate page, we used OffCanvas to filter the list we got from the original fetch request on the app page to render only the items that match the current user id.

### Protected Create
- We were having issues with Create that stemmed from the way we did scaffolding in the environment set up. Our solution was to recreate the app from the ground up using the correct scaffolding techniques. We took the NewApp and force pushed it to main overwriting the OldApp. All the merge history was lost in the overwrite; several devs have the OldApp on their local as a separate repo.

- Protected Create is now functional. If a user hits the 'return' key at any time, it will submit the data in the forms.