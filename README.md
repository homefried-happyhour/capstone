## CREATE APP
```bash
rails new apartment-app -d postgresql -T
cd apartment-app
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
app/assets/stylesheets/application.scss
```scss
@import 'bootstrap';
```
Resources
```bash
rails g scaffold Cocktail image:string ingredients:text directions:text user_id:integer --api
rails g controller Home
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
yarn add --dev jest
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
