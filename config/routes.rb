Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Leave root route at the top, because it should be matched first.
  root to: 'static_pages#root'

end

# npm init -y
# npm install webpack webpack-cli react react-dom react-redux redux redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader redux-logger react-router-dom