Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]
    resources :reacts
    resources :comments, except: [:index, :create]
    
    resources :users, only: [:create, :show, :update, :index] do 
      resources :posts, only: [:index]
      resources :friends, only: [:create, :destroy, :index]
    end

    resources :posts, only: [:show, :create, :update, :destroy] do 
      resources :comments, only: [:index, :create]
    end

  end

end
