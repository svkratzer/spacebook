Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Leave root route at the top, because it should be matched first.
  root to: 'static_pages#root'

end
